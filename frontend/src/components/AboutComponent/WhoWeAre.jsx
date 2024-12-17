import WhoWeAreImage from "../../assets/images/WhoWeAre.png";
import Button from "../Button";

const WhoWeAre = () => {
  return (
    <section className="ms:px-6 md:px-8 lg:px-20 xl:px-32 relative">
      <div className="text-white py-12">
        <div
          className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center border-2 border-solid ms:px-2 md:px-8 whoWeAre"
          // style={{
          //   background: `
          //     linear-gradient(270.82deg, rgba(255, 255, 255, 0) 0.62%, rgba(255, 255, 255, 0.049) 99.26%),
          //     linear-gradient(270.82deg, rgba(0, 6, 27, 0.05) 0.62%, rgba(0, 61, 255, 0.05) 99.26%)
          //   `,
          //   borderImageSource: `linear-gradient(269.87deg, rgba(255, 255, 255, 0) 29.63%, rgba(255, 255, 255, 0.3) 98.61%)`,
          //   borderImageSlice: 1, // Apply the border-image-slice
          //   backdropFilter: "blur(14px)", // Apply the backdrop blur filter
          // }}
        >
          {/* Left Section */}
          <div>
            <h2 className="text-4xl font-bold ms:pt-8 ms:pb-6 md:py-8">
              Who <span className="text-navblue">We Are</span>
            </h2>
            <p className="ms:text-sm md:text-lg md:leading-relaxed mb-6 ms:ml-2 me-4 ms:tracking-[0.08em]">
              At Scala Technology, we are dedicated to innovating and
              transforming industries with cutting-edge technology. Our team
              combines expertise, passion, and a commitment to quality to
              deliver solutions that drive growth and efficiency for businesses
              around the world.
            </p>
            {/* List of Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 ms:mb-2 md:mb-6 ms:ml-2 md:ml-0">
              <p className="flex items-center space-x-2">
                <span className="bg-navblue px-1 rounded-full text-xs text-black">
                  ✔
                </span>
                <span>Customer-Centric Solutions</span>
              </p>
              <p className="flex items-center space-x-2">
                <span className="bg-navblue px-1  rounded-full text-xs text-black">
                  ✔
                </span>
                <span>Proven Track Record</span>
              </p>
              <p className="flex items-center space-x-2">
                <span className="bg-navblue px-1  rounded-full text-xs text-black">
                  ✔
                </span>
                <span>Scalable Cloud Infrastructure</span>
              </p>
              <p className="flex items-center space-x-2">
                <span className="bg-navblue px-1  rounded-full text-xs text-black">
                  ✔
                </span>
                <span>Commitment to Innovation</span>
              </p>
              <p className="flex items-center space-x-2">
                <span className="bg-navblue px-1  rounded-full text-xs text-black">
                  ✔
                </span>
                <span>Advanced AI and Machine Learning</span>
              </p>
            </div>
            <div className="ms:mb-0 md:mb-4 ms:ml-2 md:ml-0">
              <Button text="Get Started" />
            </div>
          </div>

          {/* Right Section */}
          {/* Image */}
          <div className="flex justify-end items-center lg:h-full lg:w-full">
            <img
              src={WhoWeAreImage}
              alt="Team"
              className="rounded-lg shadow-lg sm:h-[100vh] ms:h-[40vh] ms:w-[100vw] lg:h-[70vh]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
