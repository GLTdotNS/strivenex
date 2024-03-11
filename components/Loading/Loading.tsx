import React from "react";

const Loading: React.FC = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="border-t-4 border-b-4 border-blue-500 rounded-full w-12 h-12 animate-spin transition-all duration-500"></div>
    </div>
  );
};

export default Loading;
