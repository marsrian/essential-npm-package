import React from "react";

const BlogLayout = ({ children }) => {
  return (
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-4 md:gap-8">
      <div className="md:col-span-4">{children}</div>
      <div className="md:col-span-1 md:mt-8 border rounded-sm p-4 mx-2 md:mx-0">
        <h2 className="text-2xl font-bold mb-4">Recent Posts</h2>
        {/* Placeholder for recent posts */}
        <ul>
          <li className="mb-2">
            <a href="#" className="text-blue-500 hover:underline">
              Post 1
            </a>
          </li>
          <li className="mb-2">
            <a href="#" className="text-blue-500 hover:underline">
              Post 2
            </a>
          </li>
          <li className="mb-2">
            <a href="#" className="text-blue-500 hover:underline">
              Post 3
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default BlogLayout;
