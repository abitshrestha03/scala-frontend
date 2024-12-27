import { useState } from "react";
import JoinUsImage1 from "../../assets/images/JoinUs01.jpg";
import JoinUsImage2 from "../../assets/images/JoinUs02.jpg";
import JoinUsImage3 from "../../assets/images/JoinUs3.png";
import Button from "../../components/Button";
import JoinUsIcon1 from "../../assets/icons/JoinUsIcon1";
import JoinUsIcon2 from "../../assets/icons/JoinUsIcon2";
import JoinUsIcon3 from "../../assets/icons/JoinUsIcon3";
import JoinUsIcon4 from "../../assets/icons/JoinUsIcon4";
import JoinUsIcon5 from "../../assets/icons/JoinUsIcon5";

const WhyJoinUs = () => {
  // Images array
  const images = [JoinUsImage1, JoinUsImage2, JoinUsImage3];


  // State to manage the large image (default is the first thumbnail)
  const [largeImage, setLargeImage] = useState(images[0]);

  return (
    <div className="bg-dark-blue text-white ms:px-6 md:px-8 lg:px-20 xl:px-32 3xl:px-80">
      <div
        className="flex flex-col md:flex-row ms:gap-y-8 joinUs"
      >
        {/* Left Section */}
        <div className="md:w-1/2 ms:ml-4 ms:mt-6 md:ml-8 lg:ml-8 xl:ml-12 md:mt-12">
          <h2 className="ms:text-2xl md:text-4xl lg:text-5xl font-bold ms:mb-4 md:mb-8 xl:mb-12">
            Why <span className="text-navblue">Join Us?</span>
          </h2>
          <ul className="space-y-4 ms:mb-2 ms:ml-2 md:text-md lg:text-lg md:mb-4 md:ml-4 lg:ml-4 xl:ml-8">
            <li className="flex items-center gap-4">
              <span className="md:text-2xl w-9 h-9 flex items-center justify-center rounded-full bg-navblue">
                <JoinUsIcon1 />
              </span>
              <p className="tracking-wider">Health & Wellness</p>
            </li>
            <li className="flex items-center gap-4">
              <span className="text-2xl w-9 h-9 flex items-center justify-center rounded-full bg-navblue">
                <JoinUsIcon2 />
              </span>
              <p className="tracking-wider">Flexible Work Hours</p>
            </li>
            <li className="flex items-center gap-4">
              <span className="text-2xl w-9 h-9 flex items-center justify-center rounded-full bg-navblue">
                <JoinUsIcon3 />
              </span>
              <p className="tracking-wider">Professional Environment</p>
            </li>
            <li className="flex items-center gap-4">
              <span className="text-2xl w-9 h-9 flex items-center justify-center rounded-full bg-navblue">
                <JoinUsIcon4 />
              </span>
              <p className="tracking-wider">Remote Work Opportunities</p>
            </li>
            <li className="flex items-center gap-4">
              <span className="text-2xl w-9 h-9 flex items-center justify-center rounded-full bg-navblue">
                <JoinUsIcon5 />
              </span>
              <p className="tracking-wider">Team Events & Activities</p>
            </li>
          </ul>
          <div className="ml-8 mt-8">
            <Button text="View Open Positions" />
          </div>
        </div>

        {/* Right Section */}
        <div className="ms:ml-0 ms:px-4 ms:mb-4 lg:w-[70%] md:ml-28 lg:py-4">
          {/* Large Image */}
          <div className="">
            <img
              src={largeImage}
              alt="Large display"
              className="w-full ms:h-[30vh] md:mt-4 md:h-[45vh] rounded-md"
            />
          </div>
          {/* Smaller Images */}
          <div className="grid grid-cols-3 ms:gap-2 md:gap-2">
            {images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Thumbnail ${index + 1}`}
                className="cursor-pointer rounded-md hover:opacity-80 transition md:h-[20vh] mt-2"
                onClick={() => setLargeImage(img)} // Update the large image on click
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyJoinUs;
