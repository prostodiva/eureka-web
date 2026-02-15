import footer from '../assets/bg/footer_bg.png';
import Navbar from '../components/ui/Navbar.tsx';
import { FaTelegramPlane } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa6';
import { CgFacebook } from 'react-icons/cg';
import Button from '../components/ui/Button.tsx';

function Footer() {
  return (
    <footer className="relative flex flex-col items-center pb-20">
      {/*bg img*/}
      <div className="absolute">
        <img src={footer} alt="footer" className="w-full h-full object-cover" />
      </div>

      {/*content*/}
      <div className="relative mx-auto mt-44 pl-39">
        <div className="grid grid-cols-3 md:grid-cols-3 mb-8">
          {/*socials + form vertical block + EURIKA*/}
          <div className="flex flex-col gap-8">
            {/*socials*/}
            <div className="flex flex-row gap-10">
              <FaTelegramPlane className="text-6xl text-white" />
              <FaInstagram className="text-6xl text-white" />
              <CgFacebook className="text-6xl text-white" />
            </div>
            {/*email form button accept*/}
            <div className="flex flex-col gap-4">
              <form
                className="border border-white rounded-sm w-190 h-24 flex items-center gap-4 p-4"
                onSubmit={(e) => {
                  e.preventDefault();
                }}
              >
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 bg-transparent outline-none text-white"
                  required
                />
                <Button type="submit" variant="ternary">
                  Subscribe
                </Button>
              </form>

              {/*checkbox + accept*/}
              <div className="flex items-start gap-4 relative z-10">
                <input
                  type="checkbox"
                  id="terms"
                  required
                  className="mt-1 w-6 h-6 sm:w-6 sm:h-6 cursor-pointer appearance-none border-2 border-gray-300 checked:bg-[#EA5D5D] checked:border-[#EA5D5D]"
                />
                <label
                  htmlFor="terms"
                  className="text-gray-300 text-xl underline underline-offset-3 cursor-pointer"
                >
                  I accept the Terms by subscribing you agree to with our
                  Privacy Policy
                </label>
              </div>
            </div>
            <h1 className="font-inter text-white text-[15rem] font-normal -ml-3 -mt-25">
              EUREKA
            </h1>
          </div>

          {/*navbar*/}
          <div className="flex flex-col gap-20">
            <div className="flex gap-4 ml-82">
              <Navbar
                variant="vertical"
                navClassName="flex flex-col gap-2"
                linkClassName="text-gray-300 hover:text-white transition flex items-center gap-2 text-3xl"
                activeLinkClassName="font-bold text-white"
              />
            </div>
          </div>
        </div>

        {/* Copyright*/}
        <div className="text-center text-gray-300 text-xl mt-50">
          <p>© 2026 Margarita Kattsyna</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
