"use client";

import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import { ChevronLeft, ChevronRight, Upload, FileText } from 'lucide-react';
import { extractPDFSections, highlightPDFSection, type PDFSection } from '@/lib/pdf-utils';
import dynamic from 'next/dynamic';

// Dynamically import PDF components to avoid SSR issues
const Document = dynamic(
  () => import('react-pdf').then((mod) => mod.Document),
  { ssr: false }
);

const Page = dynamic(
  () => import('react-pdf').then((mod) => mod.Page),
  { ssr: false }
);

// Set up PDF.js worker on client side only
if (typeof window !== 'undefined') {
  import('react-pdf').then((reactPdf) => {
    reactPdf.pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${reactPdf.pdfjs.version}/build/pdf.worker.min.js`;
  });
}

export function PDFViewer() {
  const [file, setFile] = useState<File | null>(null);
  const [numPages, setNumPages] = useState<number | null>(null);
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [selectedSection, setSelectedSection] = useState<string | null>(null);
  const [sections, setSections] = useState<PDFSection[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Load sections when component mounts
    const loadedSections = extractPDFSections();
    setSections(loadedSections);
  }, []);

  function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
    setNumPages(numPages);
    setLoading(false);
    setError(null);
  }

  function onDocumentLoadError(error: Error) {
    setError(`Failed to load PDF: ${error.message}`);
    setLoading(false);
  }

  function onFileChange(event: React.ChangeEvent<HTMLInputElement>) {
    const selectedFile = event.target.files?.[0];
    if (selectedFile && selectedFile.type === 'application/pdf') {
      setFile(selectedFile);
      setPageNumber(1);
      setSelectedSection(null);
      setLoading(true);
      setError(null);
    }
  }

  function goToPrevPage() {
    setPageNumber(prev => Math.max(prev - 1, 1));
  }

  function goToNextPage() {
    setPageNumber(prev => Math.min(prev + 1, numPages || 1));
  }

  function handleSectionClick(sectionId: string, page?: number) {
    setSelectedSection(selectedSection === sectionId ? null : sectionId);
    if (page && page !== pageNumber) {
      setPageNumber(page);
    }
    // Highlight the section in the PDF (conceptual for now)
    if (page) {
      highlightPDFSection(sectionId, page);
    }
  }

  const selectedSectionData = sections.find(section => section.id === selectedSection);

  return (
    <div className="min-h-screen bg-background p-4">
      <div className="max-w-7xl mx-auto">
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-foreground mb-4">PDF Document Viewer</h1>
          
          {!file && (
            <Card className="mb-6">
              <CardContent className="p-6">
                <div className="flex flex-col items-center justify-center space-y-4">
                  <Upload className="h-12 w-12 text-muted-foreground" />
                  <div className="text-center">
                    <h3 className="text-lg font-semibold mb-2">Upload PDF Document</h3>
                    <p className="text-muted-foreground mb-4">
                      Select a PDF file to view its content and navigate through sections
                    </p>
                    <div className="relative">
                      <input
                        type="file"
                        accept=".pdf"
                        onChange={onFileChange}
                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                      />
                      <Button className="pointer-events-none">
                        <Upload className="h-4 w-4 mr-2" />
                        Choose PDF File
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Left Panel - PDF Preview */}
          <div className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="h-5 w-5" />
                  PDF Preview
                  {file && (
                    <span className="text-sm font-normal text-muted-foreground ml-2">
                      ({file.name})
                    </span>
                  )}
                </CardTitle>
              </CardHeader>
              <CardContent>
                {file ? (
                  <div className="space-y-4">
                    {error && (
                      <div className="p-4 border border-red-200 bg-red-50 rounded-lg text-red-700">
                        {error}
                      </div>
                    )}
                    {loading && (
                      <div className="flex items-center justify-center p-8">
                        <div className="text-muted-foreground">Loading PDF...</div>
                      </div>
                    )}
                    {!error && !loading && (
                      <div className="border rounded-lg overflow-hidden bg-white">
                        <Document
                          file={file}
                          onLoadSuccess={onDocumentLoadSuccess}
                          onLoadError={onDocumentLoadError}
                          className="flex justify-center"
                        >
                          <Page
                            pageNumber={pageNumber}
                            width={typeof window !== 'undefined' ? Math.min(600, window.innerWidth - 100) : 600}
                            renderTextLayer={false}
                            renderAnnotationLayer={false}
                          />
                        </Document>
                      </div>
                    )}
                    
                    {numPages && (
                      <div className="flex items-center justify-between">
                        <Button
                          variant="outline"
                          onClick={goToPrevPage}
                          disabled={pageNumber <= 1}
                        >
                          <ChevronLeft className="h-4 w-4 mr-1" />
                          Previous
                        </Button>
                        
                        <span className="text-sm text-muted-foreground">
                          Page {pageNumber} of {numPages}
                        </span>
                        
                        <Button
                          variant="outline"
                          onClick={goToNextPage}
                          disabled={pageNumber >= numPages}
                        >
                          Next
                          <ChevronRight className="h-4 w-4 ml-1" />
                        </Button>
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="h-96 flex items-center justify-center border-2 border-dashed border-muted rounded-lg">
                    <div className="text-center text-muted-foreground">
                      <FileText className="h-16 w-16 mx-auto mb-4 opacity-50" />
                      <p>No PDF selected</p>
                      <p className="text-sm">Upload a PDF to view it here</p>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Right Panel - Sections List */}
          <div className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Document Sections</CardTitle>
              </CardHeader>
              <CardContent>
                <ScrollArea className="h-96">
                  <div className="space-y-3">
                    {sections.map((section, index) => (
                      <div
                        key={section.id}
                        className={`p-4 rounded-lg border cursor-pointer transition-all duration-200 hover:shadow-md ${
                          selectedSection === section.id
                            ? 'border-primary bg-primary/5 shadow-sm'
                            : 'border-border hover:border-primary/50'
                        }`}
                        onClick={() => handleSectionClick(section.id, section.page)}
                      >
                        <h3 className="font-semibold text-foreground mb-2">
                          {section.title}
                        </h3>
                        <p className="text-sm text-muted-foreground line-clamp-2">
                          {section.content}
                        </p>
                        {section.page && (
                          <p className="text-xs text-muted-foreground mt-2">
                            Page {section.page}
                          </p>
                        )}
                      </div>
                    ))}
                  </div>
                </ScrollArea>
              </CardContent>
            </Card>

            {/* Selected Section Details */}
            {selectedSectionData && (
              <Card className="border-primary">
                <CardHeader>
                  <CardTitle className="text-primary">
                    {selectedSectionData.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <p className="text-foreground leading-relaxed">
                      {selectedSectionData.content}
                    </p>
                    {selectedSectionData.page && (
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <FileText className="h-4 w-4" />
                        <span>Located on page {selectedSectionData.page}</span>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}