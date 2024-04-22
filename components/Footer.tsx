import React from "react";

export default function Footer() {
  const menuItems = [
    "We ask that you help create a safe and respectful online space. These community values encourage constructive conversations on this page. We are currently working on multiple new features to help grow our community and support growing artists. We also want to put an emphasis on community-created content like playlists and events. Please reach out with any concerns, bugs, or ideas!",
  ];

  return (
    <footer className="mb-10 mt-16 px-4 text-gray-500 max-w-7xl">
      <div className="flex items-center justify-center text-center">
        {menuItems.map((item, index) => (
          <p key={index} className="text-md m-5 hover:underline">
            {item}
          </p>
        ))}
      </div>
    </footer>
  );
}
