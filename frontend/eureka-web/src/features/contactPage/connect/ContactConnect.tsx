import contactConnect400avif from '../../../assets/optimized/contact_connect-400.avif';
import contactConnect800avif from '../../../assets/optimized/contact_connect-800.avif';
import contactConnect1200avif from '../../../assets/optimized/contact_connect-1200.avif';
import contactConnect1600avif from '../../../assets/optimized/contact_connect-1600.avif';
import contactConnect2400avif from '../../../assets/optimized/contact_connect-2400.avif';
import contactConnect400webp from '../../../assets/optimized/contact_connect-400.webp';
import contactConnect800webp from '../../../assets/optimized/contact_connect-800.webp';
import contactConnect1200webp from '../../../assets/optimized/contact_connect-1200.webp';
import contactConnect1600webp from '../../../assets/optimized/contact_connect-1600.webp';
import contactConnect2400webp from '../../../assets/optimized/contact_connect-2400.webp';
import Connect from '../../../components/sections/Connect.tsx';
import ContactConnectContent from './ContactConnectContent.tsx';
import { makeResponsiveImage } from '../../../utils/makeResponsiveImage.ts';

const contact_connect = makeResponsiveImage({
  fallbackSrc: contactConnect800webp,
  avif400: contactConnect400avif,
  avif800: contactConnect800avif,
  avif1200: contactConnect1200avif,
  avif1600: contactConnect1600avif,
  avif2400: contactConnect2400avif,
  webp400: contactConnect400webp,
  webp800: contactConnect800webp,
  webp1200: contactConnect1200webp,
  webp1600: contactConnect1600webp,
  webp2400: contactConnect2400webp,
});

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
