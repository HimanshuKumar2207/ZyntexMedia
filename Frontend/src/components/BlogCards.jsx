import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const BlogCards = ({ blog }) => {
  const { title, description, category, image, _id } = blog;
  const navigate = useNavigate();

  return (
    <motion.div
      onClick={() => navigate(`/blog/${_id}`)}
      whileHover={{
        scale: 1.05,
        rotateX: 3,
        rotateY: 3,
        boxShadow: "0 20px 30px rgba(0,0,0,0.2)",
      }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="cursor-pointer bg-white/30 backdrop-blur-lg border border-white/20 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transform transition-all duration-300"
    >
      <img
        src={image}
        alt="blog thumbnail"
        className="w-full h-44 object-cover transition-transform duration-300 hover:scale-105"
      />

      <div className="p-4">
        <span className="inline-block bg-gradient-to-r from-blue-600 to-blue-500 text-white text-[10px] font-semibold px-3 py-1 rounded-full shadow-sm mb-3">
          {category}
        </span>
        <h3 className="text-md font-semibold text-gray-800 mb-2">{title}</h3>
        <p
          className="text-xs text-gray-600 leading-relaxed"
          dangerouslySetInnerHTML={{
            __html: description.slice(0, 100) + "...",
          }}
        ></p>
      </div>
    </motion.div>
  );
};

export default BlogCards;
