const BlogCard = ({blog}) => {
  return (
    <div>
      <div className="card bg-base-200  shadow-xl">
        <div className="card-body">
          <h2 className="card-title truncate">{blog?.title}</h2>
          <p className="truncate">{blog?.body}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">See More</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
