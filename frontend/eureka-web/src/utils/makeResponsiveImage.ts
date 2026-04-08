import type { ResponsiveImage } from '../types/responsiveImage.ts';

type Sources = {
  alt?: string;
  fallbackSrc: string;
  avif400: string;
  avif800: string;
  avif1200: string;
  avif1600?: string;
  avif2400?: string;
  webp400: string;
  webp800: string;
  webp1200: string;
  webp1600?: string;
  webp2400?: string;
};

export function makeResponsiveImage(src: Sources): ResponsiveImage {
  const avifEntries = [
    [src.avif400, 400],
    [src.avif800, 800],
    [src.avif1200, 1200],
    [src.avif1600, 1600],
    [src.avif2400, 2400],
  ].filter((v): v is [string, number] => Boolean(v[0]));

  const webpEntries = [
    [src.webp400, 400],
    [src.webp800, 800],
    [src.webp1200, 1200],
    [src.webp1600, 1600],
    [src.webp2400, 2400],
  ].filter((v): v is [string, number] => Boolean(v[0]));

  return {
    alt: src.alt,
    fallbackSrc: src.fallbackSrc,
    avifSrcSet: avifEntries.map(([url, w]) => `${url} ${w}w`).join(', '),
    webpSrcSet: webpEntries.map(([url, w]) => `${url} ${w}w`).join(', '),
  };
}

