import { useState } from "react";
import ContactImage from "../../assets/images/ContactImage.png";

const ContactUs = () => {
  const [value, setValue] = useState(7560); // Initialize with a default value

  // Handle the range input change
  const handleRangeChange = (e) => {
    setValue(e.target.value);
  };
  return (
    <div className="relative min-h-screen py-8 md:px-8 lg:px-20 xl:px-32 ms:px-6">
      {/* Background Map or Design */}
      <div
        className="absolute inset-0 bg-cover bg-no-repeat opacity-100"
        style={{ backgroundImage: `url(${ContactImage})` }}
      ></div>

      {/* Main Glassmorphism Card */}
      <h2 className="text-white text-center font-semibold ms:text-3xl sm:text-5xl md:tracking-[0.04em]">Contact Us</h2>
      <div className="relative max-w-9xl grid md:grid-cols-2 gap-12 text-white rounded-lg shadow-lg flex items-center justify-center">
        {/* Left Section */}
        <div className="space-y-8 mt-16">
          <div
            className="bg-gradient-to-r from-white/5 to-transparent border border-transparent px-6 py-4"
            style={{
              borderImageSource:
                "linear-gradient(90deg, rgba(255, 255, 255, 0.5) 0%, rgba(255, 255, 255, 0) 100%)",
              borderImageSlice: 1,
            }}
          >
            <h3 className="text-xl font-semibold">Speak with our experts</h3>
            <p>
              Our Artificial Intelligence Experts are just a phone call away
            </p>
            <p className="mt-2 text-blue-400">+977-9182384758</p>
          </div>

          <div
            className="bg-gradient-to-r from-white/5 to-transparent border border-transparent px-6 py-4"
            style={{
              borderImageSource:
                "linear-gradient(90deg, rgba(255, 255, 255, 0.5) 0%, rgba(255, 255, 255, 0) 100%)",
              borderImageSlice: 1,
            }}
          >
            {" "}
            <h3 className="text-xl font-semibold">Mail Us</h3>
            <p>Send us queries or concerns and we will get back at you.</p>
            <p className="mt-2 text-blue-400">infoscalatech@gmail.com</p>
          </div>

          <div
            className="bg-gradient-to-r from-white/5 to-transparent border border-transparent px-6 py-4"
            style={{
              borderImageSource:
                "linear-gradient(90deg, rgba(255, 255, 255, 0.5) 0%, rgba(255, 255, 255, 0) 100%)",
              borderImageSlice: 1,
            }}
          >
            {" "}
            <h3 className="text-xl font-semibold">Visit Us</h3>
            <p>We welcome you to visit our office at your convenience.</p>
            <p className="mt-2 text-blue-400">Kathmandu, Nepal</p>
          </div>
        </div>

        {/* Right Section - Form */}
        <div
          className="relative bg-gradient-to-r from-black/10 to-blue-900/10 border border-transparent backdrop-blur-md space-y-6 pt-8 pb-12 px-8 mt-20"
          style={{
            background:
              "linear-gradient(129.66deg, rgba(0, 0, 0, 0.128) 1.43%, rgba(0, 61, 255, 0.096) 100%)",
            borderImageSource:
              "linear-gradient(128.92deg, rgba(255, 255, 255, 0.3) 0%, rgba(255, 255, 255, 0.3) 21.83%, rgba(0, 61, 255, 0.3) 48.33%, rgba(0, 61, 255, 0.77) 64.17%, rgba(0, 61, 255, 0.5) 100%)",
            borderImageSlice: 1,
          }}
        >
          {" "}
          <form className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full text-sm p-3 border-t-0 border-l-0 border-r-0 border-b-2 bg-transparent placeholder-white focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <input
                type="text"
                placeholder="Address"
                className="w-full text-sm p-3 border-t-0 border-l-0 border-r-0 border-b-2 bg-transparent placeholder-white focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <input
                type="email"
                placeholder="Email Address"
                className="w-full text-sm p-3 border-t-0 border-l-0 border-r-0 border-b-2 bg-transparent placeholder-white focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <input
                type="text"
                placeholder="Phone Number"
                className="w-full text-sm p-3 border-t-0 border-l-0 border-r-0 border-b-2 bg-transparent placeholder-white focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <select className="w-full text-sm p-3 border-t-0 border-l-0 border-r-0 border-b-2 bg-transparent placeholder-white text-white focus:outline-none focus:ring-2 focus:ring-blue-400">
              <option>Select Subject</option>
              <option>AI Consultation</option>
              <option>Project Inquiry</option>
              <option>Other</option>
            </select>
            <div className="space-y-2">
              <label className="block text-sm">Your Budget</label>
              <p className="text-right text-blue-700 text-sm">${value}.00</p>
              <input
                type="range"
                className="w-full bg-navblue cursor-pointer"
                min="0"
                max="10000"
                value={value}
                onChange={handleRangeChange}
                step="10"
                style={{ accentColor: "#003DFF" }}
              />
            </div>

            <textarea
              placeholder="Description"
              rows="1"
              className="w-full text-sm border-t-0 border-l-0 border-r-0 border-b-2 bg-transparent   placeholder-white focus:outline-none focus:ring-2 focus:ring-blue-400"
            ></textarea>
            <div className="flex items-start">
              <button
                type="submit"
                className="px-6 py-3 rounded-sm font-semibold self-start text-white"
                style={{
                  border: "1px solid", // 1px border
                  background:
                    "linear-gradient(180deg, rgba(0, 61, 255, 0.75) 0%, rgba(1, 56, 230, 0.75) 100%)",
                  borderImageSource:
                    "linear-gradient(89.88deg, rgba(255, 255, 255, 0) -11.69%, rgba(255, 255, 255, 0.25) 51.49%, rgba(93, 93, 93, 0.5) 107.01%)",
                  backdropFilter: "blur(17px)",
                  boxShadow:
                    "0px 0px 4px -1px #FFFFFF80, 0px 4px 8px -4px #FFFFFF40 inset, 0px -4px 8px 0px #00000040 inset",
                }}
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
