import React, { useRef } from "react";
import { aboutContent, testimonialsContent } from "../../Utils/Constant";

const AboutExtraSection = () => {
  const scrollRef = useRef(null);
  const scroll = (direction) => {
    const container = scrollRef.current;
    const scrollAmount = 320; 
    if (direction === "left") {
      container.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    } else {
      container.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <section className="bg-gradient-to-b from-blue-50 to-white py-24 px-6 md:px-20 relative">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-4">
          {aboutContent.sectionTitle}
        </h2>
        <p className="text-xl md:text-2xl text-blue-700 font-semibold mb-12">
          {aboutContent.sectionSubtitle}
        </p>

        <div className="text-gray-700 text-lg md:text-xl leading-relaxed space-y-6 mb-16">
          <p>{aboutContent.description1}</p>
          <p>{aboutContent.description2}</p>
          <p>{aboutContent.description3}</p>
        </div>

        <blockquote className="mt-12 text-gray-900 italic text-2xl font-semibold border-l-8 border-blue-400 bg-blue-50 pl-8 py-6 shadow-md rounded-xl max-w-4xl mx-auto">
          {aboutContent.quote}
        </blockquote>
        <div className="mt-24 text-center relative">
          <h3 className="text-3xl md:text-4xl font-bold text-black-900 mb-12">
            {testimonialsContent.title}
          </h3>
          <button
            onClick={() => scroll("left")}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white p-3 rounded-full shadow-lg hover:bg-blue-100 transition hidden md:block"
          >
            <span className="text-3xl text-blue-800 font-bold">&larr;</span>
          </button>
          <div
            ref={scrollRef}
            className="flex gap-8 overflow-x-auto px-4 py-6 scroll-smooth snap-x snap-mandatory scrollbar-hide"
          >
            {testimonialsContent.testimonials.map((t, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-80 bg-white shadow-lg rounded-2xl p-6 border border-gray-100 hover:shadow-2xl transition duration-300 snap-start"
              >
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-24 h-24 mx-auto rounded-full object-cover mb-4 border-4 border-blue-200"
                />
                <p className="text-gray-700 italic text-lg mb-4">“{t.text}”</p>
                <h4 className="font-semibold text-gray-900">{t.name}</h4>
                <p className="text-blue-700 text-sm">{t.role}</p>
              </div>
            ))}
          </div>
          <button
            onClick={() => scroll("right")}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white p-3 rounded-full shadow-lg hover:bg-blue-100 transition hidden md:block"
          >
            <span className="text-3xl text-blue-600 font-bold">&rarr;</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutExtraSection;
