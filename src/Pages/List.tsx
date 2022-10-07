import React  from "react";
import { Body } from "../Components/body/body";
import { Footer } from "../Components/Footer/Footer";
import { Header } from "../Components/Header/Header";
import { Listing } from "../Components/listing/listing";

export const List = () => {
    return(
        <div>
            <Header></Header>
            <Body></Body>
            <Listing></Listing>
            <Footer></Footer>
        </div>
    )
}