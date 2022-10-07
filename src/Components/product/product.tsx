import React, { useEffect, useState } from "react";
import imageBlob from "../../assets/imageBlob.svg";
import "./product.css";
import { Item } from "./item";

export const Products = () => {
  const [products, setProducts] = useState([]);
  const [index, setindex] = useState<any>(6);
  useEffect(() => {
    getProducts();
  }, []);
  const getProducts = () => {
    fetch(
      "https://my-json-server.typicode.com/TomSearle/cb-devtest-api/products"
    )
      .then((response) => response.json())
      .then((products) => {
        setProducts(products[0]);
      });
  };
  const getList=()=>{
    let x=[]
    for (let i = 0; i < index; i++) {
      x.push(<Item data={products[i]} key={i} />)
    }
    return x
  }
  return (
    <>
    {products.length>0 &&
      <div className="px-5 sm:px-10 lg:px-20 ">
      <div className="grid w-full gap-y-8 sm:gap-8 grid-cols-12">
      {getList()}
        
      </div>
      {index==6  && <button onClick={()=>setindex(products.length)} className="load-btn font-poppins-400 text-xl ml-24 mt-20">
        Load more
      </button>}
    </div>}
    </>
  );
};
