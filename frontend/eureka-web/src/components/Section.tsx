interface SectionProps {
  children: React.ReactNode;
  className?: string;
  minHeightScreen?: boolean;
  style?: React.CSSProperties;
  backgroundImage?: string;
}

const Section = ({ children, style, className
}: SectionProps) => {
  return (
    <section
      className={`relative min-h-screen ${className || ''}`}
      style={{
        backgroundColor: 'white',
        ...style,
      }}
    >
      <div>{children}</div>
    </section>
  );
};

export default Section;
