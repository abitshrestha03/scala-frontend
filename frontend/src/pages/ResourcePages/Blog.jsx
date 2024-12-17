import ArticleGrid from "../../components/BlogComponent/ArticleGrid";
import FeaturedArticle from "../../components/BlogComponent/FeaturedArticle";

const Blog = () => {
  return (
    <>
      <div className="flex lg:items-center lg:py-12 ms:px-6 md:px-8 lg:px-20 xl:px-48 ms:mt-36 lg:mt-20 lg:ml-18 ms:flex-col lg:flex-row">
        <h2 className="ms:text-5xl sm:text-5xl xl:text-6xl font-bold text-navblue flex-shrink-0">
          Blog
        </h2>

        <hr className="border-navblue mt-4 mb-2 lg:hidden" />

        <div className="border-l-2 border-l-navblue border-1 border-solid border-[#003DFF] h-32 lg:mx-16 xl:mx-40 hidden lg:block"></div>
        <p className="text-2xl font-medium leading-[42px] tracking-[0.06em] text-left text-white lg:ml-11 leading-10 ms:text-base sm:text-2xl ms:tracking-[0.04em]">
          Explore the{" "}
          <span className="text-navblue">latest trends, insights,</span> and{" "}
          <span className="text-navblue">expert perspectives</span> in
          technology, innovation, and digital transformation.
        </p>
      </div>
      <FeaturedArticle />
      <ArticleGrid />
    </>
  );
};

export default Blog;
