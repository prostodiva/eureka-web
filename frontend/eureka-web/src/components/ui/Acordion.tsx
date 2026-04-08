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
        <div
            key={item.id}
            className="bg-[#8658F1] rounded-xl overflow-hidden"
        >
          <button
              id={`accordion-header-${item.id}`}
              className="flex justify-between items-center w-full px-6 py-10 text-left text-white font-semibold text-xl"
              onClick={() => handleClick(index)}
              aria-expanded={isExpanded}
              aria-controls={`accordion-content-${item.id}`}
          >
          {item.label}
          {icon}
        </button>
          {isExpanded && (
              <div
                  id={`accordion-content-${item.id}`}
                  role="region"
                  aria-labelledby={`accordion-header-${item.id}`}
                  className="bg-yellow-400 text-[#8658F1] px-6 py-10 text-xl"
              >
                {item.content}
              </div>
        )}
      </div>
    );
  });

  return (
      <div className="w-full max-w-accordion mx-auto px-8 flex flex-col gap-4">
        {renderedItems}
      </div>
  );
}

export default Accordion;
