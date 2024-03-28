import { Blog } from "../hooks";
import AppBar from "./AppBar";
import { Avatar } from "./BlogCard";

const FullBlog = ({ blog }: { blog: Blog }) => {
  return (
    <div>
      <AppBar />
      <div className="flex justify-center">
        <div className="grid grid-cols-12 px-10 w-full pt-20 max-w-screen-xl">
          <div className="col-span-8">
            <div className="text-5xl font-extrabold">{blog.title}</div>
            <div className="text-slate-400 py-2">Posted on March 28 2024</div>
            <div className="">{blog.content}</div>
          </div>
          <div className="col-span-4">
            Author
            <div className="flex items-center">
              <Avatar name={blog.author.name} size="big" />
              <div className="m-2">
                <div className="text-xl font-bold">{blog.author.name}</div>
                <div className="text-slate-500">The best selling author </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FullBlog;
