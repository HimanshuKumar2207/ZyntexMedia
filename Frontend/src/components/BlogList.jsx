import React from "react";
import { blog_data, blogCategories } from "../assets/assets";
import { useState } from "react";
import { motion } from "framer-motion";
import BlogCards from "./BlogCards";
import { useAppContext } from "../context/AppContext";

const BlogList = () => {
  const [menu, setMenu] = useState("All");
  const { blogs, input } = useAppContext();

  // const filteredBlogs = () => {
  //   if (input === " ") {
  //     return blogs;
  //   }
  //   return blogs.filter(
  //     (blog) =>
  //       blog.title.toLowerCase().includes(input.toLowerCase()) ||
  //       blog.category.toLowerCase().includes(input.toLowerCase())
  //   );
  // };

  const filteredBlogs = () => {
    if (!blogs || blogs.length === 0) return [];

    if (input.trim() === "") return blogs;

    return blogs.filter(
      (blog) =>
        blog.title.toLowerCase().includes(input.toLowerCase()) ||
        blog.category.toLowerCase().includes(input.toLowerCase())
    );
  };

  return (
    <>
      <div>
        <div className="flex justify-center gap-4 sm:gap-8 my-10 relative ">
          {blogCategories.map((item) => (
            <motion.div key={item} className="relative">
              <button
                className={`cursor-pointer text-gray-500 ${
                  menu === item && `text-white px-4 pt-0.5`
                }`}
                onClick={() => setMenu(item)}
              >
                {item}
                {menu === item && (
                  <motion.div
                    layoutId="underline"
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                    className="absolute left-0 right-0 top-0 h-7 -z-1 bg-gradient-to-r from-orange-500 to-orange-400 rounded-full"
                  ></motion.div>
                )}
              </button>
            </motion.div>
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8 mb-24 mx-8 sm:mx-16 xl:mx-40">
          {/* blog cards */}
          {filteredBlogs()
            .filter((blog) => (menu === "All" ? true : blog.category === menu))
            .map((blog) => (
              <BlogCards key={blog._id} blog={blog} />
            ))}
        </div>
      </div>
    </>
  );
};

export default BlogList;
