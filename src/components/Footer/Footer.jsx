
import { GrFacebookOption } from "react-icons/gr";
import { IoLogoInstagram } from "react-icons/io";
import { PiXLogoFill } from "react-icons/pi";

const Footer = () => {
  return (
    <footer className="bg-[#244D3F] text-white rounded p-8 md:p-10 mt-10 md:mt-20">
      <div className="flex flex-col text-center justify-center items-center gap-8 pb-8 container mx-auto">
        <div>
          <h2 className="text-4xl md:text-5xl font-bold">
            Keen<span className="font-semibold">Keeper</span>
          </h2>
          <p className="text-sm md:text-base text-green-200 mt-3 leading-relaxed">
            Your personal shelf of meaningful connections. Browse, tend, and
            nurture the relationships that matter most.
          </p>
        </div>

        <nav className="flex flex-col gap-3">
          <h4 className="text-base md:text-xl font-semibold">Social Links</h4>
          <div className="flex gap-5">
            <a
              href="#"
              className="hover:bg-green-800 transition-colors bg-black p-1.5 rounded-full "
            >
              <IoLogoInstagram className="w-6 h-6" />
            </a>
            <a
              href="#"
              className="hover:bg-green-800 transition-colors bg-black p-1.5 rounded-full"
            >
              <GrFacebookOption className="w-6 h-6" />
            </a>

            <a
              href="#"
              className="hover:bg-green-800 transition-colors bg-black p-1.5 rounded-full"
            >
              <PiXLogoFill className="w-6 h-6" />
            </a>
          </div>
        </nav>
      </div>

      <div className="border-t border-green-800 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3 text-green-200 text-xs md:text-sm container mx-auto">
        <p>© {new Date().getFullYear()} KeenKeeper. All rights reserved.</p>
        <div className="flex flex-wrap justify-center sm:justify-end gap-4">
          <a href="#" className="hover:text-white transition-colors">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-white transition-colors">
            Terms of Service
          </a>
          <a href="#" className="hover:text-white transition-colors">
            Cookies
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
