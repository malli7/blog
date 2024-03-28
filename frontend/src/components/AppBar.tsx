import { Link } from "react-router-dom";
import { Avatar } from "./BlogCard";

const AppBar = () => {
  return (
    <div className="border-b flex justify-between px-10 items-center py-3 cursor-pointer">
      <Link to={"/blogs"}>Blog</Link>
      <div>
        <Link to={"/publish"}>
          <button
            type="button"
            className="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 mr-8 py-2.5 text-center me-2 mb-2 "
          >
            New Blog
          </button>
        </Link>

        <Avatar name="malli" size={10} />
      </div>
    </div>
  );
};

export default AppBar;
