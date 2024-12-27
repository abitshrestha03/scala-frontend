import ChooseUs from "../components/ServiceComponent/ChooseUs";
import ServicesComponent from "../components/HomeComponent/Services";
import Proof from "../components/HomeComponent/Proof";
import FAQSection from "../components/HomeComponent/FAQ";
import ContactUs from "../components/HomeComponent/ContactUs";
import ScalaAdvantage from "../components/ServiceComponent/Advantage";

const Services = () => {
  return (
    <>
      <div className="flex ms:flex-col lg:flex-row lg:items-center kg:py-12 ms:px-6 md:px-8 lg:px-20 xl:px-32 ms:mt-36 mt-20 xl:ml-20 3xl:px-80">
        <h2 className="ms:text-5xl md:text-6xl font-bold text-white flex-shrink-0">
          Our <span className="text-navblue lg:block">Services</span>
        </h2>
        <hr className="border-navblue mt-4 mb-2 lg:hidden"/>

        <div className="border-l-2 border-l-navblue h-28 lg:mx-8 xl:mx-28 hidden lg:block"></div>

        <p className="s:tracking-[0.04em] ms:text-base md:leading-10 md:text-2xl md:tracking-wider text-white md:ml-2">
          <span className="text-navblue">Innovative solutions</span> designed to meet the demands of a digital world and <span className="text-navblue">empower your business</span> to thrive.
        </p>
      </div>
      <ChooseUs/>
      <ServicesComponent/>
      <Proof/>
      <ScalaAdvantage/>
      <FAQSection/>
      <ContactUs/>
    </>
  );
};

export default Services;
