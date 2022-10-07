import { useMediaQuery } from "@mui/material";
import React from "react";
import "./product.css";

interface Product {
  id: number;
  product_name: String;
  image: String;
  price: number;
  stock_count: number;
}

export const Item = (props: any) => {
  console.log(props);
  const matches = useMediaQuery("(max-width:766px)");
  const matches2 = useMediaQuery("(max-width:500px)");
  return (
    <div className="col-span-12 sm:col-span-6 lg:col-span-4 flex justify-center">
      <div className="w-full flex flex-col bradius shadow-xl h-96 w-96">
        <div
          style={{ backgroundImage: `url(${props.data.image})` }}
          className="bg-center bg-no-repeat bg-cover bradius shadow-xl w-full h-96"
        ></div>
        <div className="flex px-6 flex-col mt-4 mb-2">
          <h6 className="pName text-lg font-poppins-700">
            {props.data.product_name}
          </h6>
          <p className="pPrice text-sm font-poppins-400">£{props.data.price}</p>
        </div>
      </div>
    </div>
  );
};
