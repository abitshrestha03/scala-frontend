import { useEffect, useState } from "react";
import Article1Image from "../../assets/images/Article1.png";
import Article2Image from "../../assets/images/Article2.png";
import Article3Image from "../../assets/images/Article3.png";
import Article4Image from "../../assets/images/Article4.png";
import Article5Image from "../../assets/images/Article5.png";
import { Link } from "react-router-dom";
import axios from "axios";

const ArticleGrid = () => {
  const [blogs, setBlogs] = useState([]);

  const [selectedCategory, setSelectedCategory] = useState("All");
  const fetchBlogs = async () => {
    try {
      const response = await axios.get("https://scala-backend-y102.onrender.com/api/v1/blogs", {
        // withCredentials: true,
      });
      console.log(response.data.data);
      setBlogs(response.data.data.blogs);
    } catch (error) {
      console.error("Error fetching blogs:", error);
    }
  };
  useEffect(() => {
    fetchBlogs();
  }, []);

  const articles = [
    {
      id: 1,
      title: "The Reasons Why Your Products Suck in The Marketplace",
      author: "Scala Technologies",
      image: Article1Image,
      category: "Category 1",
    },
    {
      id: 2,
      title: "The Reasons Why Your Products Suck in The Marketplace",
      author: "Scala Technologies",
      image: Article2Image,
      category: "Category 2",
    },
    {
      id: 3,
      title: "The Reasons Why Your Products Suck in The Marketplace",
      author: "Scala Technologies",
      image: Article3Image,
      category: "Category 3",
    },
    {
      id: 4,
      title: "The Reasons Why Your Products Suck in The Marketplace",
      author: "Scala Technologies",
      image: Article4Image,
      category: "Category 1",
    },
    {
      id: 5,
      title: "The Reasons Why Your Products Suck in The Marketplace",
      author: "Scala Technologies",
      image: Article5Image,
      category: "Category 2",
    },
  ];

  // Filtered Articles Based on Category
  const filteredArticles =
    selectedCategory === "All"
      ? articles
      : articles.filter((article) => article.category === selectedCategory);

  return (
    <div className="text-white min-h-screen ms:px-6 md:px-4 lg:px-20 xl:px-32 mt-12">
      <h1 className="text-4xl text-center font-bold">All Articles</h1>
      <div className="flex flex-wrap ms:gap-2 md:gap-4 mb-6 mt-4">
        {["All", "Category 1", "Category 2", "Category 3"].map((category) => (
          <button
            key={category}
            className={`ms:px-3 ms:py-1 md:px-4 md:py-2 rounded-lg text-sm font-semibold transition`}
            style={{
              backgroundColor:
                selectedCategory === category ? "#003DFF40" : "#00000012", // Same background
              border:
                selectedCategory === category
                  ? "2px solid #003DFF"
                  : "1px solid #FFFFFFB2", // Same border
              boxShadow:
                selectedCategory === category
                  ? "0px 0px 13px 0px #003DFF59" // Glow only for active button
                  : "none",
            }}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogs.map((article) => (
          <Link key={article._id} to={`${article.slug}`}>
            <div className="bg-[#1e293b] rounded-lg shadow-md overflow-hidden">
              <div className="h-[55vh] w-full overflow-hidden">
                {" "}
                {/* Wrap the image in a fixed-height div */}
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <span className="block text-blue-400 text-sm mb-2">
                  {article.category}
                </span>
                <h2 className="text-lg font-semibold mb-2">{article.title}</h2>
                <p className="text-gray-400">Author - {article.author.name}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ArticleGrid;
