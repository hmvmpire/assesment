import React, { useEffect, useState } from "react";
import { Item } from "./item";
import { SimpleMap } from "../map/map";

export const Listing = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    getProducts();
  }, []);
  const getProducts = () => {
    fetch(
      "https://my-json-server.typicode.com/TomSearle/cb-devtest-api/locations"
    )
      .then((response) => response.json())
      .then((products) => {
        console.log(products);
        setProducts(products[0]);
      });
  };
  return (
    <>
    <div className="flex flex-row px-5 sm:px-10 lg:px-20 pb-20">
        <SimpleMap></SimpleMap>
    </div>
    <div className="flex flex-row px-5 sm:px-10 lg:px-20 pb-20">
            <h6 className="uppercase font-poppins-700 text-2xl "> Our locations</h6>
        </div>
        <div className="flex flex-row px-5 sm:px-10 lg:px-20 ">
      <div className="grid w-full gap-y-8 sm:gap-8 grid-cols-12 ">
        {products.map((object: any, i) => (
          <Item data={object} key={i} />
        ))}
      </div>
    </div>
    </>
  );
};
