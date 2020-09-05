import React from "react";
import SearchField from "./SearchField";

import discover from "../assets/images/discover.svg";

const ImageSearch = ({ searchText }) => {
  return (
    <div className="relative mx-5 px-4 py-6 border border-gray-200 rounded-lg shadow-sm overflow-hidden sm:px-6 sm:py-8 lg:p-12 xl:p-16">
      <h2 className="text-2xl leading-8 font-semibold font-display text-gray-900 sm:text-3xl sm:leading-9">
        Tailwind Gallery
      </h2>
      <p className="mt-2 max-w-2xl text-base leading-6 text-gray-500">
        Here you can search an image from billion images on pixabay. <br />
        Just enter some text below and hit Search.
      </p>
      <SearchField searchText={searchText} placeholder="Enter your theme" />
      <div className="hidden absolute inset-y-0 mr-20 mt-4 right-0 lg:block">
        <img
          className="w-fulll h-full object-cover object-left"
          src={discover}
          alt="Tailwind Gallery illustration"
        />
      </div>
    </div>
  );
};

export default ImageSearch;
