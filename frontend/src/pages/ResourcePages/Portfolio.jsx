import Companies from "../../components/HomeComponent/Companies";
import ContactUs from "../../components/HomeComponent/ContactUs";
import Testimonials from "../../components/HomeComponent/Testimonials";
import PortfolioItem from "../../components/PortfolioComponent/PortfolioItem";

const Portfolio = () => {
  return (
    <>
      <div className="ms:px-6 flex ms:flex-col lg:flex-row lg:items-center lg:py-12 md:px-8 lg:px-20 xl:px-32 ms:mt-36 lg:mt-20 lg:ml-20">
        <h2 className="ms:text-5xl text-6xl font-bold text-white flex-shrink-0">
          Our{" "}
          <span className="text-navblue">
            Work
          </span>
        </h2>
        <hr className="border-navblue mt-4 mb-2 lg:hidden"/>


        <div className="border-l-2 border-l-navblue h-28 lg:mx-16 xl:mx-24 hidden lg:block"></div>

        <p className="ms:text-base ms:tracking-[0.04em] leading-10 sm:text-2xl tracking-wider text-white">
        See how we’ve helped <span className="text-navblue">businesses achieve success</span> through tailored technology solutions and creative problem-solving.
        </p>
      </div>
      <PortfolioItem/>
      <Companies/>
      <Testimonials/>   
      <ContactUs/>
    </>
  );
};

export default Portfolio;
