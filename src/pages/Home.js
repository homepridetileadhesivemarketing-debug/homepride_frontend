import React from "react";
import NavBar from "../components/NavBar";
import Slider from "../components/home_components/Slider";
import About_1 from "../components/home_components/About_1";
import Footer from "../components/Footer";

function Home(){
    return(
        <>
        <div className="wrap">
        <NavBar></NavBar>
        <Slider></Slider>
        <About_1></About_1>
        <Footer></Footer>
        </div>
        </>
    )
}

export default Home;