const Landing = () => {
    return (
      <div className="text-white py-8 md:px-4 lg:px-20 xl:px-32">
        <div className="max-w-6xl flex items-center py-12">
          <h2 className="text-6xl font-bold text-navblue flex-shrink-0">
            About <span className="text-white">Us</span>
          </h2>
  
          <div className="border-l-2 border-l-navblue h-28 mx-24"></div>
  
          <p className="leading-10 text-2xl tracking-wider">
            <span className="text-navblue font-normal">Innovative solutions</span>{" "}
            designed to meet the <br />
            demands of a digital world and{" "}
            <span className="text-navblue font-normal">
              empower your <br /> business
            </span>{" "}
            to thrive.
          </p>
        </div>
      </div>
    );
  };
  
  export default Landing;