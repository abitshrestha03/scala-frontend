import Button from "../Button";
import ChooseUsImage from "../../assets/images/ChooseUs.png";

const ChooseUs = () => {
  return (
    <section className="ms:px-6 md:px-8 lg:px-20 xl:px-32 ms:-mb-[210px] md:-mb-[120px]">
      <div className="text-white py-12">
        <div
          className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center border-2 border-solid chooseUs"
        >
          {/* Left Section */}
          <div className="flex-[0.7] text-left z-10 px-8 py-8">
            <h2 className="ms:text-2xl md:text-4xl font-bold ms:mb-4 md:mb-8">
              Why <span className="text-navblue">Choose Us</span>?
            </h2>
            <p className="ms:text-sm md:text-lg leading-relaxed mb-6 w-[90%]">
              At Scala Technology, we combine deep industry expertise with
              innovative solutions to help your business thrive. Our
              client-centric approach ensures tailored solutions that drive
              results, while our commitment to quality and continuous
              improvement guarantees success in an ever-evolving digital
              landscape.
            </p>
            {/* Button */}
            <Button text="Get Started" />
          </div>

          {/* Right Section */}
          <div className="flex-[0.3] h-full ms:px-6">
            <img
              src={ChooseUsImage}
              alt="Team"
              className="h-full w-full rounded-lg object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChooseUs;
