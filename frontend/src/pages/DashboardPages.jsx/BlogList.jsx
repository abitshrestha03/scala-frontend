import axios from "axios";
import { useState, useCallback, useEffect } from "react";
import { useDropzone } from "react-dropzone";
import { UploadCloud } from "lucide-react";
import PropTypes from "prop-types";
import { toast } from "react-toastify"; // Import Toastify
import "react-toastify/dist/ReactToastify.css"; // Import default styles for Toastify
import DOMPurify from "dompurify";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "";

const BlogList = ({ refresh }) => {
  const [files, setFiles] = useState([]);
  const [blogs, setBlogs] = useState([]);
  const [editBlog, setEditBlog] = useState(null);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [blogToDelete, setBlogToDelete] = useState(null);
  const [loading, setLoading] = useState(false);
  const [selectedImageUrl, setSelectedImageUrl] = useState("");

  const categories = [
    "PRODUCT UPDATES",
    "ENGINEERING AND DEVELOPMENT",
    "COMPANY NEWS",
    "TRENDS",
    "CULTURE AND CAREERS",
    // "OTHERS",
  ];

  const onDrop = useCallback((acceptedFiles) => {
    setFiles(acceptedFiles);
    if (acceptedFiles.length > 0) {
      const file = acceptedFiles[0];
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImageUrl(reader.result);
      };
      reader.readAsDataURL(file);
    }
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: { "image/jpeg": [".jpeg", ".jpg"], "image/png": [".png"] },
  });

  const fetchBlogs = async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/api/v1/admin/blog`, {
        withCredentials: true,
      });
      console.log(response.data.data);
      console.log(response.data.data.blogs);
      setBlogs(response?.data?.data?.blogs);
    } catch (error) {
      console.error("Error fetching blogs:", error);
    }
  };

  const handleDeleteConfirm = (blog) => {
    setBlogToDelete(blog);
    setShowDeleteConfirm(true);
  };

  const handleDelete = async () => {
    if (!blogToDelete) {
      return;
    }
    console.log(blogToDelete);
    try {
      await axios.delete(
        `${API_BASE_URL}/api/v1/admin/blog/${blogToDelete.slug}`,
        { withCredentials: true } // Configuration for credentials
      );
      fetchBlogs();
      setShowDeleteConfirm(false);
      toast.success("Blog deleted successfully!"); // Show success toast
    } catch (error) {
      if (error.status === 403) {
        toast.error("You do not have access to this resource."); // Display forbidden access message
      } else if (error.status === 404) {
        toast.error("Blog not found."); // Display not found message
      } else {
        toast.error("Error while performing action"); // Display general server error message
        console.log(error);
      }
    }
  };

  const handleEdit = (blog) => {
    setEditBlog(blog);
    setShowEditModal(true);
  };

  const togglePopup = () => {
    setShowEditModal(!showEditModal);
  };

  const handleEditSubmit = async (updatedBlog) => {
    setLoading(true);
    try {
      let imageUrl = updatedBlog.image;

      if (files.length > 0) {
        const file = files[0];
        const data = new FormData();
        data.append("file", file);
        data.append("upload_preset", "ujv8p9lx");
        data.append("cloud_name", "dvsxzhxgv");

        const response = await fetch(
          "https://api.cloudinary.com/v1_1/dvsxzhxgv/image/upload",
          {
            method: "POST",
            body: data,
          }
        );

        const result = await response.json();
        imageUrl = result.secure_url;
        console.log(imageUrl);
      }
      const payload = {
        ...updatedBlog,
        image: imageUrl,
      };

      await axios.patch(
        `${API_BASE_URL}/api/v1/admin/blog/${updatedBlog.slug}`,
        payload, // Send the updated blog data
        { withCredentials: true } // Configuration for credentials
      );
      fetchBlogs(); // Refresh the blog list
      setShowEditModal(false); // Close the modal
      toast.success("Blog updated successfully!"); // Show success toast
    } catch (error) {
      toast.danger("Error Updating");
      console.error("Error updating blog:", error);
    } finally {
      setLoading(false); // Set loading state to false once the operation is completed
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, [refresh]);

  const getStatusStyle = (isFeatured) => {
    console.log(isFeatured);
    return isFeatured ? "bg-green-500 text-white" : "bg-red-500 text-white";
  };

  const modules = {
    toolbar: [
      [{ header: [1, 2, 3, false] }],
      ["bold", "italic", "underline", "strike"], // Formatting options
      [{ list: "ordered" }, { list: "bullet" }], // Lists
      [{ align: [] }], // Text alignment
      ["link", "image"], // Links and images
      ["clean"], // Clear formatting
    ],
  };
  
  const formats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "list",
    "bullet",
    "align",
    "link",
    "image",
  ];

  const handleStatusClick = async (slug, currentStatus) => {
    if (!slug || currentStatus === undefined) {
      console.error("Invalid slug or status");
      return;
    }

    const updatedStatus = !currentStatus;

    // Optimistic UI Update: Update the blog's status immediately in the UI
    setBlogs((prevBlogs) =>
      prevBlogs.map((blog) =>
        blog.slug === slug ? { ...blog, isFeatured: updatedStatus } : blog
      )
    );

    try {
      await axios.patch(
        `${API_BASE_URL}/api/v1/admin/toggle/b/${slug}`,
        {
          isFeatured: updatedStatus,
        },
        { withCredentials: true }
      );
      fetchBlogs(); // Refresh the blog list to ensure the correct data is displayed after the update
    } catch (error) {
      // Revert the status change in case of failure (in case of an error)
      setBlogs((prevBlogs) =>
        prevBlogs.map((blog) =>
          blog.slug === slug ? { ...blog, isFeatured: currentStatus } : blog
        )
      );
      console.error("Error updating blog:", error);
      toast.error("Error updating blog status");
    }
  };

  return (
    <div className="p-4 text-sm">
      <div className="space-x-4 text-gray-600 mt-2 ml-1">
        <button className="text-blue border-b border-blue font-semibold">
          All
        </button>
        <button>Featured</button>
        <button>Unfeatured</button>
      </div>
      <div className="mb-4 ml-1">
        <hr className="border-t border-gray-300" />
      </div>
      <div className="bg-white shadow-md rounded-lg">
        <div className="flex items-center justify-between border-b p-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search Order..."
              className="border border-gray-300 rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:border-blue-500 w-full text-sm"
            />
            <svg
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M15 15L21 21"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
                stroke="currentColor"
                strokeWidth="2"
              />
            </svg>
          </div>
        </div>

        {/* Orders Table */}
        <table className="min-w-full bg-white text-sm">
          <thead className="border-gray-300 text-sm">
            <tr>
              <th className="py-3 px-4 text-left">
                <input type="checkbox" className="rounded-sm" />
              </th>
              <th className="py-3 px-4 text-left">S.N.</th>
              <th className="py-3 px-4 text-left">Title</th>
              {/* <th className="py-3 px-4 text-left">Content</th> */}
              <th className="py-3 px-4 text-left">Author</th>
              <th className="py-3 px-4 text-left">Profession</th>
              <th className="py-3 px-4 text-left">Category</th>
              <th className="py-3 px-4 text-left">Status</th>
              <th className="py-3 px-4 text-left">Action</th>
              <th className="py-3 px-4 text-left">Created Date</th>
            </tr>
          </thead>
          <tbody className="text-sm">
            {blogs.map((blog, index) => (
              <tr key={blog.id} className={`border-b`}>
                <td className="py-3 px-4">
                  {/* <input
                    type="checkbox"
                    checked={isRowSelected(order.id)}
                    onChange={() => handleRowSelect(order.id)}
                    className="rounded-sm"
                  /> */}
                </td>
                <td className="py-3 px-4">{index + 1}</td>
                <td className="py-3 px-4">{blog.title}</td>
                {/* <td
                  className="py-3 px-4"
                  dangerouslySetInnerHTML={{
                    __html: DOMPurify.sanitize(blog.content),
                  }}
                ></td>{" "} */}
                <td className="py-3 px-4">{blog.author.name}</td>
                <td className="py-3 px-4">{blog.author.role}</td>
                <td className="py-3 px-4">{blog.category}</td>
                <td className="py-3 px-4 hidden">{blog.slug}</td>
                <td className="py-3 px-4">
                  <button
                    className={`px-3 py-1 rounded-sm text-xs font-medium text-center ${getStatusStyle(
                      blog?.isFeatured
                    )} max-w-full truncate cursor-pointer`}
                    onClick={() =>
                      handleStatusClick(blog.slug, blog.isFeatured)
                    } // Pass slug and current status
                  >
                    {blog?.isFeatured ? "Featured" : "Not Featured"}
                  </button>
                </td>
                <td className="py-3 px-4">
                  <div className="flex space-x-2 items-center">
                    <button
                      className="px-3 py-1 rounded-sm text-xs font-medium text-center bg-purple-500 text-white"
                      onClick={() => handleEdit(blog)}
                    >
                      Edit
                    </button>
                    <button
                      className="px-3 py-1 rounded-sm text-xs font-medium text-center bg-red-500 text-white"
                      onClick={() => handleDeleteConfirm(blog)}
                    >
                      Delete
                    </button>
                  </div>
                </td>
                <td className="py-3 px-4">
                  {" "}
                  {new Date(blog?.createdAt).toLocaleDateString("en-CA")}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* Edit Modal */}
      {showEditModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="shadow-md relative">
            <form
              className="grid grid-cols-1 md:grid-cols-2 gap-4 max-h-[90vh] px-6 py-6 overflow-y-auto flex-grow border border-gray-300 rounded-lg bg-white shadow-md"
              onSubmit={(e) => {
                e.preventDefault();
                handleEditSubmit(editBlog);
              }}
            >
              <button
                onClick={togglePopup}
                className="absolute top-0 right-2 text-red-500 font-normal rounded-full px-1 py-1 hover:text-gray-700 text-3xl w-10 h-10 z-50"
              >
                &times;
              </button>
              <div className="space-y-2 flex flex-col col-span-2">
                <h2 className="font-bold text-2xl">Edit Blogs</h2>
              </div>
              <div className="space-y-2 flex flex-col">
                <label htmlFor="edit-title" className="font-semibold text-xs">
                  Blog Title
                </label>
                <input
                  type="text"
                  id="edit-title"
                  name="title"
                  value={editBlog.title}
                  onChange={(e) =>
                    setEditBlog({
                      ...editBlog,
                      title: e.target.value,
                    })
                  }
                  className="border border-gray-300 p-2 rounded-md text-xs"
                  placeholder="Enter blog title"
                />
              </div>
              <div className="space-y-2 flex flex-col">
                <label htmlFor="category" className="font-semibold text-xs">
                  Category
                </label>
                <select
                  id="category"
                  name="category"
                  value={editBlog.category}
                  onChange={(e) =>
                    setEditBlog({
                      ...editBlog,
                      category: e.target.value, // Update the category with the new value
                    })
                  }
                  className="border border-gray-300 p-2 rounded-md text-xs"
                >
                  <option value="">Select a category</option>
                  {categories.map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
              </div>{" "}
              <div className="space-y-2 flex flex-col">
                <label
                  htmlFor="edit-category"
                  className="font-semibold text-xs"
                >
                  Blog Category
                </label>
                <input
                  type="text"
                  id="edit-category"
                  name="category"
                  value={editBlog.category}
                  onChange={(e) =>
                    setEditBlog({
                      ...editBlog,
                      category: e.target.value, // Update the category with the new value
                    })
                  }
                  className="border border-gray-300 p-2 rounded-md text-xs"
                  placeholder="Enter blog category"
                />
              </div>
              <div className="space-y-2 flex flex-col">
                <label
                  htmlFor="edit-author-name"
                  className="font-semibold text-xs"
                >
                  Author Name
                </label>
                <input
                  type="text"
                  id="edit-author-name"
                  name="author.name"
                  value={editBlog.author?.name}
                  readOnly
                  onChange={(e) =>
                    setEditBlog({
                      ...editBlog,
                      author: { ...editBlog.author, name: e.target.value },
                    })
                  }
                  className="border border-gray-300 bg-gray-200 p-2 rounded-md text-xs"
                  placeholder="Enter author name"
                />
              </div>
              <div className="space-y-2 flex flex-col">
                <label htmlFor="edit-role" className="font-semibold text-xs">
                  Author Role
                </label>
                <input
                  type="text"
                  id="edit-role"
                  name="author.role"
                  value={editBlog.author?.role}
                  onChange={(e) =>
                    setEditBlog({
                      ...editBlog,
                      author: { ...editBlog.author, role: e.target.value },
                    })
                  }
                  className="border border-gray-300 p-2 rounded-md text-xs"
                  placeholder="Enter author role"
                />
              </div>
              <div className="space-y-2 flex flex-col col-span-2">
                <label htmlFor="content" className="font-semibold text-xs">
                  Blog Content
                </label>
                {/* <textarea
                  id="edit-content"
                  type="text"
                  name="content"
                  value={editBlog.content}
                  onChange={(e) =>
                    setEditBlog({ ...editBlog, content: e.target.value })
                  }
                  placeholder="Type Blog Content"
                  className="w-full min-h-[120px] border border-gray-300 p-2 rounded-md text-xs"
                /> */}
                <ReactQuill
                  value={editBlog.content}
                  onChange={(content) =>
                    setEditBlog({
                      ...editBlog,
                      content: content,
                    })
                  }
                  modules={modules}
                  formats={formats}
                  placeholder="Type Blog Content"
                  className="w-full min-h-[20vh] text-xs"
                />
              </div>
              <div
                {...getRootProps()}
                className={`w-full col-span-2 border-[1px] border-dashed rounded-lg p-8 text-center cursor-pointer transition-colors mt-10 ${
                  isDragActive
                    ? "border-primary bg-primary/5"
                    : "border-[#003DFF]"
                }`}
              >
                <input {...getInputProps()} />
                <UploadCloud className="mx-auto h-12 w-12 bg-[#003DFF] text-white rounded px-2" />
                <p className="mt-2 text-sm text-gray-400">
                  Drag & Drop or{" "}
                  <span className="text-[#003DFF] font-medium">
                    choose file
                  </span>{" "}
                  to upload
                </p>
                <p className="text-xs text-gray-400 mt-1">
                  Supported format: jpeg, png
                </p>
                {files.length > 0 && (
                  <div className="mt-4">
                    <p className="text-sm font-medium">Selected files:</p>
                    {files.map((file) => (
                      <p
                        key={file.name}
                        className="text-sm text-muted-foreground"
                      >
                        {file.name}
                      </p>
                    ))}
                  </div>
                )}
              </div>
              <div className="relative max-w-[200px] space-y-2 flex flex-col col-span-2">
                {/* Display existing image if available */}
                {editBlog?.image && !selectedImageUrl && (
                  <div>
                    <img
                      src={editBlog.image}
                      alt="Existing Image"
                      className="w-full h-[10vh] rounded"
                    />
                    <p className="text-xs text-gray-500">Previous Image</p>
                  </div>
                )}

                {/* Display selected image preview if a new image is uploaded */}
                {selectedImageUrl && (
                  <div>
                    <img
                      src={selectedImageUrl}
                      alt="Selected Preview"
                      className="w-full h-[10vh] rounded"
                    />
                    <p className="text-xs text-gray-500">
                      Selected image preview
                    </p>
                  </div>
                )}

                {/* Remove button for the new image */}
                {selectedImageUrl && (
                  <button
                    type="button"
                    onClick={() => {
                      setSelectedImageUrl("");
                      setFiles([]); // Clear the selected files
                    }}
                    className="absolute -top-1 right-2 text-white rounded-full w-6 h-6 flex items-center justify-center transform translate-x-2 translate-y-[-2px]"
                    aria-label="Remove Image"
                  >
                    ✕
                  </button>
                )}
              </div>
              <br />
              <div className="space-y-2 flex flex-col col-span-2">
                <label className="font-semibold text-xs flex items-center">
                  <input
                    type="checkbox"
                    name="isFeatured"
                    checked={editBlog.isFeatured}
                    onChange={(e) =>
                      setEditBlog({ ...editBlog, isFeatured: e.target.checked })
                    }
                    className="mr-2"
                  />
                  Featured / Unfeatured
                </label>
              </div>
              <input
                type="hidden"
                value={editBlog.slug}
                className="border border-gray-300 rounded-lg w-full px-4 py-2"
              />
              <div className="flex space-x-2 mt-8 justify-end">
                <button
                  type="submit"
                  className="bg-blue-500 hover:bg-blue-600 text-white px-2 text-xs py-2 rounded"
                >
                  {loading ? "Saving..." : "Save"}{" "}
                </button>
                <button
                  type="button"
                  className="bg-gray-300 hover:bg-gray-400 text-gray-800 px-2 py-2 text-xs rounded"
                  onClick={() => setShowEditModal(false)}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Delete Confirmation */}
      {showDeleteConfirm && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-lg font-semibold mb-4">Confirm Delete</h2>
            <p className="mb-4">Are you sure you want to delete this blog?</p>
            <div className="flex space-x-4">
              <button
                className="bg-red-500 text-white px-4 py-2 rounded"
                onClick={handleDelete}
              >
                Delete
              </button>
              <button
                className="bg-gray-300 px-4 py-2 rounded"
                onClick={() => {
                  setShowDeleteConfirm(false);
                  setBlogToDelete(null);
                }}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

BlogList.propTypes = {
  refresh: PropTypes.bool.isRequired, // Adjust the type as per your implementation
};

export default BlogList;
