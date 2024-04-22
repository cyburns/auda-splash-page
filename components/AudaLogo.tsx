import React from "react";
import Image from "next/image";
import AudaLogo from "@/public/images/auda-logo-v3.png";

export default function AudaLogoIcon() {
  return (
    <div className="absolute top-0 left-0 lg:left-5 lex flex-row  z-[2001]">
      <Image
        src={AudaLogo}
        alt="Portrait"
        className="w-24 xl:w-32"
        priority={true}
      />
    </div>
  );
}
