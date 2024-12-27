import Button from "../Button";

const ScalaAdvantage = () => {
  return (
    <div className="text-white py-12">
      <h2 className="text-4xl font-bold text-center ms:mb-6 lg:mb-20">
        The Scala Advantage
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 ms:px-6 md:px-4 lg:px-20 xl:px-32 3xl:px-80">
        {[
          { number: "01", text: "Expertise in Advanced Technologies" },
          { number: "02", text: "Customized Solutions" },
          { number: "03", text: "Client-Centric Approach" },
          { number: "04", text: "Proven Track Record" },
          { number: "05", text: "Commitment to Innovation" },
          { number: "06", text: "Comprehensive Support" },
        ].map((item, index) => (
          <div
            key={index}
            className="bg-gray-800 border border-gray-700 p-6 text-center hover:bg-gray-700 transition flex items-center"
            style={{
              background: `linear-gradient(270.82deg, rgba(255, 255, 255, 0) 0.62%, rgba(255, 255, 255, 0.049) 99.26%),
                           linear-gradient(270.82deg, rgba(0, 56, 252, 0.05) 0.62%, rgba(0, 61, 255, 0.05) 99.26%)`,
              border: "1px solid transparent",
              borderImageSource: `linear-gradient(93.1deg, rgba(0, 61, 255, 0.6) 0%, rgba(0, 61, 255, 0) 7.04%, rgba(0, 61, 255, 0.6) 50.62%, rgba(0, 61, 255, 0) 87.81%, rgba(0, 61, 255, 0.6) 101.36%)`,
              borderImageSlice: 2,
            }}
          >
            <div className="text-navblue text-3xl font-bold">{item.number}</div>
            <div className="w-[1px] h-10 bg-navblue mx-4"></div> {/* Divider */}
            <p>{item.text}</p>
          </div>
        ))}
      </div>
      <div className="text-center mt-12">
        <Button text="Get Started" />
      </div>
    </div>
  );
};

export default ScalaAdvantage;

