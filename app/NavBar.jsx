import React from "react";

const NavBar = () => {
  return (
    <nav className="bg-[#16161a] flex fixed z-50 bottom-10 left-[50%] items-center justify-center ml-[-200px] px-1 py-1 gap-1 rounded-lg">
      <div className="hover:bg-[#7f5af0]/10 px-4 rounded cursor-pointer">
        <h1 className="text-stone-300 text-[16px]">Home</h1>
      </div>
      <div className="hover:bg-[#7f5af0]/10 px-4 rounded cursor-pointer">
        <h1 className="text-stone-300 text-[16px]">About</h1>
      </div>
      <div className="hover:bg-[#7f5af0]/10 px-4 rounded cursor-pointer">
        <h1 className="text-stone-300 text-[16px]">Work</h1>
      </div>
      <div className="hover:bg-[#7f5af0]/10 px-4 rounded cursor-pointer">
        <h1 className="text-stone-300 text-[16px]">Contact</h1>
      </div>
    </nav>
  );
};

export default NavBar;
