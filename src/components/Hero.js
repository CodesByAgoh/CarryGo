import React, { useState, useEffect } from "react";
import phoneImg from "../images/phone.PNG";
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
  const [showPopup, setShowPopup] = useState(false);
  const [currentMessage, setCurrentMessage] = useState(0);
  const [fade, setFade] = useState(true);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [joined, setJoined] = useState(false); // state for success message
  const [submittedName, setSubmittedName] = useState(""); // store submitted name
  const [loading, setLoading] = useState(false);

  const messages = [
    "Patient dog don get ulcer oo!",
    "No suffer hunger in silence.",
    "Food is ready before arrival!",
    "Before hunger turn emergency.",
    "Minutes saved, hunger solved!",
  ];

  // Hero message animation
 useEffect(() => {
  const interval = setInterval(() => {
    setFade(false);
    setTimeout(() => {
      setCurrentMessage((prev) => (prev + 1) % messages.length);
      setFade(true);
    }, 400);
  }, 6000);

  return () => clearInterval(interval);
}, [messages.length]);

  // Handle waitlist submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    const currentName = name;
    const currentPhone = phone;

    setLoading(true); // start spinner

    await fetch(
      "https://script.google.com/macros/s/AKfycbwhG-T4WDZtU4I8OZGqGb8JVrl8wX8VJW8KCgRab5c1c_HW_6Zyivy5RmsbCb60ub0NAg/exec",
      {
        method: "POST",
        body: JSON.stringify({
          name: currentName,
          phone: currentPhone,
        }),
      },
    );

    setSubmittedName(currentName);
    setJoined(true);
    setLoading(false); // stop spinner
  };

  return (
    <div className="hero-background h-screen w-full flex items-center justify-center overflow-hidden relative">
      <Navbar />

      {/* WAITLIST POPUP */}
      {showPopup && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl p-8 w-[90%] max-w-md text-center relative">
            <button
              className="absolute top-3 right-4 text-xl"
              onClick={() => {
                setShowPopup(false);
                setJoined(false);
                setName("");
                setPhone("");
                setSubmittedName("");
              }}
            >
              ✕
            </button>

            {loading ? (
              <div className="flex flex-col items-center justify-center py-10">
                <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-green-600 mb-4"></div>
                <p className="text-sm font-medium">Submitting your info...</p>
              </div>
            ) : joined ? (
              // Congratulations message
              <>
                <h2 className="text-2xl font-bold mb-2 font-kumbh-sans">
                  🎉 Congratulations, {submittedName || "Friend"}!
                </h2>
                <p className="text-sm mb-6">
                  You have successfully joined the CarryGo waitlist. 🚀
                </p>
                <button
                  onClick={() => {
                    setShowPopup(false);
                    setJoined(false);
                    setName("");
                    setPhone("");
                    setSubmittedName("");
                  }}
                  className="bg-[#36712B] text-white py-3 px-6 rounded-lg font-bold"
                >
                  Close
                </button>
              </>
            ) : (
              // ✅ Waitlist form
              <>
                <h2 className="text-2xl font-bold mb-2 font-kumbh-sans">
                  {name ? `Thank you, ${name}` : "Join CarryGo Waitlist"}
                </h2>

                <p className="text-sm mb-6">
                  {name
                    ? "Enter your phone number to join the waitlist"
                    : "Be the first to try CarryGo 🚀"}
                </p>

                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <input
                    type="text"
                    placeholder="Your Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="border rounded-lg p-3"
                  />

                  <input
                    type="tel"
                    placeholder="Phone Number"
                    value={phone}
                    onChange={(e) => {
                      const onlyNumbers = e.target.value.replace(/\D/g, ""); // remove non-digits
                      setPhone(onlyNumbers);
                    }}
                    className="border rounded-lg p-3"
                  />

                  <button
                    type="submit"
                    className="bg-[#36712B] text-white py-3 rounded-lg font-bold"
                  >
                    Join Waitlist
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      )}

      {/* SMALL TAG */}
      <h1 className="lg:text-xs text-[10px] text-black bg-neutral-200 py-[4px] text-center border rounded-3xl absolute lg:top-32 top-24 lg:w-[300px] w-[60%] font-kumbh-sans font-medium">
        🚀 AFRICAS NO 1 DRIVE-THRU APP
      </h1>

      {/* HERO TEXT */}
      <h1 className="lg:text-5xl text-2xl text-black text-center absolute lg:top-[165px] top-32 lg:w-[600px] w-[80%] font-kumbh-sans font-semibold">
        <span
          className={`inline-block transition-all duration-500 ${
            fade ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
          }`}
        >
          {messages[currentMessage]}
        </span>

        <span className="block lg:text-4xl text-xl lg:mt-4 mt-2 font-medium">
          Order food
          <span className="pl-2 text-[#60894F] font-lugrasimo-regular">
            CarryGo
          </span>
        </span>
      </h1>

      {/* SUBTEXT */}
      <h1 className="lg:text-base text-xs font-light text-black text-center absolute lg:top-[320px] top-[230px] lg:w-[440px] w-[70%] font-kumbh-sans">
        Order, Park, CarryGo. All in 1 minute.
      </h1>

      {/* BUTTON */}
      <button
        onClick={() => setShowPopup(true)}
        className="absolute lg:top-96 top-64 left-1/2 font-bold transform -translate-x-1/2 bg-[#36712B] lg:text-base text-sm text-white py-[0.6rem] px-8 rounded-full font-kumbh-sans hover:scale-105 transition"
      >
        Oya Carry
      </button>

      {/* PHONE IMAGE */}
      <img
        src={phoneImg}
        alt="phone"
        className="lg:w-[20%] w-[50%] object-cover shadow-xl rounded-[40px] lg:translate-y-96 translate-y-56"
      />

      {/* FLOATING FOOD */}
      <img
        src={mango}
        alt=""
        className="absolute top-52 left-6 sm:top-40 sm:left-60 w-10 sm:w-20 drop-emoji"
      />
      <img
        src={avocado}
        alt=""
        className="absolute top-80 right-6 sm:top-96 sm:right-[25%] w-12 sm:w-24 drop-emoji"
      />
      <img
        src={grapes}
        alt=""
        className="absolute bottom-36 left-4 sm:bottom-48 sm:left-60 w-12 sm:w-24 drop-emoji"
      />
      <img
        src={shawarma}
        alt=""
        className="absolute bottom-20 right-10 sm:bottom-28 sm:right-44 w-12 sm:w-28 drop-emoji"
      />
      <img
        src={pineapple}
        alt=""
        className="absolute top-72 left-20 lg:inline hidden sm:top-72 sm:left-28 w-10 sm:w-32 drop-emoji"
      />
      <img
        src={watermelon}
        alt=""
        className="absolute top-48 lg:inline hidden right-4 sm:top-40 sm:right-[15%] w-12 sm:w-28 drop-emoji"
      />
      <img
        src={pizza}
        alt=""
        className="absolute bottom-80 left-28 sm:bottom-96 sm:left-96 w-10 sm:w-28 drop-emoji"
      />
      <img
        src={coconut}
        alt=""
        className="absolute top-60 right-16 sm:top-96 sm:right-24 w-8 sm:w-20 drop-emoji"
      />
    </div>
  );
}
