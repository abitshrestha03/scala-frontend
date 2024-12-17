import WhatWeDoImage from "../../assets/images/WhatWeDoImage.png";
import Button from "../Button";
import robothandms from "../../assets/images/robothandms.png";

const WhatWeDo = () => {
  return (
    <div className="md:px-4 lg:px-20 xl:px-32 relative overflow:visible">
      {/* Section Title */}
      <h2 className="text-white text-center font-semibold ms:text-3xl sm:text-5xl md:tracking-[0.04em] mb-4">
        About Us
      </h2>

      <div className="bg-dark md:-me-4 lg:-me-20 xl:-me-32">
        <div className="ms:mx-4 md:mx-0">
          <div
            className="hidden sm:block flex flex-col items-start sm:py-12 ms:py-6 sm:px-8 ms:px-4 rounded-lg backdrop-blur-[14px] bg-gradient-to-l from-customGradient1 to-customGradient2 border border-transparent"
            style={{
              background:
                "linear-gradient(270.82deg, rgba(255, 255, 255, 0) 0.62%, rgba(255, 255, 255, 0.049) 99.26%), linear-gradient(270.82deg, rgba(0, 6, 27, 0.05) 0.62%, rgba(0, 61, 255, 0.05) 99.26%)",
              border: "1px solid navblue",
              borderImageSource:
                "linear-gradient(269.87deg, rgba(0, 61, 255, 0) 29.63%, rgba(0, 61, 255, 0.3) 98.61%)",
              borderImageSlice: 1,
              backdropFilter: "blur(14px)",
              borderRight: "none",
            }}
          >
            <h2 className="text-white ms:text-2xl ms:font-semibold sm:text-5xl sm:font-bold sm:mb-8 sm:mt-4 ms:mt-0 ms:mb-2">
              What We <span className="text-navblue">Do</span>
            </h2>
            <p className="sm:w-[60%] text-gray-300 sm:text-xl sm:font-normal sm:mb-8 ms:mb-4 sm:leading-8 sm:tracking-[0.09em] ms:text-[12px] ms:leading-[18px] ms:tracking-wider">
              At Scala-tech, we bring the power of Artificial Intelligence to
              your fingertips. From predictive analytics and process automation
              to advanced data insights, our AI services are designed to
              seamlessly integrate with your existing systems, driving
              efficiency and productivity.
            </p>
            <Button text="Learn More" />
          </div>
          <div
            className="ms:block sm:hidden flex flex-col items-start sm:py-12 ms:py-6 sm:px-8 ms:px-4 rounded-lg backdrop-blur-[14px] bg-gradient-to-l from-customGradient1 to-customGradient2 border border-transparent"
            style={{
              background: `linear-gradient(0.46deg, rgba(0, 6, 27, 0.05) 0.45%, rgba(0, 61, 255, 0.05) 99.58%)`,
              border: `0.59px solid`,
              borderImageSource: `linear-gradient(355.07deg, rgba(0, 61, 255, 0) 29.85%, rgba(0, 61, 255, 0.3) 96.6%)`,
              backdropFilter: `blur(8.2907133102417px)1`,
              borderImageSlice: 1,
            }}
          >
            <h2 className="text-white ms:text-2xl sm:text-5xl sm:font-bold sm:mb-8 sm:mt-4 ms:mt-0 ms:mb-2">
              What We <span className="text-navblue">Do</span>
            </h2>
            <p className="sm:w-[40%] md:w-[80%] text-gray-300 sm:text-xl sm:font-normal sm:mb-8 ms:mb-4 sm:leading-8 sm:tracking-[0.09em]  ms:tracking-[0.08em] ms:text-[12px] ms:leading-[18px]">
              At Scala-tech, we bring the power of Artificial Intelligence to
              your fingertips. From predictive analytics and process automation
              to advanced data insights, our AI services are designed to
              seamlessly integrate with your existing systems, driving
              efficiency and productivity.
            </p>
            <Button text="Learn More" />
          </div>
        </div>

        {/* Image positioned absolutely */}
        <img
          src={WhatWeDoImage}
          className="absolute top-1/2 mt-12 right-0 transform -translate-y-1/2 h-auto max-h-[80%] opacity-50 lg:opacity-100 hidden sm:block"
          alt="Robotic Hand"
          loading="lazy"
        />
      </div>
      <img
        src={robothandms}
        className="ms:absolute ms:-bottom-[30vh] sm:hidden sm:top-[40vh] sm:opacity-100 sm:h-[80vh] ms:h-[40vh] ms:w-[100vw] ms:left-0 ms:right-0 md:hidden ms:block"
        alt="Robotic Hand"
        loading="lazy"
      />
    </div>
  );
};

export default WhatWeDo;
