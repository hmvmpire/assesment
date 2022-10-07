import { faBars, faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const linksData = ["Home", "About", "Blog", "Pricing"];
export const Navbar = () => {
  let navigate = useNavigate();
  const [showNav, setShowNav] = useState(false);
  return (
    <div className="relative z-20 px-5 sm:px-10 lg:px-20 pt-10 pb-5 flex items-center gap-x-4 justify-between">
      <div className="flex items-center gap-x-5">
        <button
          className="block lg:hidden text-white"
          onClick={() => {
            setShowNav(true);
          }}
        >
          <FontAwesomeIcon icon={faBars} />
        </button>
        <h1
          onClick={() => {
            navigate("/home");
          }}
          className="cursor-pointer font-poppins-400 font-bold text-xl sm:text-3xl xl:text-4xl uppercase text-white"
        >
          Chilled grape
        </h1>
      </div>
      <div className="flex items-center lg:gap-x-20 xl:gap-x-40 2xl:gap-x-60">
        <ul className="list-none hidden lg:flex items-center gap-x-16 2xl:gap-x-20">
          {linksData.map((data: any, ind: any) => (
            <li
              key={ind + 1}
              className="font-poppins-400 font-bold cursor-pointer"
            >
              {data}
            </li>
          ))}
        </ul>
        <button
          onClick={() => {
            navigate("/list");
          }}
          style={{
            background: "linear-gradient(90deg, #73E0A9 0%, #5B68DF 100%)",
            height: "36px",
          }}
          className="rounded-full bg-zinc-400 w-32 sm:w-36 md:w-40 text-sm sm:text-base font-semibold text-white"
        >
          Login
        </button>
      </div>
      <div
        className={`fixed h-full w-full duration-500 bg-white left-0 z-40 flex items-center justify-center ${
          showNav ? "top-0" : "-top-full"
        }`}
      >
        <button
          className="absolute top-5 right-5 text-black"
          onClick={() => {
            setShowNav(false);
          }}
        >
          <FontAwesomeIcon icon={faClose} className="text-lg" />
        </button>
        <ul className="list-none flex flex-col items-center gap-y-16">
          {linksData.map((data: any, ind: any) => (
            <li key={ind + 1} className="font-poppins-400 font-bold">
              {data}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
