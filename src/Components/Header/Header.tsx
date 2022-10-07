import heroBG from "../../assets/heroBG.svg";
import headerBgDot1 from "../../assets/headerBgDot1.svg";
import headerBgDot2 from "../../assets/headerBgDot2.svg";
import { Navbar } from "../Navbar/Navbar";
import { Container, useMediaQuery } from "@mui/material";
import { useNavigate } from "react-router-dom";
export const Header = () => {
  let navigate = useNavigate()
    const matches = useMediaQuery('(max-width:766px)');
    const matches2 = useMediaQuery('(max-width:500px)');
  return (
    <div className="relative">
      <img
        src={headerBgDot1}
        alt={headerBgDot1}
        className="absolute top-0 left-0 z-10"
      />
      <Navbar></Navbar>

      <div
        className="relative bg-center bg-no-repeat bg-cover flex items-center"
        style={{ backgroundImage: `url(${heroBG})`, height: matches? "70vh" :"90vh", }}
      >
        <img
          src={headerBgDot2}
          alt={headerBgDot2}
          className={`absolute ${matches2? "top-96" :"top-1/2 sm:top-1/3 md:top-1/4"} right-0 z-0 w-52 sm:w-80 md:w-auto`}
        />
        <Container maxWidth={"lg"}>
          <div className="relative z-10 sm:px-10 lg:px-20 xl:px-0">
            <h1
              className="font-poppins-700 text-4xl sm:text-5xl md:text-6xl text-black uppercase"
              style={{ lineHeight: matches? "60px" : "96px" }}
            >
              Lorem ipsum
              <br /> dolor sit amet.
            </h1>
            <button
            onClick={() => {navigate("/list")}}
              style={{
                background: "linear-gradient(90deg, #73E0A9 0%, #5B68DF 100%)",
                // height: "44px",
              }}
              className="rounded-full mt-5 bg-zinc-400 w-52 h-12 font-semibold text-white"
            >
              Read more
            </button>
          </div>
        </Container>
      </div>
    </div>
  );
};
