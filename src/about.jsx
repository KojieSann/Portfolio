import ScrambledText from "./components/ScrambledText";
import { useRef } from "react";
import { motion as Motion, useScroll, useTransform } from "framer-motion";

const paragraph =
  "Hi! I'm John Lester Quinagutan 👋 A Designer and Developer who brings ideas to life. From websites 🌐 to graphics 🎨brochures, posters, or anything in between I've got you covered. Let's create something amazing together!";

const AboutMe = () => {
  const elementRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: elementRef,

    offset: ["start .95", "start .25"],
  });
  const words = paragraph.split(" ");
  return (
    <div className="lg:h-screen h-3/4 flex items-center justify-center">
      <div className="lg:h-screen h-3/4 flex items-center justify-center text-center">
        <div
          ref={elementRef}
          style={{ opacity: scrollYProgress }}
          className="lg:max-w-screen-lg md:max-w-screen-md max-w-screen-sm flex flex-wrap justify-center font-josefin font-black text-xl md:text-3xl lg:text-5xl leading-tight p-5"
        >
          {words.map((word, index) => {
            const start = index / words.length;
            const end = start + 1 / words.length;
            return (
              <Word key={index} range={[start, end]} progress={scrollYProgress}>
                {word}
              </Word>
            );
          })}
        </div>
      </div>
    </div>
  );
};
{
  /* Hi! I am John Lester Quinagutan
        <span className="text-[#D62828]">
          <ScrambledText text="John Lester Quinagutan" />
        </span>
        . A Designer and a Developer, that can help you with your troubles... I
        think, pls hire me :&lt; */
}

const Word = ({ children, range, progress }) => {
  const opacity = useTransform(progress, range, [0, 1]);
  return (
    <span className="relative inline-block mr-2">
      <span className="absolute opacity-5">{children}</span>
      <Motion.span style={{ opacity }}>{children}</Motion.span>
    </span>
  );
};

export default AboutMe;
