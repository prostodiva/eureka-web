import { FaTelegramPlane } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa6';
import { CgFacebook } from 'react-icons/cg';
import Navbar from '../ui/Navbar.tsx';
import { puzzle } from '@/assets/images';
import ResponsiveImage from '../ui/ResponsiveImage.tsx';


function FooterContent() {
  return (
    <div className="relative w-full mx-auto z-10 p-5 overflow-hidden">
      <div className="grid grid-cols-2 md:grid-cols-3 items-start justify-start gap-2 mb-5 md:items-center">
        {/* socials + EURIKA + PUZZLELAB */}
        <div className="flex flex-col gap-4">
          {/* socials */}
          <div className="flex flex-row gap-4 sm:gap-6 md:gap-8 lg:gap-7 xl:gap-8 2xl:gap-10">
            <a
              href="https://t.me/Rita_evolvers"
              aria-label="Telegram"
              target="_blank"
              rel="noopener noreferrer"
              className="min-h-[44px] min-w-[44px]"
            >
              <FaTelegramPlane className="text-3xl sm:text-4xl md:text-5xl lg:text-4xl xl:text-5xl 2xl:text-6xl text-white cursor-pointer hover:scale-110 transition-transform" />
            </a>
            <a
              href="https://instagram.com/prosto_diva"
              aria-label="Instagram"
              target="_blank"
              rel="noopener noreferrer"
              className="min-h-[44px] min-w-[44px]"
            >
              <FaInstagram className="text-3xl sm:text-4xl md:text-5xl lg:text-4xl xl:text-5xl 2xl:text-6xl text-white cursor-pointer hover:scale-110 transition-transform" />
            </a>
            <a
              href="https://facebook.com/kattsyna"
              aria-label="Facebook"
              target="_blank"
              rel="noopener noreferrer"
              className="min-h-[44px] min-w-[44px]"
            >
              <CgFacebook className="text-3xl sm:text-4xl md:text-5xl lg:text-4xl xl:text-5xl 2xl:text-6xl text-white cursor-pointer hover:scale-110 transition-transform" />
            </a>
          </div>
        </div>

        {/* EURIKA & PUZZLELAB */}
        <h1 className="order-last col-start-1 md:row-start-2 md:col-start-1 font-inter text-[4rem] sm:text-[6rem] md:text-[8rem] lg:text-[7rem] xl:text-[9rem] 2xl:text-[15rem] leading-[0.9]">
          <span className="block text-white font-normal">EURIKA</span>
          <span className="block text-yellow-400 font-drabina-solid">
            PUZZLELAB
          </span>
        </h1>

        {/* navbar */}
        <div className="md:flex mt-4 justify-self-start col-start-1 md:col-start-2 md:justify-self-center">
          <Navbar
            variant="vertical"
            navClassName="flex flex-col gap-1 sm:gap-1.5 md:gap-2 lg:gap-1.5 xl:gap-1.5 2xl:gap-2"
            linkClassName="text-gray-300 hover:text-white transition flex items-center gap-1.5 sm:gap-2 lg:gap-1.5 xl:gap-2 2xl:gap-2 text-base sm:text-lg md:text-xl lg:text-lg xl:text-xl 2xl:text-3xl"
            activeLinkClassName="font-bold text-white"
          />
        </div>

        <div className="col-start-2 row-span-3 md:col-start-3 md:row-span-3">
          <ResponsiveImage image={puzzle} alt="Puzzle image" />
        </div>
      </div>

      {/* Copyright */}
      <div className="absolute bottom-2 left-0 right-0 text-center text-gray-300 text-xs sm:text-sm md:text-base lg:text-sm xl:text-base 2xl:text-xl">
        <p>© 2026 Margarita Kattsyna</p>
      </div>
    </div>
  );
}

export default FooterContent;
