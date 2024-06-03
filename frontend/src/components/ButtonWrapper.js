import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

const ButtonWrapper = () => {
  return (
    <div className="flex  items-center justify-center  px-4">
      <SpotlightButton />
    </div>
  );
};

const SpotlightButton = () => {
  const btnRef = useRef(null);
  const spanRef = useRef(null);

  useEffect(() => {
    const btnElement = btnRef.current;
  
    const handleMouseMove = (e) => {
      const { width } = e.target.getBoundingClientRect();
      const offset = e.offsetX;
      const left = `${(offset / width) * 100}%`;
  
      spanRef.current.animate({ left }, { duration: 250, fill: "forwards" });
    };
  
    const handleMouseLeave = () => {
      spanRef.current.animate(
        { left: "50%" },
        { duration: 100, fill: "forwards" }
      );
    };
  
    btnElement.addEventListener("mousemove", handleMouseMove);
    btnElement.addEventListener("mouseleave", handleMouseLeave);
  
    return () => {
      btnElement.removeEventListener("mousemove", handleMouseMove);
      btnElement.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);  

  return (
    <motion.button
      whileTap={{ scale: 0.985 }}
      ref={btnRef}
      className="relative w-full max-w-xs overflow-hidden rounded-lg bg-gray-100 px-4 py-3 text-lg font-medium text-white"
    >
      <span className="pointer-events-none relative z-10 mix-blend-difference">
        START YOUR PERFECT MATCH
      </span>
      <span
        ref={spanRef}
        className="pointer-events-none absolute left-[50%] top-[50%] h-32 w-32 -translate-x-[50%] -translate-y-[50%] rounded-full bg-red-200"
      />
    </motion.button>
  );
};

export default ButtonWrapper;