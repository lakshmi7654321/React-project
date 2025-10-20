import React from "react";
import { useNavigate } from "react-router-dom";
import { travelGallery, newFeatureSection } from "../../Utils/Constant";

const TravelSection = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-gray-50 text-gray-800">
     
      <section className="py-20 px-6 md:px-12 flex flex-col items-center gap-8 bg-gradient-to-r from-blue-50 via-white to-blue-100 ">

        <div className="flex justify-center w-600px h-400px ">
          <img
            src={newFeatureSection.img}
            alt="Adventure Feature"
            className="w-full h-auto rounded-3xl shadow-xl object-cover transform hover:scale-105 transition"
          />
        </div>

        <div className="text-center max-w-3xl space-y-6">
          <h2 className="text-3xl md:text-5xl font-extrabold text-black">
            {newFeatureSection.title}
          </h2>
          <p className="text-md md:text-lg text-black">
            {newFeatureSection.text}
          </p>
          <button
            onClick={() => navigate("/service")}
            className="bg-blue-400 text-gray-800 font-bold px-10 py-3 rounded-full shadow-lg hover:bg-yellow-300 hover:scale-105 transition transform text-md"
          >
            {newFeatureSection.buttonText}
          </button>
        </div>
      </section>

      <section className="py-20 px-6 md:px-12 text-center bg-gradient-to-r from-blue-50 via-white to-blue-100">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-12 text-black-700">
          Travel Gallery
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {travelGallery.map((img, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-xl shadow-lg transform transition hover:scale-105"
            >
              <img
                src={img}
                alt={`Travel ${index + 1}`}
                className="w-full h-64 md:h-56 object-cover"
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default TravelSection;
