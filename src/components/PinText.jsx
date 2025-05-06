import { useRef } from "react";
import {
  motion as Motion,
  useScroll,
  useTransform,
  useInView,
} from "framer-motion";

const cardData = [
  {
    title: "Minimal Designs",
    imageSrc: "/img/web-design.png",
    description:
      "I create minimal and modern design to make the users more comfortable browsing the web",
  },
  {
    title: "One call away",
    imageSrc: "/img/phone-call.png",
    description:
      "Believe it or not just tell me what you need or might want to change I will be ONE CALL AWAY",
  },
  {
    title: "Dramatic Animations",
    imageSrc: "/img/stars.png",
    description:
      "There are no such thing as boring website when you razzle dazzle using animations",
  },
  {
    title: "Responsive designs",
    imageSrc: "/img/phone.png",
    description:
      "Making sure that the designs are suitable for mobiles, as hoomans can't live without their phones.",
  },
  {
    title: "Might blow your brains out",
    imageSrc: "/img/surprised.png",
    description:
      "Yeah, that's right! designs and animation that will blow your heads out... figuratively of course.",
  },
];

const PinText = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.1], [0, 1]);
  const scale = useTransform(scrollYProgress, [0, 0.1], [0.9, 1]);

  return (
    <div
      ref={containerRef}
      className="relative lg:h-[315vh] h-[230vh] flex flex-col items-center justify-start mt-50"
    >
      <Motion.div
        style={{ opacity, scale }}
        className="sticky top-1/2 -translate-y-1/2"
      >
        <h1 className="font-josefin md:text-6xl lg:text-8xl text-4xl font-bold text-[#1a1a1a] text-center">
          Why choose me?
        </h1>
      </Motion.div>

      <div className="absolute flex flex-col gap-30 w-full z-30 mt-80 lg:px-60 md:px-20 px-10">
        {cardData.map((card, index) => (
          <div key={index} className="relative" style={{ perspective: 1000 }}>
            <FlipCard
              title={card.title}
              imageSrc={card.imageSrc}
              description={card.description}
              alignRight={index % 2 !== 0}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

const FlipCard = ({ title, imageSrc, description, alignRight }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <Motion.div
      ref={ref}
      initial={{ rotateY: -90, opacity: 0 }}
      animate={isInView ? { rotateY: 0, opacity: 1 } : {}}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      style={{ transformStyle: "preserve-3d" }}
      className={`lg:w-3/9 md:w-2/4 w-3/4 md:p-6 p-4 shadow-sm backdrop-blur-md bg-transparent border border-white/30 
        flex items-center flex-col rounded-2xl gap-2.5 ${
          alignRight ? "ml-auto" : ""
        }`}
    >
      <h1 className="lg:text-5xl md:text-4xl text-2xl font-bold font-josefin">
        {title}
      </h1>
      <div className="w-full">
        <img className="w-1/6 mr-auto" src={imageSrc} alt={title} />
      </div>
      <p className="font-medium font-poppins text-[#8C8C8C] text-sm">
        {description}
      </p>
    </Motion.div>
  );
};

export default PinText;
