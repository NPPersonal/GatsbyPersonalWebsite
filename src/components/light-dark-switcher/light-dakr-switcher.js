import React from "react";
import SunIcon from "./svg-icons/sun";
import NightIcon from "./svg-icons/night";

export default function LightDarkSwitcher({ mode }) {
  return (
    <div className="relative w-[40px] h-[40px] overflow-hidden">
      <div
        className={`absolute flex justify-center items-center left-0 right-0
        transition-all duration-1000 ease-in-out
        ${mode === "dark" ? "top-0 bottom-0" : "-top-[100%] bottom-[100%]"}`}
      >
        <SunIcon />
      </div>
      <div
        className={`absolute flex justify-center items-center left-0 right-0 top-0
        transition-all duration-1000 ease-in-out
        ${mode === "light" ? "top-0 bottom-0" : "top-[100%] -bottom-[100%]"}`}
      >
        <NightIcon />
      </div>
    </div>
  );
}
