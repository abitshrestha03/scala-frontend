import FeaturedProducts1 from "../../assets/images/FeaturedProducts1.png";
import FeaturedProducts2 from "../../assets/images/FeaturedProducts2.png";
import Button from "../Button";
const FeaturedProjects = () => {
  return (
    <div className="md:px-4 lg:px-20 xl:px-32 py-12 text-center ms:px-6 3xl:px-80">
      <h2 className="text-white text-center font-semibold ms:text-3xl sm:text-5xl md:tracking-[0.04em] mb-4">Featured Projects</h2>
      <p className="text-lg text-gray-400 mt-2">
        Take a look at our latest projects
      </p>

      <div className="flex md:flex-row sm:flex-col items-center justify-center  flex-wrap gap-8 ms:mt-6 md:mt-10 lg:mt-20 mb-4">
        {/* Project Card */}
        <div
          className="relative w-[588px] p-4  bg-gradient-to-b from-[rgba(0,61,255,0.05)] to-[rgba(0,0,0,0.05)] 
          border border-transparent border-image-[linear-gradient(141.19deg,rgba(0,61,255,0.75) 0%,rgba(255,255,255,0) 50.66%,rgba(0,61,255,0.75) 99.95%)] 
          border-image-slice-[1] backdrop-blur-[17px] shadow-[0_0_3px_rgba(255,255,255,0.5)]"
        >
          <img
            src={FeaturedProducts1}
            alt="Project Thumbnail"
            className="w-full rounded-lg"
          />
          <h3 className="text-xl font-semibold text-white">
            Branding Design Avata
          </h3>
          <p className="text-sm text-gray-400">Branding</p>
        </div>

        {/* Duplicate the card for more projects */}
        <div
          className="relative w-[588px] p-4  bg-gradient-to-b from-[rgba(0,61,255,0.05)] to-[rgba(0,0,0,0.05)] 
          border border-transparent border-image-[linear-gradient(141.19deg,rgba(0,61,255,0.75) 0%,rgba(255,255,255,0) 50.66%,rgba(0,61,255,0.75) 99.95%)] 
          border-image-slice-[1] backdrop-blur-[17px] shadow-[0_0_3px_rgba(255,255,255,0.5)]"
        >
          <img
            src={FeaturedProducts2}
            alt="Project Thumbnail"
            className="w-full rounded-lg"
          />
          <h3 className="text-xl font-semibold text-white">
            Branding Design Avata
          </h3>
          <p className="text-sm text-gray-400">Branding</p>
        </div>
      </div>

      <Button text="View All Products"/>
    </div>
  );
};

export default FeaturedProjects;
