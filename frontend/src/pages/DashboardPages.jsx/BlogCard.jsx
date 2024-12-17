
const BlogCard = ({ blog, onDelete, onEdit }) => {
  return (
    <div className="border p-4 rounded shadow">
      <h2 className="font-bold text-lg">{blog.title}</h2>
      <p className="text-gray-600">{blog.category}</p>
      <p className="text-sm mt-2">{blog.content.slice(0, 100)}...</p>
      <p className="text-xs text-gray-500 mt-1">Author: {blog.author.name}</p>
      <div className="flex gap-2 mt-4">
        <button
          onClick={() => onEdit(blog)}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Edit
        </button>
        <button
          onClick={() => onDelete(blog.id)}
          className="bg-red-500 text-white px-4 py-2 rounded"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default BlogCard;
