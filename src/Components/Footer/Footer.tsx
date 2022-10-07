import footerBg from "../../assets/footerBg.svg";
import telegram_icon from "../../assets/telegram_icon.svg";
import tiktok_icon from "../../assets/tiktok_icon.svg";
import insta_icon from "../../assets/insta_icon.svg";
import youtube_icon from "../../assets/youtube_icon.svg";
import fb_icon from "../../assets/fb_icon.svg";
import twitter_icon from "../../assets/twitter_icon.svg";
import { useMediaQuery } from '@mui/material';
import "./Footer.css"
export const Footer = () => {
    const matches = useMediaQuery('(max-width:490px)');
    const matches2 = useMediaQuery('(max-width:420px)');
  return (
    <div className={`relative py-14 px-5 sm:px-10 lg:px-20 ${matches? "mt-20" : "mt-32 lg:mt-96"}`}>
      <img
        src={footerBg}
        alt={footerBg}
        className="absolute bottom-0 left-0 z-0 w-auto lg:w-1/2 xl:w-auto"
      />
      <div className={`lg:grid lg:grid-cols-11 flex flex-col-reverse relative z-10 2xl:gap-x-20 ${matches? matches2? "gap-y-40" : "gap-y-60" : "gap-y-80 xl:gap-y-0"}`}>
        <div className="lg:col-span-3">
          <div className="w-11/12 sm:w-96">
            <h1 className="uppercase font-poppins-700 text-2xl text-white">
              Chilled grape
            </h1>
            <p className="text-base mt-4 text-white">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum
              dolor sit amet.
            </p>
          </div>
        </div>
        <div className="lg:col-span-8 grid grid-cols-12 lg:flex lg:items-start gap-y-16 sm:gap-y-0 lg:justify-end">
          <div className="col-span-6 sm:col-span-4 w-40 xl:w-52 2xl:w-60">
            <h1 className="font-poppins-400 footer-title">Company</h1>
            <ul className="flex list-none font-poppins-400 gap-y-3 mt-6 flex-col">
              <li>About</li>
              <li>Careers</li>
              <li>Our Work</li>
              <li>Contact</li>
            </ul>
          </div>
          <div className="col-span-6 sm:col-span-4 w-40 xl:w-52 2xl:w-60">
            <h1 className="font-poppins-400 footer-title">Products</h1>
            <ul className="flex list-none font-poppins-400 gap-y-3 mt-6 flex-col">
              <li>About</li>
              <li>Careers</li>
              <li>Our Work</li>
              <li>Contact</li>
            </ul>
          </div>
          <div className="col-span-12 sm:col-span-4 w-60 sm:w-40 md:w-60 lg:w-32 xl:w-52 2xl:w-60">
            <h1 className="font-poppins-400 footer-title">Follow Us</h1>
            <div className="grid grid-cols-12 gap-4 mt-6">
              <img src={telegram_icon} alt={telegram_icon} className="col-span-4 sm:col-span-6 md:col-span-4 lg:col-span-6 xl:col-span-4" />
              <img src={twitter_icon} alt={twitter_icon} className="col-span-4 sm:col-span-6 md:col-span-4 lg:col-span-6 xl:col-span-4" />
              <img src={youtube_icon} alt={youtube_icon} className="col-span-4 sm:col-span-6 md:col-span-4 lg:col-span-6 xl:col-span-4" />
              <img src={fb_icon} alt={fb_icon} className="col-span-4 sm:col-span-6 md:col-span-4 lg:col-span-6 xl:col-span-4" />
              <img src={insta_icon} alt={insta_icon} className="col-span-4 sm:col-span-6 md:col-span-4 lg:col-span-6 xl:col-span-4" />
              <img src={tiktok_icon} alt={tiktok_icon} className="col-span-4 sm:col-span-6 md:col-span-4 lg:col-span-6 xl:col-span-4" />
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};
