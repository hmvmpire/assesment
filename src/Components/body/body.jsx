import React from "react";
import imageBlob from "../../assets/imageBlob.svg";
import "./body.css";

export const Body = () => {
  return (
    <div className="flex flex-col-reverse sm:flex-row gap-y-10 sm:gap-y-0 px-5 sm:px-10 lg:px-20 my-20 md:my-0">
      <div className="w-full sm:w-6/12 flex justify-center flex-col">
        <h6 className="text-3xl headingBody font-poppins-700">
          Lorem ipsum dolor sit amet.
        </h6>
        <p className="pBody text-base md:text-lg font-poppins-400">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum
          dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit
          amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit.
        </p>
        <button className="rounded-full bg-zinc-400 w-32 sm:w-36 md:w-40 text-sm sm:text-base font-semibold text-white readMore mt-5">
          Read More
        </button>
      </div>
      <div className="w-full sm:w-6/12 flex justify-center">
        <img src={imageBlob} alt={"bodyImage"} className="w-96 sm:w-auto" />
      </div>
    </div>
  );
};
