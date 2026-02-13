import footer from '../assets/bg/footer_bg.png';
import Navbar from '../components/ui/Navbar.tsx';
import { FaTelegramPlane } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa6';
import { CgFacebook } from 'react-icons/cg';

function Footer() {
    return (
      <footer className="relative">
        {/*bg img*/}
        <div className="absolute">
          <img
            src={footer}
            alt="footer"
            className="w-full h-full object-cover"
          />
        </div>

        {/*content*/}
        <div className="relative container mx-auto px-4 py-12">
          <div className="grid grid-cols-3 md:grid-cols-3 gap-8 mb-8">
            <div className="flex flex-row gap-4">
              <FaTelegramPlane className="text-4xl text-white" />
              <FaInstagram className="text-4xl text-white" />
              <CgFacebook className="text-4xl text-white" />
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">form</h3>
              <p className="text-gray-300">I accept...</p>
            </div>

            <div>
              <div className="flex gap-4">
                <Navbar
                  variant="vertical"
                  navClassName="flex flex-col gap-2"
                  linkClassName="text-gray-300 hover:text-white transition flex items-center gap-2"
                  activeLinkClassName="font-bold text-white"
                />
              </div>
            </div>
          </div>

          <div className="text-center text-gray-400">
            <p>© 2026 Margarita Kattsyna</p>
          </div>
        </div>
      </footer>
    );
}

export default Footer;