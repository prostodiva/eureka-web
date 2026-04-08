import React from 'react';
import type { ResponsiveImage } from '../../types/responsiveImage.ts';
import ResponsiveImageEl from '../ui/ResponsiveImage.tsx';

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  backgroundImage?: string | ResponsiveImage;
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
      {backgroundImage &&
        (typeof backgroundImage === 'string' ? (
          <img
            src={backgroundImage}
            className="absolute inset-0 w-full h-full object-cover z-0"
            alt=""
          />
        ) : (
          <ResponsiveImageEl
            image={backgroundImage}
            className="absolute inset-0 w-full h-full object-cover z-0"
            alt=""
            sizes="100vw"
          />
        ))}
      {children}
    </section>
  );
};

export default Section;
