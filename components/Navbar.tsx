import React, { useState } from "react";

const Navbar = () => {
  const navItems = [
    { id: 1, text: "Auda" },
    { id: 2, text: "Company" },
    { id: 3, text: "Careers" },
  ];

  return (
    <div className=" flex justify-end items-center h-28 mx-auto px-4 text-white">
      <ul className="hidden md:flex">
        {navItems.map((item) => (
          <li
            key={item.id}
            className="p-4 m-2 cursor-pointer hover:underline duration-300 text-white text-xl font-medium"
          >
            {item.text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
