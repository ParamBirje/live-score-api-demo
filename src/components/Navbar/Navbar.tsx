import React from "react";
import Links from "./Links";

export default function Navbar() {
  return (
    <nav className="z-[5] sticky top-0 py-2 backdrop-blur-md bg-primary bg-opacity-0 border- border-primary-lightest border-opacity-60">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* LOGO */}

        <div className="min-w-[20%]">
          <button>
            <h3 className="font-regular text-2xl">LiveScoreAPI</h3>
          </button>
        </div>

        {/* Side Nav */}
        <div className="min-w-[20%] flex justify-end gap-5 items-center">
          {/* Middle Nav */}
          <Links />

          <button className="flex items-center gap-5 rounded-md bg-black text-white px-4 py-2">
            <p className="font-medium">Sign In</p>
          </button>
        </div>
      </div>

      <div className="h-[1px] w-full mx-auto bg-gradient-to-r from-transparent from-5% via-primary-lightest to-transparent to-95%" />
    </nav>
  );
}
