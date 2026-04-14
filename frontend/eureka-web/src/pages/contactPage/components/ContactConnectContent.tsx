import ContactForm from '../../../components/ui/ContactForm.tsx';

function ContactConnectContent() {
  return (
    <div className="relative min-h-screen top-[5vh] z-10 flex flex-col items-center w-full px-[1vw] py-[5vh]">
      <h2 className="font-drabina-solid text-[#FFDC5C] text-center text-[clamp(2rem,6vw,7rem)] leading-tight mt-auto">
        LET'S STAY CONNECTED
      </h2>
      <ContactForm />
    </div>
  );
}

export default ContactConnectContent;
