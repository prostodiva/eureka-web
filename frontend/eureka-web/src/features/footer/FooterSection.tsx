import Footer from '@/root/Footer';
import FooterContent from './FooterContent';
import { footerBg } from '@/assets/images';

function FooterSection() {
  return (
    <Footer
      backgroundImage={footerBg}
      content={<FooterContent />}
      // actions={
      //   <div className="absolute inset-0 pointer-events-none">
      //     <Button
      //       backgroundImage={puzzle}
      //       className="pointer-events-auto absolute z-20 bottom-4 right-4 sm:bottom-[20%] lg:bottom-[10%] xl:bottom-[5%] w-[35%] h-auto aspect-square"
      //     >
      //       <span className="sr-only">Gameplay</span>
      //     </Button>
      //   </div>
      // }
    />
  );
}

export default FooterSection;
