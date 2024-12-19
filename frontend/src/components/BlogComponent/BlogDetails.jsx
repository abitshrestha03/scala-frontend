import { useParams, useNavigate } from "react-router-dom";
// import BlogImage1 from "../../assets/images/BlogImage1.png";
// import BlogDetailsImage2 from "../../assets/images/BlogDetailsImage2.png";
// import BlogDetailsImage3 from "../../assets/images/BlogDetailsImage3.png";
// import BlogDetailsImage4 from "../../assets/images/BlogDetailsImage4.png";
import Article1Image from "../../assets/images/Article1.png";
import Article2Image from "../../assets/images/Article2.png";
import Article3Image from "../../assets/images/Article3.png";
import { useEffect, useState } from "react";
import axios from "axios";
import DOMPurify from "dompurify";
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "";

const BlogDetails = () => {
  const [blogs, setBlogs] = useState([]);
  const { articleId } = useParams();
  const navigate = useNavigate();

  const fetchBlogs = async () => {
    try {
      const response = await axios.get(
        `${API_BASE_URL}/api/v1/blogs/${articleId}`
      );
      console.log(response.data.data);
      setBlogs(response.data.data);
    } catch (error) {
      console.error("Error fetching blogs:", error);
    }
  };

  const articleData = [
    {
      title: "The Reasons Why Your Products Suck in The Marketplace",
      author: "Abhinav Prassi",
      category: "Scala Technologies",
      image: Article1Image,
    },
    {
      title: "The Reasons Why Your Products Suck in The Marketplace",
      author: "Scala Technologies",
      category: "Insight",
      image: Article2Image,
    },
    {
      title: "The Reasons Why Your Products Suck in The Marketplace",
      author: "Scala Technologies",
      category: "Insight",
      image: Article3Image,
    },
  ];

  // Simulate fetching blog data
  const blog = {
    id: 1,
    title: "Scala Tech Services: Expertise to Build Scalable Futures",
    author: "Bobby Green",
    authorDescription: "Senior Researcher",
    date: "Nov 23, 2023",
    image: "/path-to-image1.jpg",
    content: `
    Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. 
    Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
    `,
    quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    imgTitle: `This is the Article headline - Some Inner headline for the article. Some Inner headline for the article. Some Inner headline for the article. Some Inner headline for the article. `,
    imgDescription: `Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.
    Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.`,
  };

  useEffect(() => {
    fetchBlogs();
  }, [articleId]);

  // Fallback if blog ID doesn't exist
  if (parseInt(articleId)) {
    return <div>Blog not found.</div>;
  }

  return (
    <div className="mt-20 px-4 ms:px-6 md:px-8 lg:px-20 xl:px-32 text-white min-h-screen">
      <button onClick={() => navigate(-1)} className="text-white">
        {"< "}
        <span className="underline">Back</span>
      </button>
      <article className="mt-16">
        <div className="flex gap-4 items-center">
          <span className="rounded-sm py-1 text-white bg-navblue px-2 text-sm mb-2">
            {blogs?.category}
          </span>
          <p className="text-sm">
            {" "}
            {new Date(blogs?.createdAt).toLocaleDateString("en-CA")}
          </p>
        </div>
        <h1 className="text-3xl mt-4 font-bold mb-2 tracking-wider">
          {blogs?.title}
        </h1>

        <div className="flex items-center gap-8">
          {/* <img
            src={BlogImage1}
            alt={blog.title}
            className="w-20 h-20 object-cover rounded-lg mb-6"
          /> */}
          <p className="text-gray-400 text-sm mb-4 flex flex-col-reverse">
            <span>{blogs.author?.role}</span>
            <span className="text-white">{blogs.author?.name}</span>
          </p>
        </div>

        <p
          className="text-gray-300 mb-6"
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(blogs?.content),
          }}
        >
        </p>
        <img src={blogs?.image} className="ms:w-full h-auto md:w-[34vw] lg:h-[50vh]" alt="" />
        {/* <p className="text-gray-300 mt-2 mb-4">{blog.imgTitle}</p> */}
        {/* <p className="text-gray-300">{blog.imgDescription}</p> */}
        <div className="text-white mt-4 font-sans">
          {/* <div className="text-center mb-8">
            <div
              className="p-6 rounded-lg inline-block"
              style={{
                background: `linear-gradient(100.53deg, rgba(0, 61, 255, 0.05) 0%, rgba(255, 255, 255, 0.05) 100%)`,
                border: `1px solid`,
                borderImageSource: `linear-gradient(94.8deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.35) 49.81%, rgba(255, 255, 255, 0) 68.65%, rgba(255, 255, 255, 0.4) 87.49%)`,
                borderImageSlice: 1,
              }}
            >
              <p className="text-lg italic font-light">
                `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.`
              </p>
              <p className="mt-4 font-bold">Thomas Edition</p>
            </div>
          </div> */}

          {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <img
              src={BlogDetailsImage3}
              alt="Hand"
              className="w-full rounded-lg"
            />
            <img
              src={BlogDetailsImage4}
              alt="Digital Human"
              className="w-full rounded-lg"
            />
          </div> */}
          {/* <div className="mt-4">
            <p className="text-gray-300 text-xl">
              {blogs.content}
               This is the Article headline - Some Inner headline for the
              article. Some Inner headline for the article. Some Inner headline
              for the article. Some Inner headline for the article.{" "} 
            </p>
            <p className="text-lg mt-4 italic font-light">
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old. Richard McClintock, a Latin
              professor at Hampden-Sydney College in Virginia, looked up one of
              the more obscure Latin words, consectetur, from a Lorem Ipsum
              passage, and going through the cites of the word in classical
              literature, discovered the undoubtable source. Lorem Ipsum comes
              from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum
              (The Extremes of Good and Evil) by Cicero, written in 45 BC. This
              book is a treatise on the theory of ethics, very popular during
              the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor
              sit amet., comes from a line in section 1.10.32.
            </p>
          </div> */}

          {/* Related Articles */}
          <div className="mt-12">
            <h2 className="text-3xl font-bold mb-12 text-center">
              Related Articles
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {articleData.map((article, index) => (
                <div
                  key={index}
                  className="rounded-lg shadow-lg hover:shadow-xl transition"
                  style={{
                    background: `linear-gradient(180deg, rgba(0, 61, 255, 0.15) 0%, rgba(0, 0, 0, 0.15) 100%)`,
                    border: `1px solid`,
                    borderImageSource: `linear-gradient(158.89deg, rgba(255, 255, 255, 0.5) 0%, rgba(255, 255, 255, 0) 48.88%, rgba(255, 255, 255, 0.5) 100%)`,
                    boxShadow: `0px 3px 9px -5px #FFFFFF40`,
                    borderImageSlice: 1,
                  }}
                >
                   <img
                    src={article.image}
                    alt={article.title}
                    className="w-full ms:h-[45vh] lg:h-[50vh] object-cover rounded-t-lg"
                  />
                  <div className="mt-4 px-4 pb-4">
                    <p className="text-sm text-blue-400">{article.category}</p>
                    <h3 className="text-lg font-bold mt-2">{article.title}</h3>
                    <p className="text-sm mt-1">Author - {article.author}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </article>
    </div>
  );
};

export default BlogDetails;
