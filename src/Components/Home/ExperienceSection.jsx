import React from "react";
import { experienceContent } from "../../Utils/Constant";

export const ExperienceSection = () => {
  return (
    <section className="py-24 bg-gradient-to-r from-blue-50 via-white to-blue-100">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 items-center gap-16">
        <div>
          <h3 className="text-blue-600 text-lg font-semibold mb-3 uppercase tracking-wide">
            {experienceContent.subtitle || "Our Experience"}
          </h3>

          <h1 className="text-6xl md:text-5xl font-extrabold leading-tight mb-6 text-black-800">
            {experienceContent.title}
          </h1>

          <p className="text-black-600 text-lg leading-relaxed mb-10">
            {experienceContent.description}
          </p>

          <div className="flex flex-wrap gap-12 mt-8">
            {experienceContent.stats.map((stat, i) => (
              <div key={i} className="text-center">
                <h2 className="text-4xl font-bold text-blue-700 mb-2">
                  {stat.number}
                </h2>
                <p className="text-gray-700 text-base font-medium">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="text-center">
          <img
            src={experienceContent.image}
            alt="support"
            className="w-full max-w-md mx-auto rounded-3xl shadow-2xl hover:scale-105 transition-transform duration-500"
          />
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
