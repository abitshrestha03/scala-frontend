import Founder1 from "../../assets/images/Founder1.png";
import { useRef } from "react";
// import Button from "../Button";

const Slider = () => {
  const cards = [
    {
      name: "Yugant Basnet",
      role: "CEO",
      description:
        "Scala-Tech is recognized as an innovation hub, leveraging AI and development expertise to create impactful solutions. Scala-Tech is a trusted partner for businesses seeking advanced AI solutions.",
      image: Founder1, // Replace with your image URL
    },
    // {
    //   name: "Ishan Gyawali",
    //   role: "Founder",
    //   description:
    //     "Scala-Tech is recognized as an innovation hub, leveraging AI and development expertise to create impactful solutions. Scala-Tech is a trusted partner for businesses seeking advanced AI solutions.",
    //   image: Founder2, // Replace with your image URL
    // },
    // {
    //   name: "John Doe",
    //   role: "CTO",
    //   description: "Driving innovation at scale.",
    //   image: "https://via.placeholder.com/200x300", // Replace with your image URL
    // },
  ];

  const sliderRef = useRef(null);

  const scrollToCard = (index) => {
    const slider = sliderRef.current;
    const card = slider.children[index];
    card.scrollIntoView({ behavior: "smooth", inline: "start" });
  };

  return (
    <div className="overflow-hidden md:mx-4 lg:mx-20 xl:mx-32 ms:mx-6">
      <h2 className="text-white text-center font-semibold ms:text-3xl sm:text-5xl md:tracking-[0.04em] mb-4 flex-shrink-0">
        Founder
      </h2>{" "}
      <div
        ref={sliderRef}
        className="flex ms:flex-col lg:flex-row w-full lg:space-x-6 ms:space-y-6 lg:space-y-0 lg:overflow-x-scroll scroll-smooth lg:snap-x snap-mandatory scrollbar-hide"
      >
        {cards.map((card, index) => (
          <div
            key={index}
            onClick={() => scrollToCard(index)}
            style={{
              background:
                "linear-gradient(180deg, rgba(0, 61, 255, 0.05) 0%, rgba(0, 0, 0, 0.05) 100%)",
              border: "1px solid",
              borderImageSource:
                "linear-gradient(107.07deg, rgba(0, 61, 255, 0.4) 0%, rgba(255, 255, 255, 0) 24.35%, #003DFF 28.89%, #003DFF 54.35%, rgba(255, 255, 255, 0) 85.72%, #003DFF 100.88%)",
              borderImageSlice: 1,
            }}
            className="ms:pl-4 ms:pe-0 min-w-[100%] lg:min-w-[100%] lg:max-w-[100%] bg-gray-800 text-white rounded-lg shadow-lg lg:p-6 flex flex-row lg:flex-col items-start flex-shrink-0 snap-start cursor-pointer relative overflow-y-hidden"
          >
            {/* Image on the left */}
            <div className="absolute ms:top-12 sm:top-5 -bottom-5 overflow-y-hidden ms:left-4 lg:left-20 transform translate-y-[-10px] -translate-x-[40px] flex-shrink-0">
              <img
                src={card.image}
                alt={card.name}
                className="rounded-lg shadow-lg w-56 max-w-full ms:max-w-[160px] sm:max-w-[220px] md:ml-4 md:max-w-[230px] lg:max-w-[300px] xl:max-w-[3000px] ms:object-fit lg:object-cover h-full"
              />
            </div>
            {/* Content on the right */}
            <div className="ms:ml-[30vw] md:ml-[25vw] lg:ml-[26vw] xl:ml-[20vw] 2xl:ml-[17vw] py-4 pt-8 flex-1 ms:mb-0 md:mb-4">
              <h3 className="ms:text-1xl md:text-3xl font-bold sm:mt-4">
                {card.name}
              </h3>
              <p className="ms:text-base md:text-xl text-navblue">
                {card.role}
              </p>
              <p className="ms:text-[12px] md:text-sm ms:mt-0 sm:mt-2 italic ms:leading-[18px] md:leading-[26px] ms:mb-2 sm:mb-4">
                {card.description}
              </p>
              <button
                className="ms:px-4 ms:py-1 sm:px-6 sm:py-3 text-white hover:bg-blue-700 rounded-[4px]"
                style={{
                  // Gradient background
                  background:
                    "linear-gradient(180deg, #003DFF 0%, #002086 100%)",
                  // Transparent border (just for fallback)
                  border: "1px solid transparent",
                  // Prevent overflow of inner content
                  overflow: "hidden",
                  // Box-shadow used as a border effect
                  boxShadow: `
      0 0 10px rgba(255, 255, 255, 0.25), 
      inset 0 0 5px rgba(0, 61, 255, 0.3)
    `,
                  // Smooth animation for shadow and scaling
                  transition: "box-shadow 0.3s ease, transform 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  // Add a glowing effect with an outer shadow and inner shadow
                  e.target.style.boxShadow = `
      0 0 16px rgba(0, 61, 255, 0.5), 
      inset 0 0 8px rgba(0, 61, 255, 0.4)
    `;
                  // Slightly enlarge the button
                  e.target.style.transform = "scale(1.05)";
                }}
                onMouseLeave={(e) => {
                  // Reset shadow and scaling on hover end
                  e.target.style.boxShadow = `
      0 0 10px rgba(255, 255, 255, 0.25), 
      inset 0 0 5px rgba(0, 61, 255, 0.3)
    `;
                  e.target.style.transform = "scale(1)";
                }}
              >
                Get in Touch
              </button>{" "}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
