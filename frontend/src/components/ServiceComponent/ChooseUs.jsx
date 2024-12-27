import Button from "../Button";
import ChooseUsImage from "../../assets/images/ChooseUs.png";

const ChooseUs = () => {
  return (
    <section className="ms:px-6 md:px-8 lg:px-20 xl:px-32 3xl:px-80 ms:-mb-[210px] md:-mb-[120px]">
      <div className="text-white py-12">
        <div className="flex flex-col lg:flex-row items-center border-2 border-solid chooseUs">
          {/* Left Section */}
          <div className="flex-[0.7] text-left z-10 px-8 py-8">
            <h2 className="ms:text-2xl md:text-4xl font-bold ms:mb-4 md:mb-8">
              Why <span className="text-navblue">Choose Us</span>?
            </h2>
            <p className="ms:text-sm md:text-lg leading-relaxed mb-6 w-[90%]">
              {/* At Scala Technology, we combine deep industry expertise with
              innovative solutions to help your business thrive. Our
              client-centric approach ensures tailored solutions that drive
              results, while our commitment to quality and continuous
              improvement guarantees success in an ever-evolving digital
              landscape. */}
              <div className="leading-relaxed">
                <span className="text-navblue">●</span> <span className="font-bold">Seamless Integration: </span>Our solutions are designed to work
                effortlessly with your existing systems, ensuring a smooth
                transition and immediate value. <br /><span className="text-navblue">●</span><span className="font-bold"> Scalable Innovation:  </span> Whether you’re a startup or a global enterprise, our services
                adapt to your needs, growing alongside your business. <br /> <span className="text-navblue">●</span><span className="font-bold"> Customer-Centric Approach:  </span>  Your success is our priority. We
                collaborate closely to deliver customized solutions that drive
                real-world impact. <div className="mb-4"></div>
              </div>
              Join the revolution and transform your business into a powerhouse of
              efficiency and productivity. <br /> At Scala Technologies,
              innovation meets execution to bring your ideas to life. <div className="mt-2 font-bold">Let’s
              build the future together.</div> 
            </p>
            {/* Button */}
            <Button text="Learn More" />
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
