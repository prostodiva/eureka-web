import React from 'react';
import type { ResponsiveImage } from './responsiveImage.ts';

export interface BaseSectionProps {
  className?: string;
  style?: React.CSSProperties;
  content: React.ReactNode;
  actions?: React.ReactNode;
  backgroundImage?: string | ResponsiveImage;
}