import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { serviceData } from "../../Utils/Constant";

const ServiceDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const service = serviceData[id];

  if (!service) {
    return (
      <div className="text-center py-40 bg-gradient-to-br from-red-100 to-red-300 min-h-screen">
        <h2 className="text-3xl font-bold text-red-700">Service Not Found</h2>
        <button
          onClick={() => navigate("/service")}
          className="mt-6 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full text-lg font-semibold transition"
        >
          Back to Services
        </button>
      </div>
    );
  }

  return (
    <section className="py-24 px-6 md:px-24 min-h-screen relative bg-gradient-to-br from-blue-100 via-white to-blue-50 flex flex-col items-center">
      {/* Decorative background shapes */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute w-96 h-96 bg-blue-300 rounded-full -top-32 -left-32 opacity-30 animate-pulse"></div>
        <div className="absolute w-96 h-96 bg-purple-300 rounded-full -bottom-32 -right-32 opacity-30 animate-pulse"></div>
      </div>

      {/* Title */}
      <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-6 text-center">
        {service.title}
      </h1>

      {/* Icon */}
      <div className="mb-8">
        <img
          src={service.icon}
          alt={service.title}
          className="w-40 h-40 md:w-48 md:h-48 mx-auto object-contain drop-shadow-2xl transition-transform hover:scale-110"
        />
      </div>

      {/* Description */}
      <p className="text-gray-700 text-xl md:text-2xl max-w-3xl mx-auto mb-10 leading-relaxed text-center">
        {service.description}
      </p>

      {/* Features */}
      <div className="bg-white bg-opacity-80 backdrop-blur-md shadow-lg rounded-3xl p-8 max-w-3xl mx-auto mb-8">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">Features:</h2>
        <ul className="list-disc list-inside text-left text-gray-700 text-lg md:text-xl space-y-2">
          {service.features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
      </div>

      {/* Benefits & Duration */}
      <div className="max-w-3xl mx-auto mb-8 text-center">
        <p className="text-gray-800 text-xl md:text-2xl mb-4">
          <span className="font-semibold">Benefits:</span> {service.benefits}
        </p>
        <p className="text-gray-800 text-xl md:text-2xl mb-8">
          <span className="font-semibold">Duration:</span> {service.duration}
        </p>
      </div>

      {/* Price as Button */}
      <button className="bg-green-600 hover:bg-green-700 text-white text-2xl md:text-3xl font-bold px-10 py-4 rounded-full mb-8 shadow-lg transition transform hover:scale-105">
        ${service.price}
      </button>

      {/* Back Button */}
      <div>
        <button
          onClick={() => navigate("/service")}
          className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full text-lg md:text-xl font-semibold shadow-lg transition transform hover:scale-105"
        >
          Back to Services
        </button>
      </div>
    </section>
  );
};

export default ServiceDetails;
