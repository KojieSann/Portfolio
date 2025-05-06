import { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { motion as Motion } from "framer-motion";
import Burger from "./menu";

const HeaderMenu = () => {
  const arrowDown = useRef();
  const arrowUp = useRef();

  useGSAP(() => {
    gsap.to(arrowDown.current, {
      x: 30,
      duration: 0.5,
      repeat: -1,
      yoyo: true,
    });
    gsap.to(arrowUp.current, {
      x: -30,
      duration: 0.5,
      repeat: -1,
      yoyo: true,
    });
  });
  return (
    <div className="relative overflow-x-hidden h-screen w-full flex flex-col items-center justify-center bg-transparent">
      <Burger />
      <Marquee bgColor="#D62828" rotate={18} />
      <Marquee bgColor="#F77F00" rotate={-18} />
      <div className="absolute left-0 rotate-90 font-playfair flex items-center gap-3 p-2">
        <span>Scroll</span>
        <i class="fa-solid fa-arrow-right" ref={arrowDown}></i>
      </div>
      <div className="absolute right-0 -rotate-90 font-playfair flex items-center gap-3 p-2">
        <i class="fa-solid fa-arrow-left" ref={arrowUp}></i> <span>Scroll</span>
      </div>
      <div className="circle-shadow"></div>
      <img
        className="absolute sm:w-2/7 md:w-2/4 lg:w-2/7 w-3/5 object-cover rounded-2xl"
        src="./img/madalina-georgiana-patru-gBGNRSp8Up4-unsplash.jpg"
        alt=""
      />
      <div className=" text-4xl sm:text-7xl md:text-6xl flex flex-col items-center font-josefin font-black text-[#ececec] gap-2.5">
        <span className="ml-52">CSS</span>
        <span>HTML ReactJs</span>
        <span>Tailwind CSS Javascript</span>
        <div className="mt-20"></div>
        <div className="absolute bottom-4/9 left-1/5 z-10 mix-blend-difference">
          Front end
        </div>
        <span className="mr-96">CSS CSS</span>
        <span className="-mr-96">GSAP</span>
        <span className="-ml-56">Framer Motion</span>
      </div>
      <div className="flex gap-8 mt-10 text-2xl z-40">
        <Motion.a href="#" whileHover={{ y: -5, color: "#f77f00" }}>
          <i class="fa-brands fa-facebook"></i>
        </Motion.a>
        <Motion.a href="#" whileHover={{ y: -5, color: "#f77f00" }}>
          <i class="fa-brands fa-github"></i>
        </Motion.a>
        <Motion.a href="#" whileHover={{ y: -5, color: "#f77f00" }}>
          <i class="fa-brands fa-linkedin"></i>
        </Motion.a>
      </div>
    </div>
  );
};

const Marquee = ({ bgColor = "", rotate = 0 }) => {
  const [rotation, setRotation] = useState(rotate);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 640) {
        setRotation(rotate > 0 ? 30 : -30);
      } else if (width < 1024) {
        setRotation(rotate > 0 ? 20 : -20);
      } else {
        setRotation(rotate);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [rotate]);

  const marqueeText = (
    <div className="flex items-center flex-shrink-0 px-4 gap-5 whitespace-nowrap">
      Boring Design is not a Design <div>~</div>
    </div>
  );

  return (
    <div
      className="lg:p-2 p-1.5 lg:text-2xl text-[10px] overflow-hidden w-[140vw] lg:w-[110vw] my-5 absolute text-white z-20"
      style={{ backgroundColor: bgColor, transform: `rotate(${rotation}deg)` }}
    >
      <Motion.div
        className="flex w-max flex-row font-poppins text-sm font-black"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: 100,
        }}
      >
        {[...Array(5)].map((_, outerIdx) => (
          <div key={`set-${outerIdx}`} className="flex gap-10">
            {[...Array(8)].map((_, idx) => (
              <div key={`item-${outerIdx}-${idx}`}>{marqueeText}</div>
            ))}
          </div>
        ))}
      </Motion.div>
    </div>
  );
};
export default HeaderMenu;
