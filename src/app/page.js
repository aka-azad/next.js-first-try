import axios from "axios";
import BlogCard from "./Components/BlogCard";

const Home = async () => {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/posts"
  );
  const blogs = await response.data;
  return (
    <div className="container mx-auto py-10">
      <div className="grid grid-cols-1  gap-4">
        {blogs.map((blog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>
    </div>
  );
};

export default Home;
