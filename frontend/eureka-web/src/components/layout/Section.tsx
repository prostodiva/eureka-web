import React from 'react';

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  backgroundImage?: string;
}

const Section = ({
  children,
  className,
  backgroundImage,
  style,
  ...rest
}: SectionProps) => {
  return (
    <section
      {...rest}
      style={style}
      className={`relative w-full ${className || ''}`}
    >
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
