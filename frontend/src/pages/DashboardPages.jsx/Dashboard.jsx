import { useState } from "react";
import BlogForm from "./BlogForm";
import BlogList from "./BlogList";
// import Header from "../../layouts/DashboardLayout/Header";
// import Sidebar from "../../layouts/DashboardLayout/Sidebar";

const Dashboard = () => {
  const [refresh, setRefresh] = useState(false);

  const refreshBlogs = () => {
    setRefresh((prev) => !prev);
  };

  return (
    <>
      <h1 className="text-2xl font-bold mb-6 mt-12">Blog Dashboard</h1>
      <BlogForm refreshBlogs={refreshBlogs} />
      <h2 className="text-xl font-bold mt-8 mb-4">All Blogs</h2>
      <BlogList refresh={refresh} />
    </>
  );
};

export default Dashboard;
