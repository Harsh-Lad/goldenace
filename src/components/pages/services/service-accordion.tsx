"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ServiceItem } from "@/lib/constants";

interface ServiceAccordionProps {
  items: ServiceItem[];
}

export default function ServiceAccordion({ items }: ServiceAccordionProps) {
  return (
    <Accordion type="single" collapsible className="w-full">
      {items.map((item, index) => (
        <AccordionItem key={index} value={`item-${index}`}>
          <AccordionTrigger className="text-lg font-medium">
            {item.title}
          </AccordionTrigger>
          <AccordionContent className="text-muted-foreground">
            {item.description}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
