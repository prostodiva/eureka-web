import classNames from 'classnames';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  minHeightScreen?: boolean;
}

const Section = ({ children, className = '', minHeightScreen = false,
}: SectionProps) => {
  return (
    <section
      className={classNames(
        `py-24 md:py-40 px-8 md:px-16 w-full`,
        minHeightScreen && `min-h-screen`,
        className
      )}
    >
      {children}
    </section>
  );
};

export default Section;
