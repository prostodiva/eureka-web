import Connect from '@/components/sections/Connect';
import ContactConnectContent from './ContactConnectContent';
import { contactConnect } from '@/assets/images';

function ContactConnect() {
  return (
    <>
      <Connect
        backgroundImage={contactConnect}
        style={{ backgroundColor: '#8658F1' }}
        content={<ContactConnectContent />}
      />
    </>
  );
}
export default ContactConnect;
