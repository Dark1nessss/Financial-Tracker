import React, { useEffect } from 'react';
import 'particles.js';

const ErrorPage = () => {
  useEffect(() => {
    if (window.particlesJS) {
      window.particlesJS("particles-js", {
        particles: {
          number: {
            value: 80,
            density: {
              enable: true,
              value_area: 800,
            },
          },
          color: {
            value: ["#71b7e6", "#69a6ce", "#ee8176"], // Updated colors to match the website theme
          },
          shape: {
            type: "circle",
            stroke: {
              width: 0,
              color: "#000000",
            },
            polygon: {
              nb_sides: 5,
            },
          },
          opacity: {
            value: 0.15,
            random: true,
            anim: {
              enable: true,
              speed: 1,
              opacity_min: 0.05,
              sync: false,
            },
          },
          size: {
            value: 3,
            random: true,
            anim: {
              enable: true,
              speed: 5,
              size_min: 0.5,
              sync: false,
            },
          },
          line_linked: {
            enable: false,
          },
          move: {
            enable: true,
            speed: 1,
            direction: "none",
            random: true,
            straight: false,
            out_mode: "out",
            bounce: false,
            attract: {
              enable: false,
              rotateX: 600,
              rotateY: 1200,
            },
          },
        },
        interactivity: {
          detect_on: "canvas",
          events: {
            onhover: {
              enable: true,
              mode: "bubble",
            },
            onclick: {
              enable: true,
              mode: "repulse",
            },
            resize: true,
          },
          modes: {
            bubble: {
              distance: 200,
              size: 4,
              duration: 2,
              opacity: 0.3,
              speed: 3,
            },
            repulse: {
              distance: 150,
              duration: 0.4,
            },
          },
        },
        retina_detect: true,
      });
    } else {
      console.error("particlesJS is not defined on the window object.");
    }
  }, []);

  return (
    <div className="error-page h-screen flex items-center justify-center text-center font-sans relative overflow-hidden">
      <div>
        <h1 data-h1="404" className="text-[30vh] font-bold relative -mt-[8vh]">
          403
          <span className="absolute inset-0 bg-gradient-to-r from-[#71b7e6] via-[#69a6ce] to-[#ee8176] bg-clip-text text-transparent animate-[animateTextBackground_10s_ease-in-out_infinite]">
            403
          </span>
        </h1>
        <p data-p="NOT FOUND" className="text-gray-400 text-[8vh] font-bold leading-[10vh] max-w-[600px] mx-auto relative">
          NOT AUTHORIZED
          <span className="absolute inset-0 bg-clip-text text-transparent text-shadow-[1px_1px_2px_rgba(255,255,255,0.5)]">
          NOT AUTHORIZED
          </span>
        </p>
      </div>
      <div id="particles-js" className="absolute inset-0"></div>
    </div>
  );
};

export default ErrorPage;
