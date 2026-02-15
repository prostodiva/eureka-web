import React from 'react';

export interface BaseSectionProps {
  className?: string;
  style?: React.CSSProperties;
  content: React.ReactNode;
  actions?: React.ReactNode;
  backgroundImage?: string;
}