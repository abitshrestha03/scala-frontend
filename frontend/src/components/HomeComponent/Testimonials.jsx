import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css"; // Default Splide CSS
import TestimonialImage1 from "../../assets/images/Testimonial1.png";
import TestimonialImage2 from "../../assets/images/Testimonial2.png";
import TestimonialImage3 from "../../assets/images/Testimonial3.png";

const testimonials = [
  {
    name: "Julia Roberts",
    title: "Senior Artist",
    quote:
      '"This is a customer quote. This person has the following opinion on the following feature and is giving their respective view. Social proof section is important and there are many customers with different views. This is a section where all the people are transparent with their views and ideology."',
    image: "https://via.placeholder.com/100",
    rating: 5,
  },
  {
    name: "Dave Free",
    title: "AI Engineer",
    quote:
      '"This is a customer quote. This person has the following opinion on the following feature and is giving their respective view. Social proof section is important and there are many customers with different views. This is a section where all the people are transparent with their views and ideology."',
    image: TestimonialImage1,
    rating: 4,
  },
  {
    name: "Julia Roberts",
    title: "Senior Artist",
    quote:
      '"This is a customer quote. This person has the following opinion on the following feature and is giving their respective view. Social proof section is important and there are many customers with different views. This is a section where all the people are transparent with their views and ideology."',
    image: TestimonialImage2,
    rating: 5,
  },
  {
    name: "Dave Free",
    title: "AI Engineer",
    quote:
      '"This is a customer quote. This person has the following opinion on the following feature and is giving their respective view. Social proof section is important and there are many customers with different views. This is a section where all the people are transparent with their views and ideology."',
    image: TestimonialImage3,
    rating: 4,
  },
];

const Testimonials = () => {
  return (
    <div className="md:px-4 lg:px-20 xl:px-32 text-white py-12">
      <h2 className="text-white text-center font-semibold ms:text-3xl sm:text-5xl md:tracking-[0.04em] mb-2">Testimonials</h2>
      <p className="text-center text-lg ms:mb-20 lg:mb-20">
        Hear what our customers have to say.
      </p>
      <div className="w-full slider-container">
        <Splide
          options={{
            type: "loop",
            perPage: 3,
            focus: "center",
            gap: "1rem",
            arrows: true,
            pagination: false,
            breakpoints: {
              768: { perPage: 1 },
              1024: {
                perPage: 2, 
                padding: "2rem", 
              },
            },
          }}
          className="relative"
        >
          {testimonials.map((testimonial, index) => (
            <SplideSlide key={index}>
              <div className="h-10"></div>
              <div
                className="p-6 relative"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(255, 255, 255, 0.045) 0%, rgba(0, 0, 0, 0.05) 100%)",
                  border: "1px solid transparent",
                  borderImageSource:
                    "linear-gradient(91.55deg, rgba(255, 255, 255, 0.35) 0%, rgba(255, 255, 255, 0) 18.49%, rgba(255, 255, 255, 0) 44.56%, rgba(255, 255, 255, 0) 72.74%, rgba(255, 255, 255, 0.25) 96.42%)",
                  borderImageSlice: 1,
                  boxShadow: "0px 0px 7px 0px #FFFFFF40",
                  backdropFilter: "blur(34px)",
                  borderRadius: "8px", // Rounded corners
                  padding: "20px", // Padding inside the card
                  color: "#fff", // Text color for contrast
                  fontFamily: "Arial, sans-serif",
                }}
              >
                <div
                  className="absolute top-[-40px] left-1/2 transform -translate-x-1/2 testimonial-img"
                  style={{
                    width: "100px",
                    height: "100px",
                    zIndex: 3,
                    overflow: "visible",
                  }}
                >
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-full h-full rounded-full object-cover"
                    style={{
                      position: "absolute",
                      top: "0",
                      left: "0",
                      zIndex: 3,
                    }}
                  />
                </div>
                <p className="text-center text-sm italic mb-4 mt-16">
                  {testimonial.quote}
                </p>
                <h3 className="text-center text-lg font-bold">
                  {testimonial.name}
                </h3>
                <p className="text-center text-sm text-gray-400">
                  {testimonial.title}
                </p>
                <div className="flex justify-center mt-2">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <svg
                      key={i}
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      className="w-5 h-5 text-yellow-400"
                    >
                      <path d="M12 .587l3.668 7.425 8.2 1.192-5.934 5.786 1.401 8.18L12 18.896l-7.335 3.874 1.401-8.18L.132 9.204l8.2-1.192z" />
                    </svg>
                  ))}
                </div>
              </div>
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </div>
  );
};

export default Testimonials;
