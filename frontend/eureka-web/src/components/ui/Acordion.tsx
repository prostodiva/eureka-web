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
      <div key={item.id}>
        <button
          id={`accordion-header-${item.id}`}
          className="flex justify-between p-3 sm:p-4 md:p-5 bg-[#8658F1] border-b items-center cursor-pointer text-white font-inter leading-relaxed w-full text-left"
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
            className="border-b p-3 sm:p-4 md:p-5 text-white font-inter"
          >
            {item.content}
          </div>
        )}
      </div>
    );
  });

  return <div className="border-x border-t rounded">{renderedItems}</div>;
}

export default Accordion;
