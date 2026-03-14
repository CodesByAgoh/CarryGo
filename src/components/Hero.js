import React from "react";
import foodpickup from "../images/foodPickup.jpg";
import phone from "../images/phone.PNG";
import avocado from "../images/avocado.png";
import mango from "../images/mango.png";
import grapes from "../images/grape.png";
import pizza from "../images/pizza.png";
import pineapple from "../images/pineapple.png";
import watermelon from "../images/watermelon.png";
import shawarma from "../images/shawarma.png";
import coconut from "../images/coconut.png";
import "../styles/background.css";
import Navbar from "./Navbar";

export default function Hero() {
  return (
    <div className=" hero-background h-screen w-full flex items-center justify-center overflow-hidden">
      <Navbar />
      <h1 className="lg:text-xs text-[10px] lg:leading-[1.3]   text-black bg-neutral-200 lg:py-[6px] py-[3px] text-center border  rounded-3xl absolute lg:top-32 top-24 lg:w-[300px] w-[60%] font-kumbh-sans font-medium">🚀AFRICAS NO 1 DRIVE-THRU APP</h1>
      <h1 className="lg:text-5xl text-2xl lg:leading-[1.3] text-black text-center absolute lg:top-[165px] top-32 lg:w-[600px] w-[80%] font-kumbh-sans font-medium ">
        Patient dog don get ulcer! Order food
        <span className="pl-2 text-[#60894F] font-lugrasimo-regular">CarryGo</span>
      </h1>
      <h1 className="lg:text-lg text-xs font-light leading-normal text-black text-center absolute lg:top-[300px] top-[200px] lg:w-[440px] w-[70%] font-kumbh-sans">
         Order, Park, CarryGo.
        All in 1 minute.
      </h1>
      <button className="absolute lg:top-80 top-60 left-1/2 font-bold transform -translate-x-1/2 bg-[#36712B] lg:text-base text-sm text-white lg:my-6 my-3 lg:py-[0.7rem] py-[0.5rem] lg:px-10 px-8 rounded-full font-kumbh-sans">
        Oya Carry
      </button>
      <img
        src={phone}
        alt="phone"
        className=" lg:w-[20%] w-[50%] object-cover shadow-xl rounded-[40px] lg:translate-y-80 translate-y-56"
      />
      <img
        src={mango}
        alt="mango"
        className="absolute top-52 left-6 sm:top-40 sm:left-60 w-10 sm:w-20 drop-emoji"
      />

      <img
        src={avocado}
        alt="avocado"
        className="absolute top-80 right-6 sm:top-96 sm:right-[25%] w-12 sm:w-24 drop-emoji"
      />

      <img
        src={grapes}
        alt="grapes"
        className="absolute bottom-36 left-4 sm:bottom-48 sm:left-60 w-12 sm:w-24 drop-emoji"
      />

      <img
        src={shawarma}
        alt="shawarma"
        className="absolute bottom-20 right-10 sm:bottom-28 sm:right-44 w-12 sm:w-28 drop-emoji"
      />

      <img
        src={pineapple}
        alt="pineapple"
        className="absolute top-72 left-20 lg:inline hidden sm:top-72 sm:left-28 w-10 sm:w-32 drop-emoji"
      />

      <img
        src={watermelon}
        alt="watermelon"
        className="absolute top-48 lg:inline hidden right-4 sm:top-40 sm:right-[15%] w-12 sm:w-28 drop-emoji"
      />

      <img
        src={pizza}
        alt="pizza"
        className="absolute bottom-80 left-28 sm:bottom-96 sm:left-96 w-10 sm:w-28 drop-emoji"
      />

      <img
        src={coconut}
        alt="coconut"
        className="absolute top-60 right-16 sm:top-96 sm:right-24 w-8 sm:w-20 drop-emoji"
      />
    </div>
  );
}
