interface SectionProps {
  children: React.ReactNode;
  className?: string;
}

const Section = ({ children, className = '' }: SectionProps) => {
  return (
    <section className={`py-20 md:py-40 px-8 ${className}`}>{children}</section>
  );
};

export default Section;
