import { AppBar, BlogCard, Skeleton } from "../components";
import { useBLogs } from "../hooks";

const Blogs = () => {
  const { loading, blogs } = useBLogs();
  if (loading) {
    return (
      <div>
        <AppBar />
        <div className="flex justify-center">
          <div>
            <Skeleton />
            <Skeleton />
            <Skeleton />
            <Skeleton />
            <Skeleton />
            <Skeleton />
          </div>
        </div>
      </div>
    );
  }
  return (
    <div>
      <AppBar />
      <div className="flex justify-center">
        <div>
          {blogs.map((blog) => (
            <BlogCard
              key={blog.id}
              id={blog.id}
              authorName={blog.author.name}
              title={blog.title}
              content={blog.content}
              publishedDate="march 28 2024"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
