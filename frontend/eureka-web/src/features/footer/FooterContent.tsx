import { FaTelegramPlane } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa6';
import { CgFacebook } from 'react-icons/cg';
import Navbar from '../../components/ui/Navbar.tsx';
import Button from '@/components/ui/Button.tsx';
import { puzzle } from '@/assets/images';

function FooterContent() {
  return (
    <div className="relative w-full mx-auto px-4 sm:px-6 md:px-12 lg:px-20 xl:px-24 2xl:px-32 z-10 py-6 sm:py-10 md:py-16 xl:py-20 2xl:py-44 overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 mb-6 sm:mb-8 2xl:mb-8">
        {/* socials + EURIKA + PUZZLELAB */}
        <div className="flex flex-col gap-4 sm:gap-6 md:gap-7 lg:gap-6 xl:gap-7 2xl:gap-8">
          {/* socials */}
          <div className="flex flex-row gap-4 sm:gap-6 md:gap-8 lg:gap-7 xl:gap-8 2xl:gap-10">
            <a
              href="https://t.me/Rita_evolvers"
              aria-label="Telegram"
              target="_blank"
              rel="noopener noreferrer"
              className="min-h-[44px] min-w-[44px] flex items-center justify-center"
            >
              <FaTelegramPlane className="text-3xl sm:text-4xl md:text-5xl lg:text-4xl xl:text-5xl 2xl:text-6xl text-white cursor-pointer hover:scale-110 transition-transform" />
            </a>
            <a
              href="https://instagram.com/prosto_diva"
              aria-label="Instagram"
              target="_blank"
              rel="noopener noreferrer"
              className="min-h-[44px] min-w-[44px] flex items-center justify-center"
            >
              <FaInstagram className="text-3xl sm:text-4xl md:text-5xl lg:text-4xl xl:text-5xl 2xl:text-6xl text-white cursor-pointer hover:scale-110 transition-transform" />
            </a>
            <a
              href="https://facebook.com/kattsyna"
              aria-label="Facebook"
              target="_blank"
              rel="noopener noreferrer"
              className="min-h-[44px] min-w-[44px] flex items-center justify-center"
            >
              <CgFacebook className="text-3xl sm:text-4xl md:text-5xl lg:text-4xl xl:text-5xl 2xl:text-6xl text-white cursor-pointer hover:scale-110 transition-transform" />
            </a>
          </div>

          {/* EURIKA & PUZZLELAB */}
          <h1 className="font-inter text-[4rem] sm:text-[6rem] md:text-[8rem] lg:text-[7rem] xl:text-[9rem] 2xl:text-[15rem] -ml-1 leading-[0.9]">
            <span className="block text-white font-normal">EURIKA</span>
            <span className="block text-yellow-400 font-drabina-solid">
              PUZZLELAB
            </span>
          </h1>
        </div>

        <Button
          backgroundImage={puzzle}
          className="pointer-events-auto absolute z-20 bottom-4 right-4 sm:bottom-[20%] lg:bottom-[10%] xl:bottom-[5%] w-[35%] h-auto aspect-square"
        >
          <span className="sr-only">Gameplay</span>
        </Button>

        {/* navbar */}
        <div className="hidden md:flex md:items-start md:justify-start md:col-start-2 md:pt-2">
          <Navbar
            variant="vertical"
            navClassName="flex flex-col gap-1 sm:gap-1.5 md:gap-2 lg:gap-1.5 xl:gap-1.5 2xl:gap-2"
            linkClassName="text-gray-300 hover:text-white transition flex items-center gap-1.5 sm:gap-2 lg:gap-1.5 xl:gap-2 2xl:gap-2 text-base sm:text-lg md:text-xl lg:text-lg xl:text-xl 2xl:text-3xl"
            activeLinkClassName="font-bold text-white"
          />
        </div>
      </div>

      {/* Copyright */}
      <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 lg:bottom-10 xl:bottom-10 2xl:bottom-10 left-0 right-0 text-center text-gray-300 text-xs sm:text-sm md:text-base lg:text-sm xl:text-base 2xl:text-xl">
        <p>© 2026 Margarita Kattsyna</p>
      </div>
    </div>
  );
}

export default FooterContent;
