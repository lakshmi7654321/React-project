import React from "react";
import { useNavigate } from "react-router-dom";
import { blogData } from "../../Utils/Constant";

const BlogSection = () => {
  const navigate = useNavigate();

  return (
    <section className="bg-gradient-to-b from-blue-50 to-white py-20 px-6 md:px-20">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h2 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-4">
          Explore Our Travel Stories
        </h2>
        <p className="text-lg md:text-xl text-blue-700">
          Discover unique destinations, travel tips, and breathtaking adventures around the world.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {blogData.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-2xl shadow-md hover:shadow-2xl transition duration-300 overflow-hidden border border-gray-100"
          >
            <img
              src={item.img}
              alt={item.title}
              className="w-full h-56 object-cover"
            />
            <div className="p-6 text-left">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-700 mb-4">{item.shortDescription}</p>

              <button
                onClick={() => navigate(`/blog/${item.id}`)}
                className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg font-semibold transition"
              >
                Read More
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BlogSection;

