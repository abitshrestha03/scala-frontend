import PropTypes from "prop-types";

const StepCard = ({ stepNumber, description }) => {
  return (
    <div
      className="bg-gray-800 border border-gray-700 px-6 py-4 text-center hover:bg-gray-700 transition flex items-center"
      style={{
        background: `linear-gradient(270.82deg, rgba(255, 255, 255, 0) 0.62%, rgba(255, 255, 255, 0.049) 99.26%),
                     linear-gradient(270.82deg, rgba(0, 56, 252, 0.05) 0.62%, rgba(0, 61, 255, 0.05) 99.26%)`,
        border: "1px solid transparent",
        borderImageSource: `linear-gradient(93.1deg, rgba(0, 61, 255, 0.6) 0%, rgba(0, 61, 255, 0) 7.04%, rgba(0, 61, 255, 0.6) 50.62%, rgba(0, 61, 255, 0) 87.81%, rgba(0, 61, 255, 0.6) 101.36%)`,
        borderImageSlice: 1,
      }}
    >
      <div className="text-navblue text-5xl font-bold">{stepNumber}</div>
      <div className="w-[1px] h-10 bg-navblue mx-4"></div> {/* Divider */}
      <p className="text-lg md:text-xl">{description}</p>
    </div>
  );
};

const OnboardingProcess = () => {
  const steps = [
    { stepNumber: "01", description: "Apply" },
    { stepNumber: "02", description: "Initial Screening" },
    { stepNumber: "03", description: "Interview Round" },
    { stepNumber: "04", description: "Onboarding" },
  ];

  return (
    <div className="text-white py-10 ms:px-6 md:px-4 lg:px-20 xl:px-32 3xl:px-80">
      <h1 className="text-center text-2xl md:text-3xl font-bold ms:mb-6 md:mb-8 lg:mb-20">
        Onboarding Process
      </h1>
      {/* Responsive Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {steps.map((step, index) => (
          <StepCard
            key={index}
            stepNumber={step.stepNumber}
            description={step.description}
          />
        ))}
      </div>
    </div>
  );
};

StepCard.propTypes = {
  stepNumber: PropTypes.string.isRequired, // stepNumber should be a string and required
  description: PropTypes.string.isRequired, // description should be a string and required
};

export default OnboardingProcess;
