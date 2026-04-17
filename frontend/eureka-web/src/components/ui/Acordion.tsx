import { useState } from 'react';
import { GoChevronDown, GoChevronLeft } from 'react-icons/go';

interface AccordionItem {
  id: number;
  label: string;
  content: React.ReactNode;
}

interface AccordionProps {
  items: AccordionItem[];
}

function Accordion({ items }: AccordionProps) {
  const [expandedIndex, setExpandedIndex] = useState(-1);

  const handleClick = (nextIndex: number) => {
    if (expandedIndex === nextIndex) {
      setExpandedIndex(-1);
    } else {
      setExpandedIndex(nextIndex);
    }
  };

  const renderedItems = items.map((item, index) => {
    const isExpanded = index === expandedIndex;

    const icon = (
      <span>{isExpanded ? <GoChevronDown /> : <GoChevronLeft />}</span>
    );

    return (
      <div key={item.id} className="bg-[#8658F1] rounded-xl overflow-hidden">
        <button
          id={`accordion-header-${item.id}`}
          className="flex justify-between items-center w-full px-6 py-4 sm:px-10 sm:py-6 text-left text-white font-semibold text-lg sm:text-xl"
          onClick={() => handleClick(index)}
          aria-expanded={isExpanded}
          aria-controls={`accordion-content-${item.id}`}
        >
          {item.label}
          {icon}
        </button>
        <div
          className={`bg-yellow-400 text-[#8658F1] px-6 sm:px-10 overflow-hidden transition-all duration-300 ease-in-out ${
            isExpanded ? "max-h-96 py-4 sm:py-6 opacity-100" : "max-h-0 py-0 opacity-0"
          }`}
        >
          {item.content}
        </div>
      </div>
    );
  });

  return (
    <div className="w-full max-w-3xl mx-auto px-4 py-6 flex flex-col gap-4">
      {renderedItems}
    </div>
  );
}

export default Accordion;
