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
        className="text-3xl px-4 md:text-4xl lg:text-5xl font-bold  text-black max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto "
      >
        Connect, find communities, and grow businesses around your favorite{" "}
        <Highlight className="text-black dark:text-white">
          music with Auda
        </Highlight>
      </motion.h1>
    </HeroHighlight>
  );
};

export default Info;