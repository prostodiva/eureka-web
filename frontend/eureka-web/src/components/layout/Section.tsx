import React from 'react';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  backgroundImage?: string;
}

const Section = ({ children, className, backgroundImage }: SectionProps) => {
  return (
    <section className={`relative w-full ${className || ''}`}>
      {backgroundImage && (
        <img
          src={backgroundImage}
          className="absolute inset-0 w-full h-full object-cover z-0"
          alt=""
        />
      )}
      {children}
    </section>
  );
};

export default Section;
