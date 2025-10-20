import React from "react";
import { destinationContent } from "../../Utils/Constant";

export const ExploreSection = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-blue-50 via-white to-blue-100 text-center">
      <h1 className="text-4xl font-bold mb-10">
        {destinationContent.title}
      </h1>

      <div className="flex flex-wrap justify-center gap-6 px-4">
        {destinationContent.destinations.map((item, idx) => (
          <div
            key={idx}
            className="relative w-64 h-64 rounded-2xl overflow-hidden shadow-lg group"
          >
            <img
              src={item.image}
              alt="destination"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white/90 text-gray-800 px-4 py-1 rounded-full font-semibold shadow">
              {item.price}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
export default ExploreSection;
