import { Link } from "react-router-dom";

interface BlogCardProps {
  authorName: string;
  title: string;
  content: string;
  publishedDate: string;
  id: string;
}
const BlogCard = ({
  authorName,
  title,
  content,
  publishedDate,
  id,
}: BlogCardProps) => {
  return (
    <Link to={`/blog/${id}`}>
      <div className="border-b border-slate-200 p-4 w-screen max-w-screen-lg">
        <div className="flex items-center">
          <Avatar name={authorName} size="small" />
          <div className="mx-1 font-extralight text-slate-600">
            {authorName}
          </div>
          <div className="w-1 h-1 rounded-full bg-slate-400 mx-1 "></div>
          <div className="mx-1 text-sm font-thin text-slate-500">
            {publishedDate}
          </div>
        </div>
        <div className="font-semibold text-lg">{title}</div>
        <div className="font-extralight text-md">
          {content.slice(0, 100)} {" ..."}
        </div>
        <div className="text-slate-500 text-sm font-thin">
          {" "}
          {`${Math.ceil(content.length / 100)} Minutes Read`}
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;

export function Avatar({ name, size }: { name: string; size: string }) {
  return (
    <div
      className={`relative inline-flex items-center justify-center ${
        size == "small" ? "w-6 h-6" : "w-10 h-10"
      } overflow-hidden bg-gray-600 rounded-full`}
    >
      <span className="font-thin text-gray-300">{name[0]}</span>
    </div>
  );
}
