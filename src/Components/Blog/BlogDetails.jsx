import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { blogData } from "../../Utils/Constant";

const BlogDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const blog = blogData.find((item) => item.id === Number(id));

  if (!blog) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-red-100 to-red-200">
        <h2 className="text-4xl font-bold text-red-700">Blog Not Found</h2>
      </div>
    );
  }

  return (
    <section className="w-full min-h-screen bg-gradient-to-b from-gray-50 to-blue-50 flex justify-center py-16 px-4 font-sans">
    
      <div className="bg-white shadow-2xl rounded-3xl w-full max-w-6xl p-12 space-y-12">
   
        <h1 className="text-5xl md:text-6xl font-extrabold text-gray-800 text-center">
          {blog.title}
        </h1>

        <div className="w-full h-96 md:h-[500px] rounded-xl overflow-hidden">
          <img
            src={blog.img + "?auto=format&fit=crop&w=1600&q=80"}
            alt={blog.title}
            className="w-full h-full object-cover"
          />
        </div>

        <p className="text-xl md:text-2xl text-gray-800 leading-relaxed text-center">
          {blog.shortDescription}
        </p>

        <div className="space-y-6 text-xl md:text-2xl text-gray-800 leading-relaxed">
          <p>{blog.fullContent.slice(0, 300)}</p>
          <p>{blog.fullContent.slice(300, 600)}</p>
          <p>{blog.fullContent.slice(600)}</p>
        </div>

   
        <div className="bg-gray-100 border-l-4 border-blue-500 rounded-xl p-8 shadow-md">
          <h3 className="text-3xl md:text-4xl font-semibold mb-6 text-center text-gray-800">
            Quick Highlights
          </h3>
          <ul className="list-disc list-inside space-y-3 text-xl md:text-2xl">
            {blog.highlights.map((highlight, index) => (
              <li key={index}>{highlight}</li>
            ))}
          </ul>
        </div>

        {blog.readMore && (
          <div className="bg-gray-100 rounded-xl p-8 shadow-inner text-xl md:text-2xl leading-relaxed text-gray-800">
            {blog.readMore}
          </div>
        )}

        <div className="flex justify-center">
          <button
            onClick={() => navigate("/blogs")}
            className="bg-blue-700 text-white px-12 py-4 rounded-full text-xl md:text-2xl font-semibold shadow-lg hover:bg-blue-800 transition transform hover:scale-105"
          >
            Back to Blogs
          </button>
        </div>
      </div>
    </section>
  );
};

export default BlogDetail;
