import { useParams } from "react-router-dom";
import FullBlog from "../components/FullBlog";
import { useBlog } from "../hooks";
import { AppBar } from "../components";

const Blog = () => {
  const { id } = useParams();
  const { loading, blog } = useBlog(id || "");
  if (loading) {
    return (
      <div>
        <AppBar />
        <div className="flex justify-center">
          <div className="grid grid-cols-12 px-10 w-full pt-20 max-w-screen-xl">
            <div className="col-span-8">
              <div className="text-5xl font-extrabold">
                <div className="h-2 max-w-[100px] bg-gray-200 rounded-full mb-2.5"></div>
              </div>
              <div className="text-slate-400 py-2">
                <div className="h-2 w-10 bg-gray-200 rounded-full mb-2.5"></div>
              </div>
              <div className="">
                <div className="h-2 max-w-[360px] bg-gray-200 rounded-full mb-2.5"></div>
              </div>
            </div>
            <div className="col-span-4">
              <div className="h-2 w-10 bg-gray-200 rounded-full mb-2.5"></div>
              <div className="flex items-center">
                <div className="h-4 w-4 bg-gray-200 rounded-full mb-4"></div>
                <div className="m-2">
                  <div className="text-xl font-bold">
                    <div className="h-2 w-10 bg-gray-200 rounded-full mb-2.5"></div>
                  </div>
                  <div className="text-slate-500">
                    <div className="h-2 w-10 bg-gray-200 rounded-full mb-2.5"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div>
      <FullBlog
        blog={
          blog
            ? blog
            : {
                content: "this is random content",
                title: "random post",
                id: "random-id",
                author: {
                  name: "randon-user",
                },
              }
        }
      />
    </div>
  );
};

export default Blog;
