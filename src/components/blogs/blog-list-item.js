import React from "react";

const BlogListItem = ({
  blogtitle,
  blogcontent,
  featuredimage,
  categories,
}) => {
//   const categoryNames = categories?.map((category) => category.categoryname);
  const imageUrl = `http://localhost:1338${featuredimage.formats.thumbnail.url}`;
  return (
    <div className="bg-white shadow-lg rounded-lg p-4 mb-4 flex flex-col items-center text-center max-w-md mx-auto">
      {/* <div className="text-sm text-gray-600 font-semibold mb-2">
        {categoryNames}
      </div> */}
      <img
        className="w-full h-48 object-cover rounded-md mb-4"
        src={imageUrl}
        alt={blogtitle}
      />
      <h3 className="text-xl font-bold text-gray-800 mb-2">{blogtitle}</h3>
      <p className="text-gray-700 text-sm">
        {blogcontent[0]?.children[0]?.text || "No content available."}
      </p>
    </div>
  );
};

export default BlogListItem;
