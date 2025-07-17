"use client"

import type * as React from "react"
import { cn } from "@/lib/utils"

interface ModalProps {
  isOpen: boolean
  onClose: () => void
  children: React.ReactNode
  className?: string
  overlayClassName?: string
  contentClassName?: string
}

const Modal = ({ isOpen, onClose, children, className, overlayClassName, contentClassName }: ModalProps) => {
  if (!isOpen) return null

  return (
    <div
      className={cn("fixed inset-0 z-50 flex items-center justify-center p-4", className)}
      role="dialog"
      aria-modal="true"
    >
      {/* Overlay */}
      <div
        className={cn(
          "fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300 ease-out animate-in fade-in",
          overlayClassName,
        )}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Content */}
      <div
        className={cn(
          "relative z-10 w-full max-w-lg rounded-lg bg-white p-6 shadow-lg transition-all duration-300 ease-out dark:bg-gray-800 animate-in zoom-in-95 slide-in-from-bottom-2",
          contentClassName,
        )}
      >
        {children}
      </div>
    </div>
  )
}

interface ModalHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  onClose?: () => void
}

const ModalHeader = ({ className, children, onClose, ...props }: ModalHeaderProps) => (
  <div className={cn("flex items-center justify-between pb-4", className)} {...props}>
    {children}
    {onClose && (
      <button
        type="button"
        onClick={onClose}
        className="text-gray-400 hover:text-gray-600 dark:text-gray-500 dark:hover:text-gray-300"
        aria-label="Close"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    )}
  </div>
)
ModalHeader.displayName = "ModalHeader"

const ModalTitle = ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
  <h3 className={cn("text-lg font-semibold text-gray-900 dark:text-gray-100", className)} {...props} />
)
ModalTitle.displayName = "ModalTitle"

const ModalDescription = ({ className, ...props }: React.HTMLAttributes<HTMLParagraphElement>) => (
  <p className={cn("text-sm text-gray-500 dark:text-gray-400", className)} {...props} />
)
ModalDescription.displayName = "ModalDescription"

const ModalBody = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn("py-4", className)} {...props} />
)
ModalBody.displayName = "ModalBody"

const ModalFooter = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn("flex justify-end gap-2 pt-4", className)} {...props} />
)
ModalFooter.displayName = "ModalFooter"

export { Modal, ModalHeader, ModalTitle, ModalDescription, ModalBody, ModalFooter }
