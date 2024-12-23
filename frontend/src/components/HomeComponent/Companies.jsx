import MicrosoftLogo from "../../assets/images/MicrosoftLogo.png";
import GoogleLogo from "../../assets/images/GoogleLogo.png";
import MetaLogo from "../../assets/images/MetaLogo.png";
import AmazonLogo from "../../assets/images/AmazonLogo.png";
import CompaniesLogo from "../CompaniesLogo";

const logos = [
  { src: MicrosoftLogo, alt: "Microsoft" },
  { src: GoogleLogo, alt: "Google" },
  { src: MetaLogo, alt: "Meta" },
  { src: AmazonLogo, alt: "Amazon" },
];

const Companies = () => {
  return (
    <div className="ms:mb-12 ms:mt-16 md:px-4 md:mt-4 lg:px-20 lg:mt-0 xl:px-32">
      <h2 className="text-white text-center font-semibold ms:text-3xl sm:text-5xl md:tracking-[0.04em] ms:-mt-6 md:mt-8">
        Trusted By
      </h2>
      <span className="block ms:text-sm sm:text-xl md:tracking-[0.08em] text-center text-white">
        Top Companies
      </span>
      <div className="flex 2xl:mr-16 overflow-hidden ms:space-x-4 sm:space-x-8 md:space-x-12 lg:space-x-16 ms:mt-4 md:mt-20 w-full">
        <div className="flex ms:space-x-4 md:space-x-8 lg:space-x-16 animate-scroll">
          {logos.map((logo, index) => (
            <>
              <CompaniesLogo
                key={index}
                src={logo.src}
                alt={logo.alt}
                className="hidden md:block"
              />
            </>
          ))}
        </div>
        <div
          className="flex ms:space-x-4 md:space-x-8 lg:space-x-16 animate-scroll"
          aria-hidden="true"
        >
          {logos.map((logo, index) => (
            <>
              <CompaniesLogo
                key={index}
                src={logo.src}
                alt={logo.alt}
                className="hidden md:block"
              />
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Companies;
