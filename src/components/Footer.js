// ...existing code...
import React, { useState } from "react";
import tree from "../images/tree.png";

const faqs = [
  {
    q: "How do I place an order?",
    a: "Open the site, choose your restaurant, add items to cart and checkout. You'll get a pickup time and instructions.",
  },
  {
    q: "What payment methods do you accept?",
    a: "We accept major credit cards and online bank transfer. Restaurants may support additional local options.",
  },
  {
    q: "Can I change or cancel my order?",
    a: "If the restaurant hasn't started preparing it yet, you can usually cancel or edit. ",
  },
  {
    q: "Where do I pick up my order?",
    a: "Follow the pickup instructions shown on the order screen. Most restaurants have a dedicated counter or parking pickup area.",
  },
];

function Footer() {
  const [openIndex, setOpenIndex] = useState(-1);

  const toggle = (i) => setOpenIndex((prev) => (prev === i ? -1 : i));

  // positions for the decorative fruits on the "floor"
 

  return (
    <footer className="relative hero-background text-black font-kumbh-sans">
      <div className="max-w-4xl mx-auto py-20 px-6 flex flex-col items-center">
        <img src={tree} alt="Gift Icon" className="w-16 mb-6" />

        <h2 className="text-center lg:text-4xl text-3xl font-semibold lg:mb-4 mb-2">
          How can we help you?
        </h2>

        <p className="text-center lg:text-lg text-base  max-w-2xl mb-8">
          Quick answers about ordering, payments and more.
        </p>

        <div className="w-full max-w-2xl">
          {faqs.map((f, i) => {
            const open = i === openIndex;
            return (
              <div
                key={i}
                className="border-b border-gray-800 py-4 cursor-pointer"
                onClick={() => toggle(i)}
              >
                <div className="flex items-center gap-4">
                  <div
                    className={`flex items-center justify-center w-8 h-8 rounded-full border border-gray-700 transition-transform ${
                      open ? "bg-green-500" : "bg-transparent"
                    }`}
                  >
                    <svg
                      className={`w-4 h-4 text-black transform transition-transform ${
                        open ? "rotate-45" : "rotate-0"
                      }`}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden
                    >
                      <path d="M12 5v14M5 12h14"></path>
                    </svg>
                  </div>

                  <div className="flex-1">
                    <div className="lg:text-base text-sm font-medium">{f.q}</div>
                    <div
                      className="text-sm text-gray-700 mt-2 overflow-hidden transition-[max-height] duration-300"
                      style={{
                        maxHeight: open ? 200 : 0,
                      }}
                      aria-hidden={!open}
                    >
                      <div className="pt-1">{f.a}</div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* decorative fruit "floor" */}
     
    </footer>
  );
}

export default Footer;
// ...existing code...