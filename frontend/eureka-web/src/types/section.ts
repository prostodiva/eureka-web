import React from 'react';
import type { ResponsiveImage } from './responsiveImage.ts';

export interface BaseSectionProps {
  className?: string;
  style?: React.CSSProperties;
  actions?: React.ReactNode;
  backgroundImage?: ResponsiveImage;
  children?: React.ReactNode;
  button?: React.ReactNode;
  buttonClassName?: string;
  onClick?: () => void;
}
