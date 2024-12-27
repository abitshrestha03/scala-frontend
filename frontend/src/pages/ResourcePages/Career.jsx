import WhyJoinUs from "../../components/CareerComponent/JoinUs";
import OnboardingProcess from "../../components/CareerComponent/OnBoardingProcess";
import JobOpenings from "../../components/CareerComponent/Openings";

const Career = () => {
  return (
    <>
      <div className="ms:px-6 flex flex-col lg:flex-row lg:items-center py-12 md:px-8 lg:px-20 xl:px-48 3xl:px-80 mt-28">
        <h2 className="ms:text-4xl md:text-5xl lg:text-6xl font-bold text-navblue flex-shrink-0">
            Join 
          <span className="text-white  lg:block">
           {" "} Our Team
          </span>
        </h2>

        <div className="border-l-2 border-l-navblue h-28 mx-24 hidden lg:block"></div>
        <hr className="border-navblue mt-4 mb-2 lg:hidden"/>

        <p className="ms:text-base md:text-xl lg:text-2xl ms:tracking-[0.04em] font-medium leading-[42px] tracking-[0.06em]  text-white lg:ml-4">
        <span className="text-navblue">Be part</span> of an innovative, dynamic team shaping the future of technology. <span className="text-navblue">Explore our opportunities </span>and start your journey with us.
        </p>
      </div>
      <WhyJoinUs/>
      <OnboardingProcess/>
      <JobOpenings/>
    </>
  );
};

export default Career;
