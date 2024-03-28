import axios from "axios";
import { AppBar } from "../components";
import { BACKEND_URL } from "../config";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Publish = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const postBlog = async () => {
    const res = await axios.post(
      `${BACKEND_URL}/api/v1/blog`,
      {
        title,
        content,
        published: true,
      },
      {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      }
    );
    setTitle("");
    setContent("");
    const blog = await res.data.res;

    navigate(`/blog/${blog.id}`);
  };
  return (
    <div>
      <AppBar />
      <div className="flex justify-center w-full pt-8">
        <div className="max-w-screen-lg w-full">
          <div className="mb-6">
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="title"
              className="focus:outline-none block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base"
              required
            />
          </div>

          <div className="w-full mb-4 border border-gray-200 rounded-lg bg-gray-50 ">
            <div className="px-4 py-2 bg-white rounded-t-lg ">
              <label className="sr-only">Content</label>
              <textarea
                rows={20}
                className="w-full px-0 text-sm text-gray-900 bg-white border-0  focus:outline-none"
                placeholder="Write content ..."
                value={content}
                onChange={(e) => setContent(e.target.value)}
                required
              />
            </div>
          </div>

          <button
            type="button"
            onClick={postBlog}
            className=" inline-flex items-center py-2.5 px-8 text-xs font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200  hover:bg-blue-800"
          >
            Publish
          </button>
        </div>
      </div>
    </div>
  );
};

export default Publish;
