import React from 'react'
import { IoMdNotifications } from "react-icons/io";
import { BiDownArrow } from "react-icons/bi";
import { BsSearch } from "react-icons/bs";
const Navbar = () => {
  return (
    <nav className="border-b border-gray-300 flex items-center ">
    <h1 className=" tracking-widest font-semibold text-lg capitalize py-[14px] px-8 border-r border-gray-300">
      <span>Tracking</span>
    </h1>
    <div className=" flex-1 relative px-4 ">
      <input type="text" placeholder="Search here"  className="placeholder:text-gray-400 px-10 py-2 w-[50%] outline-none border-none"/>
      <div className="absolute top-3 left-8 text-blue-700 font-semibold">
          <BsSearch/>
      </div>
    </div>
    <div className="p-4 text-xl text-blue-700 ">
      <IoMdNotifications />
    </div>
  </nav>
  )
}

export default Navbar