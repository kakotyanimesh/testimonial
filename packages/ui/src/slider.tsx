import { motion } from "framer-motion";
import { ReactNode } from "react";

interface InfiniteSliderProps {
  slides: (string | ReactNode)[],
  duration : string
}

export default function InfiniteSlider({ slides, duration }: InfiniteSliderProps) {
  return (
    <div className="ui-overflow-hidden">
      <motion.div
        className="flex ui-flex-row ui-justify-between md:ui-gap-10 ui-gap-2"
        transition={{ duration: `${duration}`, ease: "linear", repeat: Infinity }}
        initial={{ translateX: 0 }}
        animate={{ translateX: `-100%` }}
        style={{ width: "200%" }}
      >
        {slides.map((s, k) => (
          <div key={k} className="w-full flex-shrink-0">
            {s}
          </div>
        ))}
        {slides.map((s, k) => (
          <div key={`duplicated-${k}`} className="w-full flex-shrink-0">
            {s}
          </div>
        ))}
      </motion.div>
    </div>
  );
}
