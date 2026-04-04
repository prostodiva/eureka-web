import contact_connect from '../../../assets/bg/contact_connect.png';
import Connect from '../../../components/sections/Connect.tsx';

function ContactConnect() {
  return (
    <>
      <Connect
        backgroundImage={contact_connect}
        content={<h2 className="text-3xl md:text-4xl font-bold text-white">Get in Touch</h2>}
      />
    </>
  );
}
export default ContactConnect;
