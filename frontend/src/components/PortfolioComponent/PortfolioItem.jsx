import { useState } from "react";
import FeaturedProducts1 from "../../assets/images/FeaturedProducts1.png";
import FeaturedProducts2 from "../../assets/images/FeaturedProducts2.png";
import FeaturedProducts3 from "../../assets/images/FeaturedProducts3.png";

const PortfolioItem = () => {
  // State to manage active filter and items
  const [activeFilter, setActiveFilter] = useState("All");

  // Sample data for portfolio items
  const portfolioItems = [
    {
      id: 1,
      category: "AI/ML",
      title: "Branding Design Avata",
      subtitle: "Branding",
      image: FeaturedProducts1, // Replace with your image
    },
    {
      id: 2,
      category: "Web Development",
      title: "Branding Design Avata",
      subtitle: "Branding",
      image: FeaturedProducts2,
    },
    {
      id: 3,
      category: "UI/UX",
      title: "Branding Design Avata",
      subtitle: "Branding",
      image: FeaturedProducts3,
    },
    // Add more items as needed
  ];

  // Filter logic
  const filteredItems =
    activeFilter === "All"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeFilter);

  return (
    <div className="text-white py-12 ms:px-6 md:px-8 lg:px-20 xl:px-32 mb-20">
      <div className="flex whitespace-nowrap overflow-x-auto gap-2 mb-6">
          {[
            "All",
            "AI/ML",
            "Web Development",
            "UI/UX",
            "Web Hosting",
            "Social Media Marketing",
            "Scalar Package",
          ].map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`ms:px-3 ms:py-1 md:px-4 md:py-2 rounded-lg ms:text-xs md:text-sm font-semibold transition`}
              style={
                activeFilter === category
                  ? {
                      backgroundColor: "#003DFF40", // Active background
                      border: "2px solid #003DFF", // Active border
                      boxShadow: "0px 0px 13px 0px #003DFF59", // Active glow
                    }
                  : {
                      backgroundColor: "#00000012", // Inactive background
                      border: "1px solid #FFFFFFB2", // Inactive border
                    }
              }
            >
              {category}
            </button>
          ))}
      </div>

      {/* Portfolio Items Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            className="relative w-full p-4 bg-gradient-to-b from-[rgba(0,61,255,0.05)] to-[rgba(0,0,0,0.05)] 
                       border border-transparent border-image-[linear-gradient(141.19deg,rgba(0,61,255,0.75) 0%,rgba(255,255,255,0) 50.66%,rgba(0,61,255,0.75) 99.95%)] 
                       border-image-slice-[1] backdrop-blur-[17px] shadow-[0_0_3px_rgba(255,255,255,0.5)] rounded-lg overflow-hidden"
          >
            {/* Image */}
            <img
              src={item.image}
              alt={item.title}
              className="w-full object-cover rounded-lg"
            />
            {/* Content */}
            <div className="text-center mt-4">
              <h3 className="text-xl font-semibold text-white">{item.title}</h3>
              <p className="text-sm text-gray-400">{item.subtitle}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PortfolioItem;
