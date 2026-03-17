// ...existing code...
import React, { useEffect, useRef, useState } from "react";
import gift from "../images/gift.png";

function AnimatedText({ text, visibleWords, className = "" }) {
  // split into words but keep whitespace tokens
  const tokens = text.split(/(\s+)/); // includes spaces as separate tokens

  let wordIndex = 0;
  return (
    <span className={className} aria-hidden>
      {tokens.map((tok, i) => {
        const isSpace = /^\s+$/.test(tok);
        if (isSpace) {
          return (
            <span key={i} style={{ whiteSpace: "pre" }}>
              {tok}
            </span>
          );
        }

        const isVisible = wordIndex < visibleWords;
        wordIndex += 1;

        return (
          <span
            key={i}
            style={{
              display: "inline-block",
              transitionProperty: "color, font-weight",
              transitionDuration: "250ms",
              transitionTimingFunction: "cubic-bezier(.2,.9,.3,1)",
              color: isVisible ? "#ffffff" : "#9ca3af",
              fontWeight: isVisible ? 600 : 300, // light -> bold
            }}
          >
            {tok}
          </span>
        );
      })}
    </span>
  );
}

function Section1() {
  const ref = useRef(null);
  const [visibleWords, setVisibleWords] = useState(0);

  // paragraph text
  const paragraph =
    "Queue no be your mate. Skip it completely. Order ahead and pick it up in seconds. Kwicky makes it easy!";

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const wordTokens = paragraph.split(/(\s+)/).filter((t) => /\S/.test(t));
    const total = wordTokens.length;
    if (total === 0) return;

    const startDelay = 600; // ms before first word changes after section becomes visible
    const perWord = 220; // ms between each word reveal

    const startedRef = { current: false };
    let timeoutId = null;
    let intervalId = null;

    const startReveal = () => {
      if (startedRef.current) return;
      startedRef.current = true;

      timeoutId = setTimeout(() => {
        let idx = 0;
        intervalId = setInterval(() => {
          idx += 1;
          setVisibleWords(idx);
          if (idx >= total && intervalId) {
            clearInterval(intervalId);
            intervalId = null;
          }
        }, perWord);
      }, startDelay);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // start reveal once the section crosses the threshold
            startReveal();
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.5 } // require ~50% visibility before starting
    );

    observer.observe(el);

    return () => {
      observer.disconnect();
      if (timeoutId) clearTimeout(timeoutId);
      if (intervalId) clearInterval(intervalId);
    };
  }, [paragraph]);

  return (
    <div
      ref={ref}
      className="flex items-center justify-center h-screen bg-[#181916] text-white font-kumbh-sans px-4"
    >
      <div className="text-center w-full lg:max-w-4xl max-w-3xl">
        <img src={gift} alt="Gift Icon" className="lg:w-24 w-14 mb-6 mx-auto" />

        <h2 className="lg:text-5xl text-2xl font-semibold mb-4 lg:leading-[60px]">
          <AnimatedText text={paragraph} visibleWords={visibleWords} />
        </h2>
      </div>
    </div>
  );
}

export default Section1;
// ...existing code...