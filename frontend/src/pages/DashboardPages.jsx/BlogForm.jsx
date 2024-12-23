import axios from "axios";
import { useState, useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { UploadCloud } from "lucide-react";
import { toast } from "react-toastify"; // Import Toastify
import "react-toastify/dist/ReactToastify.css"; // Import default styles for Toastify
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "";

axios.defaults.withCredentials = true; // Enable cookies for all requests

const BlogForm = ({ refreshBlogs, initialData }) => {
  // const [image, setImage] = useState("");
  const [files, setFiles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedImageUrl, setSelectedImageUrl] = useState("");

  const categories = [
    "PRODUCT UPDATES",
    "ENGINEERING AND DEVELOPMENT",
    "COMPANY NEWS",
    "TRENDS",
    "CULTURE AND CAREERS",
    "OTHERS",
  ];

  const handleEditorChange = (value) => {
    setBlog((prevBlog) => ({
      ...prevBlog,
      content: value,
    }));
  };

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

  const [blog, setBlog] = useState(
    initialData || {
      title: "",
      content: "",
      category: "",
      author: { name: "Scala Technologies", role: "" },
      isFeatured: false,
      image: "",
    }
  );

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name.startsWith("author.")) {
      setBlog({
        ...blog,
        author: { ...blog.author, [name.split(".")[1]]: value },
      });
    } else {
      setBlog({ ...blog, [name]: value });
    }
  };

  // const handleImageChange = async (e) => {
  //   const file = e.target.files[0];
  //   if (file) {
  //     setImage(file);
  //   }
  // };

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (files.length === 0) {
      toast.error("Image is required! Please upload an image.");
      return; // Prevent form submission
    }
    setLoading(true);
    try {
      let imageUrl = "";
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
        const url = await response.json();
        imageUrl = url.secure_url;
      }

      const payload = {
        ...blog,
        image: imageUrl,
      };

      console.log(payload);

      const response = await axios.post(
        `${API_BASE_URL}/api/v1/admin/blog`,
        payload,
        {
          withCredentials: true,
          headers: {
            "Content-Type": "application/json", // Set content type for JSON
          },
        }
      );

      console.log("Blog created successfully:", response.data);
      toast.success("Blog created successfully!"); // Show success toast
    } catch (error) {
      console.error(
        "Error creating blog:",
        error.response?.data || error.message
      );
      toast.success("Error while creating blog!"); // Show success toast
    } finally {
      setLoading(false); // Set loading state to false once the operation is completed
    }
  };

  return (
    <form
      className="grid grid-cols-1 md:grid-cols-2 gap-4 px-6 py-6 overflow-y-auto flex-grow border border-gray-300 rounded-lg bg-white shadow-md"
      onSubmit={handleSubmit}
    >
      {[
        {
          label: "Blog Title",
          name: "title",
          type: "text",
          placeholder: "Blog Title",
          value: blog.title,
        },
        // {
        //   label: "Category",
        //   name: "category",
        //   type: "text",
        //   placeholder: "Category",
        //   value: blog.category,
        // },
        {
          label: "Author Name",
          name: "author.name",
          type: "text",
          placeholder: "Author Name",
          value: blog.author.name,
          readOnly: true,
        },
        {
          label: "Author Role",
          name: "author.role",
          type: "text",
          placeholder: "Author Role",
          value: blog.author.role,
        },
      ].map((field) => (
        <div key={field.name} className="space-y-2 flex flex-col">
          <label htmlFor={field.name} className="font-semibold text-xs">
            {field.label}
          </label>
          <input
            type={field.type}
            name={field.name}
            value={field.value}
            onChange={handleChange}
            className="border border-gray-300 p-2 rounded-md text-xs"
            placeholder={field.placeholder}
            readOnly={field.readOnly} // Apply readOnly property if set
          />
        </div>
      ))}
      <div className="space-y-2 flex flex-col">
        <label htmlFor="category" className="font-semibold text-xs">
          Category
        </label>
        <select
          id="category"
          name="category"
          value={blog.category}
          onChange={handleChange}
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
      <div className="space-y-2 flex flex-col col-span-2">
        <label htmlFor="content" className="font-semibold text-xs">
          Blog Content
        </label>
        <ReactQuill
          value={blog.content}
          onChange={handleEditorChange}
          modules={modules}
          formats={formats}
          placeholder="Type Blog Content"
          className="w-full min-h-[40vh] text-xs"
        />
        {/* <textarea
          id="content"
          name="content"
          value={blog.content}
          onChange={handleChange}
          placeholder="Type Blog Content"
          className="w-full min-h-[120px] border border-gray-300 p-2 rounded-md text-xs"
        /> */}
      </div>
      <div
        {...getRootProps()}
        className={`w-full col-span-2 border-[1px] border-dashed rounded-lg p-8 text-center cursor-pointer transition-colors mt-12 ${
          isDragActive ? "border-primary bg-primary/5" : "border-[#003DFF]"
        }`}
      >
        <input {...getInputProps()} />
        <UploadCloud className="mx-auto h-12 w-12 bg-[#003DFF] text-white rounded px-2" />
        <p className="mt-2 text-sm text-gray-400">
          Drag & Drop or{" "}
          <span className="text-[#003DFF] font-medium">choose file</span> to
          upload
        </p>
        <p className="text-xs text-gray-400 mt-1">
          Supported format: jpeg, png
        </p>
        {files.length > 0 && (
          <div className="mt-4">
            <p className="text-sm font-medium">Selected files:</p>
            {files.map((file) => (
              <p key={file.name} className="text-sm text-muted-foreground">
                {file.name}
              </p>
            ))}
          </div>
        )}
      </div>
      {selectedImageUrl && (
        <div className="relative max-w-[200px] flex">
          <img
            src={selectedImageUrl}
            alt="Selected Preview"
            className="w-full h-[10vh] rounded"
          />
          <button
            type="button"
            onClick={() => {
              setSelectedImageUrl("");
              setFiles([]); // Clear the selected files
            }}
            className="absolute top-1 right-2 text-white rounded-full w-6 h-6 flex items-center justify-center transform translate-x-2 translate-y-[-2px]"
            aria-label="Remove Image"
          >
            ✕
          </button>
        </div>
      )}
      <div className="space-y-2 flex flex-col col-span-2">
        <label className="font-semibold text-xs flex items-center">
          <input
            type="checkbox"
            name="isFeatured"
            checked={blog.isFeatured}
            onChange={(e) => setBlog({ ...blog, isFeatured: e.target.checked })}
            className="mr-2"
          />
          Featured / Unfeatured
        </label>
      </div>
      <div className="flex justify-end col-span-2">
        <button
          type="submit"
          className="bg-green-500 text-xs mt-4 hover:bg-green-600 text-white px-3 py-2 rounded"
        >
          {loading ? "Adding..." : "Add"}{" "}
        </button>
      </div>
    </form>
  );
};

export default BlogForm;
