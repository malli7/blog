const Quote = () => {
  return (
    <div className="flex flex-col bg-slate-200 justify-center h-screen">
      <div className="flex justify-center">
        <div className="max-w-lg">
          <div className=" text-2xl font-extrabold text-justify">
            "The customer support I recieved was exceptional. The support team
            went above and beyond to address my concerns."
          </div>
          <div className="max-w-md text-md font-bold mt-4">Julies Winfield</div>
          <div className="max-w-md text-sm text-gray-400">CEO | Acne Corp</div>
        </div>
      </div>
    </div>
  );
};

export default Quote;
