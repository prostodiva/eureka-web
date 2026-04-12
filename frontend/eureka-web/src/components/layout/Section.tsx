import type { BaseSectionProps } from '@/types/section.ts';

const Section = ({
  children,
  className,
  backgroundImage,
  style,
  button,
  buttonClassName,
  ...rest
}: BaseSectionProps) => {
  return (
    <section
      {...rest}
      style={style}
      className={`relative w-full ${className || ''}`}
    >
      {backgroundImage && (
        <picture className="absolute inset-0 z-0 w-full h-full">
          <source srcSet={backgroundImage.avifSrcSet} type="image/avif" />
          <source srcSet={backgroundImage.webpSrcSet} type="image/webp" />
          <img
            src={backgroundImage.fallbackSrc}
            alt={backgroundImage.alt ?? ''}
            className="w-full h-full object-cover"
          />
        </picture>
      )}

      {button && (
        <div className={`absolute z-20 ${buttonClassName || ''}`}>{button}</div>
      )}

      <div className="relative z-10">{children}</div>
    </section>
  );
};

export default Section;
