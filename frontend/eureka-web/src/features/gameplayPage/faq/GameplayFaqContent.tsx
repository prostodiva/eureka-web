import Accordion from '../../../components/ui/Acordion.tsx';

function GameplayFaqContent() {

  const items = [
    {
      id: 1,
      label: 'What is Eurika?',
      content: 'Eurika is a puzzle-based learning app for kids.',
    },
    {
      id: 2,
      label: 'How does it work?',
      content: (
        <p>
          Drag and drop puzzle pieces to <strong>solve challenges</strong>.
        </p>
      ),
    },
    {
      id: 3,
      label: 'Is it free?',
      content: 'There is a free demo available to download.',
    },
    {
      id: 4,
      label: 'How can schools or kindergartens collaborate?',
      content:
        'We offer flexible integration options for schools and kindergartens. Get access to a teacher dashboard, and track student progress. Reach out to us via the Contact page to discuss partnership plans tailored to your institution.',
    },
  ];

  return (
    <>
      <h2 className="absolute text-center top-10 sm:top-15 md:top-20 flex flex-col px-4">
        <span className="font-kingfink text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-inter font-regular text-[#FFDC5C] mt-6 sm:mt-8 md:mt-10 leading-none">
          CREATING MINDS
          CONNECTING IMAGINATION
        </span>

        <Accordion items={items}/>
      </h2>
    </>
  );
}
export default GameplayFaqContent;
