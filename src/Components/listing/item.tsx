import { useMediaQuery } from "@mui/material";
import React from "react";
import './listing.css'

import iconAd from "./../../assets/iconAd.svg";
import pin from "./../../assets/iconPin.svg";
import share from "./../../assets/iconShare.svg";

interface Product {
  id: number;
  product_name: String;
  image: String;
  price: number;
  stock_count: number;
}

export const Item = (props: any) => {
  console.log(props);
 
  return (
    <div className="col-span-12 sm:col-span-12 lg:col-span-6 flex justify-center">
      <div className="w-full flex flex-row   h-80 w-full">
        <div
          style={{ backgroundImage: `url(${props.data.image})` }}
          className="bg-center bg-no-repeat bg-cover bradius shadow-2xl w-1/3 h-80"
        ></div>

        <div className="w-2/3 py-8">
        <div className="flex px-6 flex-col mt-4 gap-y-6 shadow-2xl bradiusSp mb-2 w-full py-6 items-start">
          <h6 className="pName text-lg font-poppins-700">
            {props.data.location_name}
          </h6>
          <div className="flex flex-row justify-center items-center">
            <img src={iconAd} alt={iconAd} />
            <p className="mx-2 text-md font-poppins-400">
              £{props.data.address_line}
            </p>
          </div>
          <div className="flex flex-row justify-start items-center w-full">
            <img src={pin} alt={pin} />
            <p className="mx-2 text-md font-poppins-400 wrText">
              {props.data.pin}
            </p>
          </div>
          <div className="flex flex-row justify-start items-center w-full">
            <img src={share} alt={share} />
            <p  className="mx-2 text-md font-poppins-400 wrText">
              {props.data.share}
            </p>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};
