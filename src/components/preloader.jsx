import { motion as Motion } from "framer-motion";

const Preloader = () => {
  return (
    <Motion.div
      // initial={{ y: 0 }}
      // animate={{ y: -650 }}
      // transition={{ duration: 1, delay: 3 }}
      className="h-screen w-full z-50 bg-white flex items-center justify-center absolute pointer-events-none overflow-hidden"
    >
      <div className="text-9xl font-garamond whitespace-nowrap flex items-center justify-center gap-5">
        <Motion.span
          className="z-10"
          initial={{ x: 238 }}
          animate={{ x: [238, 238, 0, 0, -600] }}
          transition={{ duration: 5, times: [0, 0.3, 0.4, 0.5, 0.6] }}
        >
          LES
        </Motion.span>
        <Motion.img
          initial={{ scale: 0, opacity: 0, y: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{
            duration: 1,
            delay: 1,
            ease: "backIn",
          }}
          className="sm:w-2/7 md:w-2/4 lg:w-2/7 w-3/5 object-cover rounded-2xl"
          src="./img/madalina-georgiana-patru-gBGNRSp8Up4-unsplash.jpg"
          alt=""
        />
        <Motion.span
          className="z-10"
          initial={{ x: -238 }}
          animate={{ x: [-238, -238, 0, 0, 600] }}
          transition={{ duration: 5, times: [0, 0.3, 0.4, 0.5, 0.6] }}
        >
          TER
        </Motion.span>
      </div>
    </Motion.div>
  );
};

export default Preloader;
