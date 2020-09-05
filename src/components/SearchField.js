import React, { useState } from "react";

const SearchField = ({ searchText, placeholder }) => {
  const [text, setText] = useState("");
  const onSubmit = (e) => {
    e.preventDefault();
    searchText(text);
  };
  return (
    <form onSubmit={onSubmit} className="mt-6">
      <div className="sm:flex">
        <input
          onChange={(e) => setText(e.target.value)}
          type="text"
          required
          placeholder={placeholder}
          className="block w-full px-4 py-3 text-base leading-6 appearance-none border border-gray-300 shadow-none bg-white rounded-md placeholder-gray-500 focus:outline-none focus:shadow-outline-blue focus:border-green-800 sm:max-w-xs"
        />
        <button className="mt-4 relative w-full px-6 py-3 text-base font-semibold leading-snug bg-gray-900 text-white rounded-md shadow-md focus:outline-none focus:bg-green-800 transition ease-in-out duration-150 hover:bg-green-800 sm:mt-0 sm:h-auto sm:ml-4 sm:w-auto">
          <span className="submitting">Search</span>
        </button>
      </div>
    </form>
  );
};

export default SearchField;
