import classNames from 'classnames';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  minHeightScreen?: boolean;
  style?: React.CSSProperties;
}

const Section = ({ children, className = '', minHeightScreen = false, style
}: SectionProps) => {
  return (
    <section
      className={classNames(
        `py-24 md:py-40 px-8 md:px-16 w-full`,
        minHeightScreen && `min-h-screen`,
        className
      )}
      style={style}
    >
      {children}
    </section>
  );
};

export default Section;
