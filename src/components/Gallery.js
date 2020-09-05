import React from "react";
import ImageCard from "./ImageCard";

const Gallery = ({ images }) => {
  return (
    <div className="grid  lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 grid-gap-4 ">
      {images.map((image) => (
        <ImageCard key={image.id} image={image} />
      ))}
    </div>
  );
};

export default Gallery;
