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
      label: 'How can schools or kindergartens collaborate',
      content:
        'We offer flexible integration options for schools and kindergartens. Get access to a teacher dashboard, and track student progress. Reach out to us via the Contact page to discuss partnership plans tailored to your institution.',
    },
  ];

  return (
    <>
      <h1 className="absolute text-center top-20 flex flex-col">
        <span className="font-kingfink text-6xl font-inter font-regular text-[#FFDC5C] mt-10 whitespace-nowrap leading-none">
          CREATING MINDS <br />
          CONNECTING IMAGINATION <br />
        </span>

        <Accordion items={items}/>
      </h1>
    </>
  );
}
export default GameplayFaqContent;
