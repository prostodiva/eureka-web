import contact_connect from '../../../assets/bg/contact_connect.png';
import Connect from '../../../components/sections/Connect.tsx';

function ContactConnect() {
  return (
    <>
      <Connect
        backgroundImage={contact_connect}
        content={<h1>contact connect</h1>}
      />
    </>
  );
}
export default ContactConnect;
