const Skeleton = () => {
  return (
    <div
      role="status"
      className="border-b border-slate-200 p-4 w-screen max-w-screen-lg animate-pulse"
    >
      <div className="flex items-center">
        <div className="h-4 w-4 bg-gray-200 rounded-full mb-4"></div>
        <div className="mx-1 font-extralight text-slate-600">
          <div className="h-2 w-10 bg-gray-200 rounded-full mb-2.5"></div>
        </div>
        <div className="w-1 h-1 rounded-full bg-slate-400 mx-1 "></div>
        <div className="mx-1 text-sm font-thin text-slate-500">
          <div className="h-2 w-20 bg-gray-200 rounded-full mb-2.5"></div>
        </div>
      </div>
      <div className="font-semibold text-lg">
        <div className="h-2 bg-gray-200 rounded-full max-w-[360px] mb-2.5"></div>
      </div>
      <div className="font-extralight text-md">
        <div className="h-2 bg-gray-200 rounded-full  mb-2.5"></div>
      </div>
      <div className="text-slate-500 text-sm font-thin">
        <div className="h-2 bg-gray-200 rounded-full max-w-[100px] mb-2.5"></div>
      </div>
    </div>
  );
};

export default Skeleton;
