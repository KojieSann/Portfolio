import { useEffect, useState, useRef } from "react";
import { motion as Motion, useInView } from "framer-motion";

const ScrambledText = ({ text, speed = 80 }) => {
  const [output, setOutput] = useState("");
  const [hasAnimated, setHasAnimated] = useState(false);
  const chars = "abcdefghijklmnopqrstuvwxyz!<>-_\\/[]{}—=+*^?#";

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView || hasAnimated) return;

    let frame = 0;
    const scramble = (from, to) => {
      const length = Math.max(from.length, to.length);
      const interval = setInterval(() => {
        let result = "";
        for (let i = 0; i < length; i++) {
          if (i < frame && to[i]) {
            result += to[i];
          } else {
            result += chars[Math.floor(Math.random() * chars.length)];
          }
        }
        setOutput(result);
        frame++;
        if (frame > to.length) {
          clearInterval(interval);
          setHasAnimated(true);
        }
      }, speed);
    };

    scramble("", text);
  }, [isInView]);

  return (
    <Motion.span ref={ref} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      {output}
    </Motion.span>
  );
};

export default ScrambledText;
