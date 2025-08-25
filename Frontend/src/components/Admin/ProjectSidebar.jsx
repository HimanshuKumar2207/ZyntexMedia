import React from "react";
import { NavLink } from "react-router-dom";
import { assets } from "../../assets/assets";

const Sidebar = () => {
  return (
    <>
      <div className="flex flex-col bg-gradient-to-b from-orange-600 to-orange-500 min-h-full pt-6">
        <NavLink
          end={true}
          to="/project-admin"
          className={({ isActive }) =>
            `flex items-center  gap-3 py-3.5 md:px-9 md:min-w-64 cursor-pointer ${
              isActive && " border-r-4 border-blue-600"
            }`
          }
        >
          <img src={assets.list_icon} alt="" className="main-w-4 w-5 invert brightness-0 " />
          <p className="hidden md:inline-block font-semibold text-white ">Add Project</p>
        </NavLink>

        <NavLink
          end={true}
          to="/project-admin/listProject"
          className={({ isActive }) =>
            `flex items-center  gap-3 py-3.5 md:px-9 md:min-w-64 cursor-pointer ${
              isActive && " border-r-4 border-blue-600"
            }`
          }
        >
          <img src={assets.home_icon} alt="" className="main-w-4 w-5 invert brightness-0" />
          <p className="hidden md:inline-block font-semibold text-white "> Project Lists</p>
        </NavLink>
      </div>
    </>
  );
};

export default Sidebar;
