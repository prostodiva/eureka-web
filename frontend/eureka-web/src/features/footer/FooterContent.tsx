import { FaTelegramPlane } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa6';
import { CgFacebook } from 'react-icons/cg';
import Button from '../../components/ui/Button.tsx';
import Navbar from '../../components/ui/Navbar.tsx';

function FooterContent() {
  return (
    <div className="relative w-full mx-auto pl-4 sm:pl-6 md:pl-12 lg:pl-20 xl:pl-24 2xl:pl-32 pr-4 sm:pr-6 md:pr-10 lg:pr-8 xl:pr-10 2xl:pr-10 z-10 py-6 sm:py-10 md:py-16 lg:py-16 xl:py-20 2xl:py-44">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-6 sm:mb-8 lg:mb-8 xl:mb-8 2xl:mb-8">
        {/*socials + form vertical block + EUREKA*/}
        <div className="flex flex-col gap-4 sm:gap-6 md:gap-7 lg:gap-6 xl:gap-7 2xl:gap-8">
          {/*socials*/}
          <div className="flex flex-row gap-4 sm:gap-6 md:gap-8 lg:gap-7 xl:gap-8 2xl:gap-10">
            <FaTelegramPlane className="text-3xl sm:text-4xl md:text-5xl lg:text-4xl xl:text-5xl 2xl:text-6xl text-white cursor-pointer hover:scale-110 transition-transform" />
            <FaInstagram className="text-3xl sm:text-4xl md:text-5xl lg:text-4xl xl:text-5xl 2xl:text-6xl text-white cursor-pointer hover:scale-110 transition-transform" />
            <CgFacebook className="text-3xl sm:text-4xl md:text-5xl lg:text-4xl xl:text-5xl 2xl:text-6xl text-white cursor-pointer hover:scale-110 transition-transform" />
          </div>

          {/*email form button accept*/}
          <div className="flex flex-col gap-2 sm:gap-3 md:gap-3 lg:gap-3 xl:gap-3 2xl:gap-4 relative z-20">
            <form
              className="border border-white rounded-sm w-full lg:w-full xl:w-full 2xl:w-190 h-auto flex items-center gap-2 sm:gap-3 md:gap-4 lg:gap-3 xl:gap-3 2xl:gap-4 p-2 sm:p-3 md:p-3 lg:p-3 xl:p-3 2xl:p-4"
              onSubmit={(e) => {
                e.preventDefault();
              }}
            >
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 bg-transparent outline-none text-white text-xs sm:text-sm md:text-base lg:text-sm xl:text-sm 2xl:text-base placeholder:text-gray-400"
                required
              />
              <Button type="submit" variant="ternary">
                Subscribe
              </Button>
            </form>

            {/*checkbox + accept*/}
            <div className="flex items-start gap-2 sm:gap-3 md:gap-4 lg:gap-3 xl:gap-3 2xl:gap-4">
              <input
                type="checkbox"
                id="terms"
                required
                className="mt-0.5 sm:mt-1 w-4 h-4 sm:w-5 sm:h-5 md:w-5 md:h-5 lg:w-4 lg:h-4 xl:w-5 xl:h-5 2xl:w-6 2xl:h-6 cursor-pointer appearance-none border-2 border-gray-300 rounded checked:bg-[#EA5D5D] checked:border-[#EA5D5D]"
              />
              <label
                htmlFor="terms"
                className="text-gray-300 text-xs sm:text-sm md:text-base lg:text-xs xl:text-sm 2xl:text-xl underline underline-offset-2 sm:underline-offset-3 cursor-pointer leading-tight"
              >
                I accept the Terms by subscribing you agree to with our Privacy
                Policy
              </label>
            </div>
          </div>

          {/* EUREKA & PuzzleLab */}
          <h1 className="font-inter text-[4rem] sm:text-[6rem] md:text-[8rem] lg:text-[7rem] xl:text-[9rem] 2xl:text-[15rem] -ml-2 2xl:-ml-3 -mt-6 md:-mt-8 2xl:-mt-20 leading-[0.9]">
            <span className="block text-white font-normal">EUREKA</span>
            <span className="block text-yellow-400 font-drabina-solid">PUZZLELAB</span>
          </h1>
        </div>

        {/*navbar*/}
        <div className="hidden md:block absolute top-40 left-[50%]">
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

