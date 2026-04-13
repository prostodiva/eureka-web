import React from 'react';
import type { ResponsiveImage } from './responsiveImage.ts';

export interface BaseSectionProps {
  className?: string;
  style?: React.CSSProperties;
  backgroundImage?: ResponsiveImage;
  children?: React.ReactNode;
}
