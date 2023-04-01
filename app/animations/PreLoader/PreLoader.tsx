"use client";
import React, { useEffect } from "react";
import { preLoaderAnim } from "./loader";
import "./preloader.css";

const PreLoader = () => {
  useEffect(() => {
    preLoaderAnim();
  }, []);

  return (
    <div className="preloader">
      <div className="texts-container">
        <span>Developer,</span>
        <span>Designer,</span>
        <span>Driller.</span>
        <div className="sub hidden"></div>
      </div>
    </div>
  );
};

export default PreLoader;
