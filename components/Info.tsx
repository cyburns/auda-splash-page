"use client";
import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "./ui/Highlight";

const Info = () => {
  return (
    <HeroHighlight>
      <motion.h1
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: [20, -5, 0],
        }}
        transition={{
          duration: 0.5,
          ease: [0.4, 0.0, 0.2, 1],
        }}
        className="text-4xl px-4 font-bold  text-white max-w-2xl leading-relaxed lg:leading-snug text-center mx-auto lg:mb-0 mb-5 lg:mt-0 mt-28"
      >
        Connect, find communities, and grow businesses around your favorite{" "}
        <Highlight className="text-black">music with Auda.</Highlight>
      </motion.h1>
    </HeroHighlight>
  );
};

export default Info;
