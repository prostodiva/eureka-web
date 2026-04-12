import type { ResponsiveImage as ResponsiveImageType } from '../../types/responsiveImage.ts';

type Props = Omit<
  React.ImgHTMLAttributes<HTMLImageElement>,
  'src' | 'srcSet'
> & {
  image: ResponsiveImageType;
  sizes?: string;
};

function ResponsiveImage({ image, sizes = '100vw', alt, ...imgProps }: Props) {
  return (
    <picture>
      <source type="image/avif" srcSet={image.avifSrcSet} sizes={sizes} />
      <source type="image/webp" srcSet={image.webpSrcSet} sizes={sizes} />
      <img
        src={image.fallbackSrc}
        alt={alt ?? image.alt ?? ''}
        className="w-full h-auto"
        {...imgProps}
      />
    </picture>
  );
}

export default ResponsiveImage;
