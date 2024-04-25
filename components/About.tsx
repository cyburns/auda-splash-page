"use client";

import React from "react";
import { InfiniteCards } from "./ui/InfiniteCards";

const About = () => {
  return (
    <div className="h-[40rem] w-screen flex flex-col antialiased items-center justify-center relative overflow-hidden lg:mt-32">
      <InfiniteCards items={testimonials} direction="left" speed="slow" />
    </div>
  );
};

const testimonials = [
  {
    name: "Connect",
  },
  {
    name: "Communities",
  },
  {
    name: "Layout",
  },
  {
    name: "Music",
  },
  {
    name: "Freinds",
  },
  {
    name: "Discover",
  },
  {
    name: "Share",
  },
];

export default About;
