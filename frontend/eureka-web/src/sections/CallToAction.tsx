import Button from '../components/Button.tsx';
import Section from '../components/Section.tsx';
import classNames from 'classnames';

export interface CallToActionProps {
  title: string;
  subtitle?: string;
  description?: string;
  backgroundImage?: string;
  ctaLabel?: string;
  onCtaClick?: () => void;
  className?: string;
}


function CallToAction({ title, description, ctaLabel, onCtaClick, className }: CallToActionProps) {
  return (
    <Section
      aria-labelledby="callToAction-heading"
      className={classNames('bg-gray-50', className)}
    >
      <h2
        id="callToAction-heading"
        className="text-2xl md:text-3xl font-semibold mb-4"
      >
        {title}
      </h2>
      <p>{description}</p>
      <Button variant="secondary" rounded onClick={onCtaClick}>
        {ctaLabel}
      </Button>
    </Section>
  );
}

export default CallToAction;
