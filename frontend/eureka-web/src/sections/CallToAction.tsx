export interface CallToActionProps {
  title: string;
  subtitle?: string;
  description?: string;
  backgroundImage?: string;
  ctaLabel?: string;
  onCtaClick?: () => void;
}


function CallToAction({ title, description, ctaLabel, onCtaClick }: CallToActionProps) {
  return (
    <section aria-labelledby="callToAction-heading" className="px-4 py-8 bg-gray-50">
      <h2
        id="callToAction-heading"
        className="text-2xl md:text-3xl font-semibold mb-4"
      >
        {title}
      </h2>
      <p>{description}</p>
      <button className="btn btn-primary" onClick={onCtaClick}>{ctaLabel}</button>
    </section>
  );
}

export default CallToAction;
