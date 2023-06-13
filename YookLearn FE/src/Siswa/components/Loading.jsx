import React from "react";

const Loading = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-biru"></div>
      <h1 className="mt-2 text-biru">Loading. . .</h1>
    </div>
  );
};

export default Loading;
