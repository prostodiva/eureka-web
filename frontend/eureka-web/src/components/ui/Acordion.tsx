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
        <div
          className="flex justify-between p-5 bg-[#8658F1] border-b items-center cursor-pointer text-white font-inter leading-relaxed"
          onClick={() => handleClick(index)}
        >
          {item.label}
          {icon}
        </div>
        {isExpanded && (
          <div className="border-b p-5 text-white font-inter">
            {item.content}
          </div>
        )}
      </div>
    );
  });

  return <div className="border-x border-t rounded">{renderedItems}</div>;
}

export default Accordion;
