import React from 'react'
import { BsSearch } from "react-icons/bs";

const SelectSection = () => {
  return (
    <section className="grid grid-cols-3 gap-8 py-4 pr-2">
          <div className=" relative  ">
            <select className="text-gray-400 placeholder:text-gray-400 px-10 py-2 w-full  outline-none border border-gray-300 rounded-md">
              <option value="">Select Transporter</option>
              <option value="">Select Transporter</option>
              <option value="">Select Transporter</option>
            </select>
            <div className="absolute top-3 left-4 text-blue-700 font-semibold">
              <BsSearch />
            </div>
          </div>

          <div className=" relative  ">
            <select className="text-gray-400 placeholder:text-gray-400 px-10 py-2 w-full  outline-none border border-gray-300 rounded-md">
              <option value="">Select Transporter</option>
              <option value="">Select Transporter</option>
              <option value="">Select Transporter</option>
            </select>
            <div className="absolute top-3 left-4 text-blue-700 font-semibold">
              <BsSearch />
            </div>
          </div>

          <div className=" relative  ">
            <select className="text-gray-400 placeholder:text-gray-400 px-10 py-2 w-full  outline-none border border-gray-300 rounded-md">
              <option value="">Select Transporter</option>
              <option value="">Select Transporter</option>
              <option value="">Select Transporter</option>
            </select>
            <div className="absolute top-3 left-4 text-blue-700 font-semibold">
              <BsSearch />
            </div>
          </div>
        </section>
  )
}

export default SelectSection