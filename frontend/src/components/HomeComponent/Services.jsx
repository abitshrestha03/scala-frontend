import ServiceCard from "./ServiceCard";
import ServiceIcon3 from "../../assets/icons/ServiceIcon3";
import ServiceIcon1 from "../../assets/icons/ServiceIcon1";
import ServiceIcon2 from "../../assets/icons/ServiceIcon2";
import ServiceIcon4 from "../../assets/icons/ServiceIcon4";
import ServiceIcon5 from "../../assets/icons/ServiceIcon5";
import ServiceIcon6 from "../../assets/icons/ServiceIcon6";
import ServicesBg from "../../assets/images/ServicesBg.png";

const Services = () => {
  const services = [
    {
      icon: <ServiceIcon1 />,
      title: (
        <h3 className="font-semibold mb-2">
          AI Enterprise <br /> Solution
        </h3>
      ),
      description:
        "Crafting high-converting websites and apps tailored to your brand with tech expertise.",
    },
    {
      icon: <ServiceIcon2 />,
      title: (
        <h3 className="font-semibold mb-2">
          Custom Product <br /> Development
        </h3>
      ),
      description:
        "Crafting high-converting websites and apps tailored to your brand with tech expertise.",
    },
    {
      icon: <ServiceIcon3 />,
      title: (
        <h3 className="font-semibold mb-2">
          Social Media <br /> Marketing
        </h3>
      ),
      description:
        "Crafting high-converting websites and apps tailored to your brand with tech expertise.",
    },
    {
      icon: <ServiceIcon4 />,
      title: <h3 className="font-semibold mb-2">Web Hosting</h3>,
      description:
        "Crafting high-converting websites and apps tailored to your brand with tech expertise.",
    },
    {
      icon: <ServiceIcon5 />,
      title: <h3 className="font-semibold mb-2">Web Development</h3>,
      description:
        "Crafting high-converting websites and apps tailored to your brand with tech expertise.",
    },
    {
      icon: <ServiceIcon6 />,
      title: <h3 className="font-semibold mb-2">UI/UX Design</h3>,
      description:
        "Crafting high-converting websites and apps tailored to your brand with tech expertise.",
    },
  ];

  return (
    <div
      className="md:px-4 lg:px-20 xl:px-32 sm:mt-20 mb-20 sm:mt-28 ms:mt-48 sm:px-8 ms:px-6 pt-8"
      style={{
        backgroundImage: `url(${ServicesBg})`, 
        backgroundSize: "cover",
        backgroundPosition: "right center"
      }}
    >
      <h2 className="text-white text-center font-semibold ms:text-3xl sm:text-5xl md:tracking-[0.04em]">
        Our Services
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 sm:gap-y-20 ms:gap-y-14 ms:mt-16 lg:mt-20">
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            icon={service.icon}
            title={service.title}
            description={service.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Services;
