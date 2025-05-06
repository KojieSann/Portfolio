import { motion as Motion, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

const Footer = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });
  useEffect(() => {
    console.log(`the element ${isInView ? "is" : "is not"} in view`);
  }, [isInView]);

  return (
    <div className="relative min-h-screen">
      <Motion.div
        className="z-20 absolute w-[110vw] bottom-0 left-0 bg-white"
        initial={{ y: -350, x: -50, rotate: -10 }}
        animate={{
          y: isInView ? -350 : 0,
          rotate: isInView ? -10 : 0,
          x: isInView ? -50 : 0,
        }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="p-10 lg:text-9xl text-4xl font-bold font-josefin">
          Let's talk <i class="fa-solid fa-arrow-down"></i>
        </h1>
        <div className="w-full overflow-hidden h-70 relative">
          <div className="-rotate-3 overflow-hidden absolute -top-10">
            <ContactMe duration="30" />
            <GetInTouch duration="25" />
            <ContactMe duration="20" />
            <GetInTouch duration="28" />
            <ContactMe duration="35" />
            <GetInTouch duration="33" />
            <ContactMe duration="30" />
            <GetInTouch duration="25" />
          </div>
        </div>
      </Motion.div>
      <div className="lg:h-4/6 w-full absolute bottom-0 left-0">
        <Contacts />
      </div>
      <div className="absolute h-1/8 bottom-0 left-0 w-full" ref={ref}></div>
    </div>
  );
};

const Contacts = () => {
  return (
    <div className="h-full w-full bg-[#1A1A1A] relative">
      <span className=" absolute bottom-20 -left-5 lg:bottom-5 lg:-left-20 text-[#282828] lg:text-[180px] text-6xl font-semibold text-opacity-60 pointer-events-none font-josefin">
        Need me?
      </span>
      <span className="absolute lg:bottom-30 lg:left-20 bottom-15 left-5 text-white lg:text-7xl text-4xl font-semibold text-opacity-60 pointer-events-none font-josefin">
        Need me?
      </span>
      <div className="w-full items-end flex flex-col lg:pt-38 pt-26 lg:pb-0 pb-20 lg:px-10 px-5 gap-5 z-10 ">
        <p className="lg:w-1/3 w-2/3 text-xs lg:text-lg font-josefin text-white font-light lg:font-medium text-right">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio
          voluptatum quam nesciunt error mollitia neque consectetur doloremque
          minus facere corrupti.
        </p>
        <div className="lg:h-18 lg:w-18 h-12 w-12 lg:text-2xl text-sm rounded-full bg-[#FCBF49] flex items-center justify-center text-white cursor-pointer">
          <i class="fa-solid fa-arrow-up"></i>
        </div>
        <div className="z-10 flex flex-col gap-1 text-right font-josefin text-white font-light lg:text-5xl text-lg italic">
          <span>Johnlester.quinagutan@gmail.com</span>
          <span>+63 976 027 8325</span>
        </div>
      </div>
      <div className="lg:text-base text-xs absolute flex w-full justify-between items-center text-white bottom-0 left-0 py-6 px-10 z-50">
        <a href="https://www.facebook.com/lesteerr" target="_blank">
          Facebook
        </a>
        <a href="https://github.com/KojieSann" target="_blank">
          Github
        </a>
        <a href="#" target="_blank">
          LinkedIn
        </a>
      </div>
    </div>
  );
};

const GetInTouch = ({ duration }) => {
  return (
    <div className="container mx-auto">
      <div className="flex">
        <Motion.div
          className="flex"
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{
            duration: Number(duration),
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <Texts text="Get in touch" outline coloredStroke />
          <Texts text="Get in touch" outline />
          <Texts text="Get in touch" outline />
          <Texts text="Get in touch" outline coloredStroke />
          <Texts text="Get in touch" outline />
          <Texts text="Get in touch" outline />
        </Motion.div>
        <Motion.div
          className="flex"
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{
            duration: Number(duration),
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <Texts text="Get in touch" outline />
          <Texts text="Get in touch" outline />
          <Texts text="Get in touch" outline coloredStroke />
          <Texts text="Get in touch" outline />
          <Texts text="Get in touch" outline />
          <Texts text="Get in touch" outline coloredStroke />
        </Motion.div>
      </div>
    </div>
  );
};

const ContactMe = ({ duration }) => {
  return (
    <div className="container mx-auto">
      <div className="flex">
        <Motion.div
          className="flex"
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{
            duration: Number(duration),
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <Texts text="Contact me" highlighted />
          <Texts text="Contact me" />
          <Texts text="Contact me" />
          <Texts text="Contact me" />
          <Texts text="Contact me" highlighted />
          <Texts text="Contact me" />
        </Motion.div>
        <Motion.div
          className="flex"
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{
            duration: Number(duration),
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <Texts text="Contact me" highlighted />
          <Texts text="Contact me" />
          <Texts text="Contact me" />
          <Texts text="Contact me" highlighted />
          <Texts text="Contact me" />
          <Texts text="Contact me" />
        </Motion.div>
      </div>
    </div>
  );
};

const Texts = ({
  text,
  outline = false,
  coloredStroke = false,
  highlighted = false,
}) => {
  return (
    <span
      className={`lg:text-5xl text-3xl pr-5 whitespace-nowrap font-josefin font-bold tracking-tighter leading-none${
        outline ? "text-stroke" : ""
      } ${coloredStroke ? "colored-stroke" : ""} ${
        highlighted ? "highlighted-text" : ""
      } `}
    >
      {text}
    </span>
  );
};

export default Footer;
