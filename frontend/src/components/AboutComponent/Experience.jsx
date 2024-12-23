import ExperienceIcon1 from "../../assets/icons/ExperienceIcon1";
import ExperienceIcon2 from "../../assets/icons/ExperienceIcon2";
import ExperienceIcon3 from "../../assets/icons/ExperienceIcon3";
const Experience = () => {
  const items = [
    {
      title: "Our Vision",
      icon: ExperienceIcon1, 
      description:
        "Our vision is to lead the future of technology by creating transformative, reliable solutions that make a positive impact on industries worldwide. We aim to be a trusted partner in technological advancement and sustainable growth.",
    },
    {
      title: "Our Mission",
      icon: ExperienceIcon2, 
      description:
        "Our mission is to empower businesses through innovative technology solutions that drive efficiency, growth, and resilience. We are committed to delivering exceptional, tailored services that align with our clients' goals and elevate their operations.",
    },
    {
      title: "Our Values",
      icon: ExperienceIcon3, 
      description:
        "At Scala Technology, our core values of integrity, collaboration, and continuous innovation guide our work. We prioritize quality, transparency, and a commitment to excellence in every project, ensuring our clients' success and satisfaction.",
    },
  ];

  return (
    <section className="text-white py-12 md:px-8 lg:px-20 xl:px-32">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-20">Experience Our Story</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-6 gap-y-14">
          {items.map((item, index) => (
            <div
              key={index}
              className="relative p-6 shadow-lg transform hover:scale-105 transition-transform rounded-lg border border-bg-[navblue]"
              style={{
                background: `linear-gradient(180deg, rgba(255, 255, 255, 0.05) 0%, rgba(0, 0, 0, 0.05) 100%), linear-gradient(1.43deg, rgba(0, 6, 27, 0.05) 1.31%, rgba(0, 61, 255, 0.05) 98.88%)`,
                borderImageSource: `linear-gradient(110.43deg, rgba(0, 61, 255, 0.3) 5.75%, rgba(0, 61, 255, 0.2) 52.42%, rgba(0, 61, 255, 0.14) 98.27%)`,
                borderImageSlice: 1,
              }}
            >
              <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-navblue w-16 h-16 flex items-center justify-center rounded-full">
                {/* SVG Icon with fixed size */}
                <item.icon className="w-8 h-8 text-white max-w-full max-h-full" />
              </div>
              {/* Card Content */}
              <h3 className="text-xl font-semibold mt-4 mb-4">{item.title}</h3>
              <p className="text-gray-300 text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
