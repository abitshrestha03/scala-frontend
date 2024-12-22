import Envelope from "../assets/icons/Envelope";
import RightIcon from "../assets/icons/RightIcon";

const EmailInput = () => {
  return (
    <div
      className="flex items-center bg-[#0f172a] text-white rounded-lg shadow-md px-4 w-full max-w-md"
      style={{
        background: `#FFFFFF0D`,
        boxShadow: `0px 0.5px 4px 0px #FFFFFF40`,
        borderImageSlice: 1,
      }}
    >
      {/* Envelope Icon */}
      <Envelope className="text-gray-400 text-lg mr-3" />

      {/* Input Field */}
      <input
        type="email"
        placeholder="Enter your email address"
        className="bg-transparent text-gray-300 placeholder-gray-500 focus:outline-none flex-grow border-none text-xs py-3"
      />

      {/* Arrow Icon */}
      <button className="text-gray-400 hover:text-white transition">
        {/* <FaArrowRight className="text-lg" /> */}<RightIcon/>
      </button>
    </div>
  );
};

export default EmailInput;
