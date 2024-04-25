"use client";

import { testimonials } from "@/constants/data";

import React from "react";
import { InfiniteCards } from "./ui/InfiniteCards";

const About = () => {
  return (
    <div className="h-[40rem] w-screen flex flex-col antialiased items-center justify-center relative overflow-hidden lg:mt-32">
      <InfiniteCards items={testimonials} direction="left" speed="slow" />
    </div>
  );
};

export default About;
