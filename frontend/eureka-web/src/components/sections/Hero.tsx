import type { BaseSectionProps } from '@/types/section.ts';


function Hero({
  backgroundImage,
  style,
  className,
  children,
}: BaseSectionProps) {
  
  return (
    <section
      style={style}
      className={`relative ${className || ''}`}
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

   

      {/* <div className="relative z-10"> */}
        {children}
      {/* </div> */}
    </section>
  );
}

export default Hero;
