import React from "react";
import { useNavigate } from "react-router-dom";

const HeroSection = ({ items }) => {
  const navigate = useNavigate();

  return (
    <div
      className="relative flex flex-col items-center justify-between text-center min-h-screen bg-cover bg-center bg-no-repeat brightness-150"
      style={{
        backgroundImage:
          'url("https://tse4.mm.bing.net/th/id/OIP.l3rCZejcJ9ljf4Bmtrw_CAHaEK?pid=Api&P=0&h=220")',
      }}
    >

      <div className="relative z-10 w-full flex flex-col items-center pt-20 px-6">
        <h1 className="text-black text-4xl md:text-6xl font-bold drop-shadow-lg">
          {items.text}
        </h1>

        {items.subtext && (
          <p className="text-black text-lg md:text-2xl mt-4 max-w-2xl drop-shadow-md">
            {items.subtext}
          </p>
        )}
      </div>

      <div className="relative z-10 flex justify-center mb-16 gap-4">
        <button
          onClick={() => navigate("/blog")}
          className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition duration-300"
        >
          {items.Button1}
        </button>

        <button
          onClick={() => navigate("/about")}
          className="bg-blue-800 hover:bg-blue-900 text-white px-8 py-3 rounded-lg font-semibold transition duration-300"
        >
          {items.Button2}
        </button>
      </div>
    </div>
  );
};

export default HeroSection;

