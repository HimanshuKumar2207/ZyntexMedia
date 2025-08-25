import React from "react";
import { NavLink } from "react-router-dom";
import { assets } from "../../assets/assets";

const Sidebar = () => {
  return (
    <>
      <div className="flex flex-col border-r border-gray-200 min-h-full pt-6 bg-gradient-to-b from-orange-600 to-orange-500 ">
        <NavLink
          end={true}
          to="/admin"
          className={({ isActive }) =>
            `flex items-center  gap-3 py-3.5 md:px-9 md:min-w-64 cursor-pointer ${
              isActive && "bg-primary/10 border-r-4 border-blue-600"
            }`
          }
        >
          <img src={assets.add_icon} alt="" className="main-w-4 w-5 invert brightness-0" />
          <p className="hidden md:inline-block text-white font-semibold">Dashboard</p>
        </NavLink>

        <NavLink
          end={true}
          to="/admin/addBlog"
          className={({ isActive }) =>
            `flex items-center  gap-3 py-3.5 md:px-9 md:min-w-64 cursor-pointer ${
              isActive && " border-r-4 border-blue-600"
            }`
          }
        >
          <img src={assets.list_icon} alt="" className="main-w-4 w-5 invert brightness-0" />
          <p className="hidden md:inline-block text-white font-semibold">Add Blog</p>
        </NavLink>

        <NavLink
          end={true}
          to="/admin/listBlog"
          className={({ isActive }) =>
            `flex items-center  gap-3 py-3.5 md:px-9 md:min-w-64 cursor-pointer ${
              isActive && "bg-primary/10 border-r-4 border-blue-600"
            }`
          }
        >
          <img src={assets.home_icon} alt="" className="main-w-4 w-5 invert brightness-0" />
          <p className="hidden md:inline-block text-white font-semibold"> Blog Lists</p>
        </NavLink>

        <NavLink
          end={true}
          to="/admin/comments"
          className={({ isActive }) =>
            `flex items-center  gap-3 py-3.5 md:px-9 md:min-w-64 cursor-pointer ${
              isActive && "bg-primary/10 border-r-4 border-blue-600"
            }`
          }
        >
          <img src={assets.comment_icon} alt="" className="main-w-4 w-5 invert brightness-0" />
          <p className="hidden md:inline-block text-white font-semibold">Comments</p>
        </NavLink>
      </div>
    </>
  );
};

export default Sidebar;
