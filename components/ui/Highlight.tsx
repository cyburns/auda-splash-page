"use client";

import { cn } from "@/utils/cn";
import { useMotionValue, motion } from "framer-motion";
import React from "react";

export const HeroHighlight = ({
  children,
  className,
  containerClassName,
}: {
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
}) => {
  return (
    <div
      className={cn(
        "relative h-[5rem] mb-24 flex items-center  justify-center w-full group",
        containerClassName
      )}
    >
      <div className="absolute inset-0 pointer-events-none text-black" />
      <motion.div className="pointer-events-none bg-dot-thick-indigo-500  absolute inset-0 opacity-0 transition duration-300  text-black" />
      <div className={cn("relative z-20 ", className)}>{children}</div>
    </div>
  );
};

export const Highlight = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <motion.span
      initial={{
        backgroundSize: "0% 100%",
      }}
      animate={{
        backgroundSize: "100% 100%",
      }}
      transition={{
        duration: 2,
        ease: "linear",
        delay: 0.5,
      }}
      style={{
        backgroundRepeat: "no-repeat",
        backgroundPosition: "left center",
        display: "inline",
      }}
      className={cn(
        `relative inline-block pb-1   px-1 rounded-lg gradient-background`,
        className
      )}
    >
      {children}
    </motion.span>
  );
};
