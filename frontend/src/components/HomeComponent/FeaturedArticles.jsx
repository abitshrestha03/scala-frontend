import { useEffect, useState } from "react";
import axios from "axios";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Button from "../Button";

const FeaturedArticles = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await axios.get("http://localhost:8000/api/v1/blogs");
        console.log(response);
        const blogs = response.data?.data?.blogs || [];
        const featuredArticles = blogs.filter(blog => blog.isFeatured);
        setArticles(featuredArticles);
      } catch (error) {
        console.error("Error fetching featured articles", error);
      }
    };

    fetchArticles();
  }, []);

  return (
    <div className="text-white py-10 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-white text-center font-semibold ms:text-3xl sm:text-5xl md:tracking-[0.04em] mb-2">
          Featured Articles
        </h2>
        <p className="text-gray-400 mb-8">Take a look at our latest articles</p>

        {/* Custom Swiper Slider */}
        <div className="relative mb-4">
          <Swiper
            loop={true}
            slidesPerView={1}
            spaceBetween={30}
            navigation={{
              prevEl: ".swiper-button-prev",
              nextEl: ".swiper-button-next",
            }}
            modules={[Pagination, Navigation]}
            breakpoints={{
              640: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            className="mySwiper"
          >
            {articles.map((article, index) => (
              <SwiperSlide key={index}>
                <div className="bg-[#1B1C2A] rounded-lg shadow-lg">
                  <img
                    src={article.image} // Assuming 'image' is returned in the API
                    alt={article.title}
                    className="mb-4 w-full h-auto sm:h-[200px] md:h-[250px] lg:h-[273px] object-cover"
                  />
                  <div className="px-4 flex flex-col">
                    <span className="text-sm text-white bg-[#003DFF40] px-2 py-1 rounded self-start">
                      {article.category}
                    </span>
                    <p className="text-xl font-semibold mt-2 mb-1 leading-8 w-full text-white text-start">
                      {article.title}
                    </p>
                    <p className="text-[#FFFFFF99] text-sm self-start pb-4">
                      Author - {article.author.name}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom navigation buttons */}
          <div className="absolute top-1/2 -left-14 transform -translate-y-1/2">
            <button className="swiper-button-prev text-white p-3 rounded-full shadow-lg"></button>
          </div>
          <div className="absolute top-1/2 -right-14 transform -translate-y-1/2">
            <button className="swiper-button-next text-white p-3 rounded-full shadow-lg"></button>
          </div>
        </div>

        <Button text="View All Articles" />
      </div>
    </div>
  );
};

export default FeaturedArticles;
