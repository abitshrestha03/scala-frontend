import Journey1 from '../../assets/images/Journey1.jpg';
import Button from '../Button';

const Journey = () => {
  return (
    <div className="text-white py-12 md:px-8 lg:px-20 xl:px-32">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold md:mb-8 lg:mb-20">Our Journey to Innovation</h2>

        <div className="relative">
          <img
            src={Journey1}
            alt="Journey to Innovation"
            className="rounded-lg w-full shadow-lg ms:h-[300px] md:h-[600px]"
          />

          {/* Play Button Overlay */}
          <div className="absolute inset-0 flex items-center justify-center">
            <button className="bg-navblue w-16 h-16 md:w-28 md:h-28 flex items-center justify-center rounded-full shadow-md hover:scale-105 transition-transform">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-8 h-8 md:w-12 md:h-12 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </button>
          </div>
        </div>

        {/* Description */}
        <p className="text-gray-300 text-lg tracking-wider my-6">
          Get an inside look at the people, purpose, and technology that drive
          our <br /> mission to innovate and deliver impactful solutions worldwide.
        </p>

        <Button text="Learn More"/>
      </div>
    </div>
  );
};

export default Journey;
