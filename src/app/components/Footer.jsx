import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white">
      <div className="container p-12 flex justify-between">
        <Image
          src="/images/gator_software_no_bg.png"
          alt="Gator Software Logo"
          width={50}
          height={50}
        />
        <p className="text-slate-600">
          © {new Date().getFullYear()} Wade Aston. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
