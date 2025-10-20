import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import BlogSection from "../Components/Blog/BlogSection";
import BlogDetails from "../Components/Blog/BlogDetails";

const BlogPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    if (isLoggedIn !== "true") {
      alert("Please login to access the blog page.");
      navigate("/login");
    }
  }, [navigate]);

  return (
    <>
      <BlogSection />
      <BlogDetails />
    </>
  );
};

export default BlogPage;

