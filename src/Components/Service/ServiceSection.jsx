import React from "react";
import { useNavigate } from "react-router-dom";
import { serviceData } from "../../Utils/Constant";

const ServiceSection = () => {
  const navigate = useNavigate();

  const handleNavigate = (id) => {
    navigate(`/service/${id}`);
  };

  return (
    <section className="bg-gradient-to-b from-blue-50 to-white py-28 px-8 md:px-24 text-center">
      <div className="mb-20">
        <h3 className="text-blue-700 font-semibold uppercase tracking-widest text-lg md:text-xl">
          What We Serve
        </h3>
        <h2 className="text-4xl md:text-6xl font-extrabold text-gray-900 mt-4 leading-snug">
          Top Values For You
        </h2>
        <p className="text-gray-600 mt-6 max-w-3xl mx-auto text-lg md:text-xl leading-relaxed">
          Explore the best travel experiences — from seamless bookings to
          personalized packages and 24/7 support.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {serviceData.map((item, index) => (
          <div
            key={index}
            className="bg-white shadow-xl hover:shadow-3xl rounded-3xl p-10 transition duration-500 border border-gray-100 hover:scale-105"
          >
            <div className="flex justify-center mb-8">
              <img
                src={item.icon}
                alt={item.title}
                className="w-24 h-24 object-contain drop-shadow-md"
              />
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              {item.title}
            </h3>

            <p className="text-gray-600 text-base md:text-lg mb-6 leading-relaxed">
              {item.description}
            </p>

            <p className="text-blue-700 font-semibold text-lg mb-4">
              Starting from ${item.price}
            </p>

            <button
              onClick={() => handleNavigate(index)}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-semibold text-lg transition duration-300"
            >
              {item.buttonText}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServiceSection;
