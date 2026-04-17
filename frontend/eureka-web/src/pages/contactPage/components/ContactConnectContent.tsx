import ContactForm from '../../../components/ui/ContactForm.tsx';

function ContactConnectContent() {
  return (
    <div className="relative min-h-dvh z-10 flex flex-col items-center pt-20">
      <h2 className="font-drabina-solid text-[#FFDC5C] text-center text-[clamp(2rem,6vw,7rem)] leading-tight">
        LET'S STAY CONNECTED
      </h2>
      <ContactForm />
    </div>
  );
}

export default ContactConnectContent;
