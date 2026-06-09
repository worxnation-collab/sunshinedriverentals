/*
 * FaqAccordion — SunshineDrive Rentals
 * Accessible accordion with smooth animation
 */
import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FaqItem {
  question: string;
  answer: string | React.ReactNode;
}

interface FaqAccordionProps {
  items: FaqItem[];
}

export default function FaqAccordion({ items }: FaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div>
      {items.map((item, i) => (
        <div key={i} className="faq-item">
          <button
            className="faq-trigger"
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
            aria-expanded={openIndex === i}
          >
            <span>{item.question}</span>
            <ChevronDown
              size={18}
              style={{
                transform: openIndex === i ? "rotate(180deg)" : "rotate(0deg)",
                transition: "transform 0.25s cubic-bezier(0.23, 1, 0.32, 1)",
                color: "var(--sd-green)",
                flexShrink: 0,
              }}
            />
          </button>
          <div
            className="faq-content"
            style={{ maxHeight: openIndex === i ? "600px" : "0px" }}
          >
            <p>{item.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
