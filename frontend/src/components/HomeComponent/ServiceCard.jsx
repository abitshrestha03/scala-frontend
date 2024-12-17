import PropTypes from "prop-types";

const ServiceCard = ({ icon, title, description }) => {
  return (
    <div
      className="relative bg-gradient-to-b from-[180deg, rgba(0, 61, 255, 0.05) 0%, rgba(0, 0, 0, 0.05) 100%]  hover:from-[#003DFF50] hover:to-[180deg, rgba(0, 61, 255, 0.05) 0%, rgba(0, 0, 0, 0.05) 100%] text-white rounded-lg shadow-lg p-6 flex flex-col items-center transition-all ease-in-out duration-300"
      style={{
        // background:
        //   "linear-gradient(180deg, rgba(0, 61, 255, 0.05) 0%, rgba(0, 0, 0, 0.05) 100%)", // Initial background
        border: "1px solid transparent",
        borderImageSource:
          "linear-gradient(110.43deg, rgba(0, 61, 255, 0.4) 5.75%, rgba(255, 255, 255, 0.2) 52.42%, #003DFF 98.27%)",
        boxShadow: "0px -1px 6px 0px #FFFFFF4D",
        borderImageSlice:1,
        backdropFilter: "blur(17px)",
      }}
    >
      {/* Icon */}
      <div
        className="absolute top-[-2.2rem] left-1/2 transform -translate-x-1/2 bg-navblue rounded-full p-4 shadow-md"
        style={{ boxShadow: "0px 4px 34px 3px #003DFF80" }}
      >
        <div className="w-8 h-8 flex items-center justify-center">{icon}</div>
      </div>

      {/* Content */}
      <div className="mt-8 text-center">
        <h3 className="text-3xl font-semibold mb-4">{title}</h3>
        <p className="text-sm text-white">{description}</p>
      </div>
    </div>
  );
};

// Prop validation
ServiceCard.propTypes = {
  icon: PropTypes.node.isRequired, 
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default ServiceCard;
