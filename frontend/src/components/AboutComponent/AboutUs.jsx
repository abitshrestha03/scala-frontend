const AboutUs = () => {
  return (
    <div className="text-white ms:px-6 sm:py-8 md:px-8 lg:px-20 xl:px-32 ms:mt-36 lg:mt-16 lg:ml-12">
      <div className="flex ms:flex-col lg:flex-row lg:items-center lg:py-12">
        <h2 className="ms:text-5xl sm:text-6xl font-bold text-navblue flex-shrink-0">
          About <span className="text-white lg:block">Us</span>
        </h2>

        <div className="border-l-2 border-l-navblue h-28 lg:mx-16 xl:mx-28 hidden lg:block"></div>
        <hr className="border-navblue mt-4 mb-2 lg:hidden"/>

        <p className="leading-10 ms:text-base sm:text-2xl ms:tracking-[0.04em] sm:tracking-wider">
          <span className="text-navblue font-normal">Innovative solutions</span>{" "}
          designed to meet the
          demands of a digital world and{" "}
          <span className="text-navblue font-normal">
            empower your business
          </span>{" "}
          to thrive.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
