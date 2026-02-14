import React from 'react';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  backgroundImage?: string;
}

const Section = ({
  children,
  className,
  style,
  backgroundImage,
}: SectionProps) => {
  return (
    <section
      className={`relative w-full ${className || ''}`}
      style={{
        backgroundImage: backgroundImage
          ? `url(${backgroundImage})`
          : undefined,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        ...style,
      }}
    >
      <div>{children}</div>
    </section>
  );
};

export default Section;
