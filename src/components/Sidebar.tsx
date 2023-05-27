import React from 'react'
import { BsSpeedometer2 } from "react-icons/bs";
import { FaTruck, FaRoad } from "react-icons/fa";
import { FiSettings } from "react-icons/fi";
import { MdOutlineEmojiTransportation, MdAnalytics } from "react-icons/md";
import { routes } from '../utils/routes';
import { useNavigate } from 'react-router-dom';
const sidebarData = [
  {
    name: "Dashboard",
    link: routes.dashboard,
    icon: <BsSpeedometer2 />,
  },
  {
    name: "Trips",
    link: routes.trips,
    icon: <FaTruck />,
  },
  {
    name: "Tracking",
    link: routes.tracking,
    icon: <FaRoad />,
  },
  {
    name: "Transporters",
    link: routes.transportation,
    icon: <MdOutlineEmojiTransportation />,
  },
  {
    name: "Analytics",
    link: routes.analytics,
    icon: <MdAnalytics />,
  },
] as const;
const Sidebar = () => {
  const Navigate = useNavigate()
  return (
    <aside className=" flex flex-col h-screen">
    <div className="cursor-pointer bg-purple-700 flex items-center justify-center p-4">
      <p className="text-white font-bold tracking-widest">EG</p>
    </div>
    <div className="bg-blue-700  flex-1">
      {sidebarData.map((item, idx) => {
        return (
          <div
          onClick={()=>Navigate(item.link)}
            key={idx}
            className="cursor-pointer p-4 text-white text-xs flex flex-col items-center justify-center"
          >
            <p className="text-xl">{item.icon}</p>

            <p>{item.name}</p>
          </div>
        );
      })}
    </div>

      <div  className="cursor-pointer bg-blue-700 p-4 text-white text-xs flex flex-col items-center justify-center">
        <p className="text-xl">
          <FiSettings/>
        </p>
        <p>Settings</p>
      </div>
  </aside>
  )
}

export default Sidebar