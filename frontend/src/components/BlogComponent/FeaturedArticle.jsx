import FeaturedArticleImage from "../../assets/images/FeaturedArticle1.png";
import Button from "../Button";

const FeaturedArticle = () => {
  return (
    <div
      style={{
        background:
          "linear-gradient(90deg, rgba(0, 0, 0, 0.05) 0%, rgba(0, 57, 255, 0.1) 100%)",
        border: "1px solid transparent", // Border must be explicitly defined
        borderImageSource:
          "linear-gradient(99.58deg, #FFFFFF 0%, rgba(198, 212, 255, 0) 19.84%, rgba(0, 61, 255, 0.5) 101.35%)",
        borderImageSlice: 1, // Ensures the gradient spans the border
        boxShadow: "0px 0px 14px 0px #003DFF3D",
      }}
      className="ms:mx-6 md:mx-8 lg:mx-20 xl:mx-32 3xl:mx-80 py-10 rounded-lg mt-4"
    >
      <div className="rounded-xl">
        <div className="flex flex-col lg:flex-row items-center gap-6 px-8">
          {/* Left Content */}
          <div className="text-center md:text-left flex-1">
            <p className="text-sm text-gray-300 uppercase tracking-wide mb-2">
              Featured Article
            </p>
            <h2 className="text-3xl font-semibold text-white leading-tight mb-4">
              Scala Tech Services: Expertise to Build Scalable Futures
            </h2>
            <p className="text-gray-400 mb-6">
              This is a featured article - the most important piece of content.
              This is a short description of the featured article. You can check
              out more articles below.
            </p>
            <Button text="Read More" />
          </div>
          {/* Right Image */}
          <div className="flex justify-end">
            <div className="flex-1">
              <img
                src={FeaturedArticleImage}
                alt="AI Cube Illustration"
                className="rounded-sm shadow-md"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedArticle;
