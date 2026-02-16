import Footer from '../../root/Footer.tsx';
import Button from '../../components/ui/Button.tsx';
import footer_bg from '../../assets/bg/footer_bg.png';
import puzzle from '../../assets/puzzle.png';
import FooterContent from './FooterContent.tsx';

function FooterSection() {

  const handlePuzzleClick = () => {
    alert('puzzle clicked');
  }

  return (
    <Footer
      backgroundImage={footer_bg}
      content={<FooterContent />}
      actions={
        <Button
          backgroundImage={puzzle}
          className="absolute
                    z-20
                    bottom-[5%]
                    right-[2%]
                    sm:bottom-[20%]
                    lg:bottom-[10%]
                    xl:bottom-[5%]

                    w-[35%]
                    h-auto
                    aspect-square"
          onClick={handlePuzzleClick}
        >
          <span className="sr-only">Gameplay</span>
        </Button>
      }
    />
  );
}

export default FooterSection;
