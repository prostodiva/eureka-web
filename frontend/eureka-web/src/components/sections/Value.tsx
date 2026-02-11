import Section from '../Section.tsx';

export interface ValueProps {
  backgroundImage?: string;
  content: React.ReactNode;
  actions?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}


function Value({ backgroundImage, content, className, actions, style }: ValueProps) {
  return (
    <Section
      aria-labelledby="value-heading"
      className={`relative flex flex-col justify-center items-center ${className || 'min-h-screen'}`}
      style={{
        backgroundImage: backgroundImage
          ? `url(${backgroundImage})`
          : undefined,
        ...style,
      }}
    >
      <div className="relative min-h-screen">
        {content}
        {actions}
      </div>
    </Section>
  );
}

export default Value;