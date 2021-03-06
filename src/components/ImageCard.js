import React from "react";

const ImageCard = ({ image }) => {
  const tags = image.tags.split(",");

  return (
    <div className="max-w-sm mx-auto my-5 pb-5 rounded overflow-hidden border border-gray-200 shadow-sm md:mx-5">
      <img
        className="w-full h-56 object-cover"
        src={image.webformatURL}
        alt={tags}
      />
      <div className="px-6 pt-6">
        <div className="font-bold text-xl mb-2">{image.user}</div>
      </div>
      <div className="px-6 pt-3">
        <ul>
          <li>
            <strong>Views: </strong> {image.views}
          </li>
          <li>
            <strong>Downloads: </strong> {image.downloads}
          </li>
          <li>
            <strong>Likes:</strong> {image.likes}
          </li>
        </ul>
      </div>
      <div className="px-6 pt-4">
        {tags.map((tag, index) => (
          <span
            key={index}
            className="mr-2 px-2 inline-flex text-xs leading-4 font-semibold rounded-full bg-gray-200 text-gray-800"
          >
            #{tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ImageCard;
