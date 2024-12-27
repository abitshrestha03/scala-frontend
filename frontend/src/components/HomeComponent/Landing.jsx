import LandingImage from "../../assets/images/landingImage.png";
import Button from "../Button";

const Landing = () => {
  return (
    <div className="sm:px-8 md:px-8 lg:px-20 xl:px-32 flex flex-col-reverse lg:flex-row justify-center lg:justify-between items-center mt-28 ms:mt-44 lg:mt-60 ms:px-6 3xl:px-80">
      <div className="landing-contents ms:ms-2">
        <h1
          className="text-white ms:text-4xl ms:tracking-wider sm:text-6xl md:text-6xl uppercase font-bold md:mb-8  ms:mb-4 sm:mb-4 ms:text-glow md:tracking-wide md:text-center lg:text-left"
        >
          The <span className="text-navblue">Gift of AI AT</span>{" "} 
          Your Fingertips
        </h1>
        <p className="text-white md:mb-8 lg:w-[90%] ms:mb-4 font-normal md:text-base ms:text-xs ms:text-left ms:tracking-wider leading-6 md:tracking-[0.08em] sm:text-lg md:text-center lg:text-left">
          Transform your business with powerful AI-driven insights and automation. Discover the advantage of AI crafted to meet your unique goals and challenges.
        </p>
        <div className="flex md:justify-center md:mt-4 lg:justify-start lg:mt-0">
          <Button text="Learn More" />
        </div>
      </div>
      <img
        src={LandingImage}
        alt="landing-image"
        loading="lazy"
        className="h-auto max-w-full sm:h-[400px] sm:w-[500px] md:h-[524px] md:w-[604px] object-contain md:mt-[7vh] lg:mt-[-50px] sm:mr-0 lg:mr-[-50px] ms:mr-3"
      />
    </div>
  );
};

export default Landing;