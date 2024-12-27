import Button from "../Button";
import Web from "../../assets/images/Web.png";
import Team1Image from "../../assets/images/Team1.png";
import Team2Image from "../../assets/images/Team2.png";
import Team3Image from "../../assets/images/Team3.png";
// import FacebookImage from '../../assets/images/FacebookFooter.png';
// import InstaImage from '../../assets/images/InstaFooter.png';
// import LinkedInImage from '../../assets/images/LinkedInFooter.png';

const TeamSection = () => {
  const teamMembers = [
    {
      name: "Sara Thompson",
      role: "Product Designer",
      image: Team1Image,
      socials: {
        facebook: "#",
        instagram: "#",
        linkedin: "#",
      },
    },
    {
      name: "Tom Delong",
      role: "Software Engineer",
      image: Team2Image, 
      socials: {
        facebook: "#",
        instagram: "#",
        linkedin: "#",
      },
    },
    {
      name: "Sara Thompson",
      role: "AI Expert",
      image: Team3Image, 
      socials: {
        facebook: "#",
        instagram: "#",
        linkedin: "#",
      },
    },
  ];

  return (
    <div className="text-white py-12">
      <div className="ms:px-6 md:px-8 lg:px-20 xl:px-32 3xl:px-80 text-center">
        {/* Title */}
        <h2 className="text-4xl font-bold mb-4">Our Team</h2>
        <p className="text-gray-300 ms:mb-6 md:mb-10 lg:mb-20">Meet Our Awesome Team Members</p>

        {/* Team Member Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 mb-8 gap-4">
          {teamMembers.map((member, index) => (
            <div key={index} className="shadow-lg overflow-hidden">
              <div className="flex items-center justify-center">
                <div
                  className="relative w-full ms:h-[450px] md:h-[550px] 3xl:h-[60vh] bg-[#FFFFFFD9] shadow-lg rounded-sm overflow-hidden"
                  style={{ backdropFilter: `blur(7px)` }}
                >
                  {/* Web graphic */}
                  <img
                    src={Web}
                    alt="Web Graphic"
                    className="absolute top-0 left-0 w-full h-full object-cover"
                  />

                  {/* Person Image */}
                  <img
                    src={member.image}
                    alt="Person"
                    className="relative z-5 w-full md:h-full object-cover"
                  />

                  {/* Bottom Text with Blur Effect */}
                  <div
                    className="absolute bottom-0 w-full bg-gradient-to-t from-[#00000066] via-[#00000033] to-transparent backdrop-blur-md py-4 text-center text-white"
                    style={{
                      background: `#003DFF4D`,
                      backdropFilter: `blur(5px)`,
                    }}
                  >
                    <h2 className="text-lg font-semibold">Sara Thompson</h2>
                    <p className="text-sm">Product Designer</p>
                    <div className="flex justify-center items-center space-x-4 mt-2">
                      {/* Social Media Icons */}
                      <a href="#" className="text-xl hover:text-gray-300">
                        {/* <img src={FacebookImage} alt="" /> */}
                      </a>
                      <a href="#" className="text-xl hover:text-gray-300">
                        {/* <img src={InstaImage} alt="" /> */}
                      </a>
                      <a href="#" className="text-xl hover:text-gray-300">
                        {/* <img src={LinkedInImage} alt="" /> */}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <Button text="Visit Team Members" />
      </div>
    </div>
  );
};

export default TeamSection;
