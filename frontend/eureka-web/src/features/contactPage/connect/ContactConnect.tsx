import contact_connect from '../../../assets/bg/contact_connect.png';
import Connect from '../../../components/sections/Connect.tsx';
import ContactConnectContent from './ContactConnectContent.tsx';

function ContactConnect() {
  return (
    <>
      <Connect
        backgroundImage={contact_connect}
        style={{ backgroundColor: '#8658F1' }}
        content={<ContactConnectContent />}
      />
    </>
  );
}
export default ContactConnect;
