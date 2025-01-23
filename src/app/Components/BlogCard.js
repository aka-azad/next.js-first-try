import Link from "next/link";

const BlogCard = async ({ blog, authenticated }) => {
  return (
    <div>
      <div className="card bg-base-200  shadow-xl">
        <div className="card-body">
          <Link
            href={`/blog/${blog.id}`}
            className="card-title truncate hover:text-blue-800"
          >
            {blog?.title}
          </Link>
          <p className="truncate">{blog?.body}</p>
          <div className="card-actions justify-end">
            <Link href={`/blog/${blog.id}`} className="btn btn-primary">
              See More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
