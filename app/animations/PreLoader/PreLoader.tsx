"use cleint";
import { useEffect } from "react";
import { preLoaderAnim } from "./loader";
import "./preloader.css";

const PreLoader = () => {
  useEffect(() => {
    preLoaderAnim();
  }, []);

  return (
    <div className="preloader gap-[10px] overflow-hidden text-[20px]">
      <div className="texts-container w-500 flex h-60 items-center justify-center gap-10 overflow-hidden text-[20px] font-extrabold text-white opacity-0">
        <span>Developer,</span>
        <span>Designer,</span>
        <span>Driller.</span>
        <div className="sub hidden"></div>
      </div>
    </div>
  );
};

export default PreLoader;
