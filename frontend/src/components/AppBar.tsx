import { Link, useNavigate } from "react-router-dom";
import { Avatar } from "./BlogCard";

const AppBar = () => {
  const navigate = useNavigate();
  const handleLogOut = () => {
    const token = localStorage.getItem("token");
    if (token) {
      localStorage.removeItem("token");
    }
    navigate("/signin");
  };
  return (
    <div className="border-b flex justify-between px-10 items-center py-3 cursor-pointer">
      <Link to={"/"}>Blog</Link>
      <div>
        <Link to={"/publish"}>
          <button
            type="button"
            className="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 mr-4 py-2.5 text-center me-2 mb-2 "
          >
            New Blog
          </button>
        </Link>
        <button
          type="button"
          onClick={handleLogOut}
          className="text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-4 mb-2 inline-flex items-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            className="w-3.5 h-3.5 mr-2"
          >
            <path d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z" />
          </svg>
          <p>Logout</p>
        </button>

        <Avatar name="malli" size="big" />
      </div>
    </div>
  );
};

export default AppBar;
