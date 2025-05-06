import { React, useState } from "react";
import { motion as Motion, useAnimationControls } from "framer-motion";

const Burger = () => {
  const [isOpen, setIsOpen] = useState(false);
  const Controls = useAnimationControls();

  const OpenMenu = () => {
    setIsOpen(true);
    Controls.start({
      x: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "backInOut" },
    });
  };

  const CloseMenu = () => {
    setIsOpen(false);
    Controls.start({
      x: 1050,
      opacity: 0,
      transition: { duration: 0.5, ease: "backInOut" },
    });
  };

  const BarVariants = {
    initial: { x: 0 },
    hover: (custom) => ({
      x: custom,
      transition: { type: "spring", stiffness: 300 },
    }),
  };

  return (
    <div>
      <Motion.header
        onClick={OpenMenu}
        className="absolute right-10 top-7 cursor-pointer z-40 text-2xl"
        whileHover="hover"
        initial="initial"
      >
        <div className="relative flex flex-col gap-1 items-end">
          <Motion.div
            className="w-9 h-1 bg-black rounded-2xl"
            variants={BarVariants}
            custom={-10}
          />
          <Motion.div
            className="w-7 h-1 bg-black rounded-2xl"
            variants={BarVariants}
            custom={-7}
          />
          <Motion.div
            className="w-5 h-1 bg-black rounded-2xl"
            variants={BarVariants}
            custom={-3}
          />
        </div>
      </Motion.header>
      <div
        className={`absolute h-screen w-full top-0 left-0 z-50 flex flex-col md:flex-row transition-all overflow-hidden ${
          isOpen ? "pointer-events-auto" : "pointer-events-none"
        }`}
      >
        <Motion.div
          className="w-1/3 bg-white overflow-hidden"
          initial={{ x: -550, opacity: 0 }}
          animate={isOpen ? { x: 0, opacity: 1 } : { x: -550, opacity: 0 }}
          transition={{ duration: 0.5, ease: "backInOut" }}
        >
          <span className="font-josefin -rotate-90 absolute bottom-60 -left-40 font-medium text-9xl z-10">
            John Lester <br />
            Quinagutan
          </span>
          <div className="pointer-events-none absolute -rotate-90 gap-5 flex flex-col -left-20 bottom-30 text-8xl font-josefin font-bold text-[#F8F4F4]">
            <span>Designer</span>
            <span className="ml-20">Developer</span>
            <span>Animator</span>
          </div>
        </Motion.div>

        <Motion.div
          className="w-2/3 bg-[#1a1a1a] relative"
          initial={{ x: 1050, opacity: 0 }}
          animate={Controls}
        >
          <div className="w-full flex">
            <button
              className="ml-auto text-white cursor-pointer px-10 py-5 text-2xl font-poppins"
              onClick={CloseMenu}
            >
              Close
            </button>
          </div>
          <div className="text-white flex flex-col text-left text-9xl absolute bottom-30 right-20 z-10">
            <span className="font-garamond">
              <FlipLink href="#">The &nbsp; Projects?</FlipLink>
            </span>
            <span className="font-playfair">
              <FlipLink href="#">About &nbsp; me?</FlipLink>
            </span>
          </div>
          <div className="absolute right-5 bottom-25 font-medium text-[#242424] flex flex-col text-left text-9xl pointer-events-none">
            <span className="font-garamond">The Projects?</span>
            <span className="font-playfair mt-10">About me?</span>
          </div>
          <div className="absolute bottom-7 cursor-crosshair right-10 text-white font-josefin text-3xl">
            <ScrambledText toText="johnlester.quinagutan@gmail.com" />
          </div>
        </Motion.div>
      </div>
    </div>
  );
};

const Duration = 0.15;
const Stagger = 0.03;

const FlipLink = ({ children, href }) => {
  const containerVariants = {
    initial: {},
    hovered: {
      transition: {
        staggerChildren: Stagger,
      },
    },
  };

  const topVariants = {
    initial: { y: 0 },
    hovered: { y: "-100%" },
  };

  const bottomVariants = {
    initial: { y: "100%" },
    hovered: { y: "0%" },
  };

  return (
    <Motion.a
      initial="initial"
      whileHover="hovered"
      href={href}
      className="relative block overflow-hidden whitespace-nowrap"
    >
      <Motion.div variants={containerVariants} className="flex">
        {children.split("").map((l, i) => (
          <Motion.span
            key={`top-${i}`}
            variants={topVariants}
            transition={{ duration: Duration, ease: "easeInOut" }}
            className="inline-block py-5"
          >
            {l}
          </Motion.span>
        ))}
      </Motion.div>

      {/* Bottom Layer */}
      <Motion.div
        className="absolute inset-0 flex"
        variants={containerVariants}
      >
        {children.split("").map((l, i) => (
          <Motion.span
            key={`bottom-${i}`}
            variants={bottomVariants}
            transition={{ duration: Duration, ease: "easeInOut" }}
            className="inline-block py-5"
          >
            {l}
          </Motion.span>
        ))}
      </Motion.div>
    </Motion.a>
  );
};

const ScrambledText = ({ fromText = "Email me?", toText, speed = 80 }) => {
  const [output, setOutput] = useState(fromText);
  const [hasAnimated, setHasAnimated] = useState(false);
  const chars = "abcdefghijklmnopqrstuvwxyz";

  const handleHover = () => {
    if (hasAnimated) return; // Don't animate again
    let frame = 0;
    const length = Math.max(fromText.length, toText.length);
    const interval = setInterval(() => {
      let result = "";
      for (let i = 0; i < length; i++) {
        if (i < frame && toText[i]) {
          result += toText[i];
        } else {
          result += chars[Math.floor(Math.random() * chars.length)];
        }
      }
      setOutput(result);
      frame++;
      if (frame > toText.length) {
        clearInterval(interval);
        setHasAnimated(true);
      }
    }, speed);
  };

  return (
    <span onMouseEnter={handleHover} className="inline-block">
      {output}
    </span>
  );
};

export default Burger;
