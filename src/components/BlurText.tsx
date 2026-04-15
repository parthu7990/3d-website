import { motion, useInView } from "motion/react";
import { useRef } from "react";

interface BlurTextProps {
  text: string;
  delay?: number;
  className?: string;
  direction?: "top" | "bottom";
}

export default function BlurText({
  text,
  delay = 100,
  className = "",
  direction = "bottom",
}: BlurTextProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const words = text.split(" ");

  return (
    <div ref={ref} className={`flex flex-wrap ${className}`}>
      {words.map((word, index) => (
        <motion.span
          key={index}
          initial={{
            filter: "blur(10px)",
            opacity: 0,
            y: direction === "bottom" ? 50 : -50,
          }}
          animate={
            isInView
              ? {
                  filter: ["blur(10px)", "blur(5px)", "blur(0px)"],
                  opacity: [0, 0.5, 1],
                  y: [direction === "bottom" ? 50 : -50, -5, 0],
                }
              : {}
          }
          transition={{
            duration: 0.7,
            delay: (delay + index * 200) / 1000,
            times: [0, 0.5, 1],
            ease: "easeOut",
          }}
          className="mr-[0.25em] inline-block"
        >
          {word}
        </motion.span>
      ))}
    </div>
  );
}
