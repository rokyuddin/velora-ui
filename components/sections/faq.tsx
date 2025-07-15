import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FAQ() {
  const faqs = [
    {
      question: "Is Velora UI free to use?",
      answer:
        "Yes, Velora UI is completely free and open source. You can use it in personal and commercial projects without any restrictions.",
    },
    {
      question: "How do I customize the components?",
      answer:
        "Velora UI components are built with Tailwind CSS and CSS variables, making them highly customizable. You can override styles using Tailwind utilities or by modifying the CSS variables.",
    },
    {
      question: "Does it work with Next.js?",
      answer:
        "Velora UI is built with Next.js in mind and works seamlessly with both the App Router and Pages Router. We provide specific documentation for Next.js integration.",
    },
    {
      question: "Are the components accessible?",
      answer:
        "Yes, accessibility is a core principle of Velora UI. All components follow WCAG guidelines and include proper ARIA attributes, keyboard navigation, and screen reader support.",
    },
    {
      question: "Can I contribute to the project?",
      answer:
        "We welcome contributions! Check out our GitHub repository for contribution guidelines, or join our Discord community to discuss ideas and get help.",
    },
  ]

  return (
    <section className="py-20 lg:py-32 bg-muted/50">
      <div className="container">
        <div className="max-w-2xl mx-auto text-center space-y-4 mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Frequently Asked Questions</h2>
          <p className="text-xl text-muted-foreground">Everything you need to know about Velora UI.</p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border rounded-lg px-6">
                <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
