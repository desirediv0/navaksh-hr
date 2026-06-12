"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  items: FAQItem[];
}

export default function FAQ({ items }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First item open by default

  return (
    <div className="w-full rounded-xl overflow-hidden border border-slate-200/80 shadow-sm bg-white">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div
            key={index}
            className="border-b border-slate-200/80 last:border-b-0"
          >
            <button
              onClick={() => setOpenIndex(isOpen ? null : index)}
              className="w-full flex items-center justify-between px-6 py-5 text-left font-sans font-bold text-slate-800 hover:text-[#18A6D9] transition-colors focus:outline-none group"
            >
              <span className="text-sm md:text-base leading-snug">{item.question}</span>
              <ChevronDown
                className={cn(
                  "w-4 h-4 text-slate-400 transition-transform duration-300 flex-shrink-0 ml-4 group-hover:text-[#18A6D9]",
                  isOpen && "rotate-180 text-[#18A6D9]"
                )}
              />
            </button>
            
            <div
              className={cn(
                "overflow-hidden transition-all duration-300 ease-in-out",
                isOpen ? "max-h-[300px] opacity-100" : "max-h-0 opacity-0"
              )}
            >
              <div className="px-6 pb-6 text-xs md:text-sm text-slate-500 font-light leading-relaxed font-sans border-t border-slate-50 pt-4">
                {item.answer}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}