import ContactForm from '../../../components/ui/ContactForm.tsx';

function ContactConnectContent() {
  return (
    <div className="relative z-10 flex flex-col items-center w-full px-4 pt-16 sm:pt-20 md:pt-24">
      <h2 className="font-drabina-solid text-[#FFDC5C] text-center text-4xl sm:text-6xl md:text-7xl lg:text-8xl leading-tight mb-8 sm:mb-10 md:mb-12">
        LET'S STAY CONNECTED
      </h2>
      <ContactForm />
    </div>
  );
}

export default ContactConnectContent;
