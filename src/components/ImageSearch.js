import React from 'react'
import discover from '../assets/images/discover.svg'

const ImageSearch = () => {
  return (
    <div className="relative mx-5 px-4 py-6 border border-gray-200 rounded-lg shadow-sm overflow-hidden sm:px-6 sm:py-8 lg:p-12 xl:p-16">
      <h2 className="text-2xl leading-8 font-semibold font-display text-gray-900 sm:text-3xl sm:leading-9">
        Tailwind Gallery
      </h2>
      <p className="mt-2 max-w-2xl text-base leading-6 text-gray-500">
        Here you can search an image from billion images on pixabay. <br/> 
        Just enter some text below and hit Search.
      </p>
      <form x-data="signupForm()" className="mt-6">
        <div className="sm:flex">
          <input type="text" required placeholder="Enter your theme" className="block w-full px-4 py-3 text-base leading-6 appearance-none border border-gray-300 shadow-none bg-white rounded-md placeholder-gray-500 focus:outline-none focus:shadow-outline-blue focus:border-green-800 sm:max-w-xs"/>
          <button className="mt-4 relative w-full px-6 py-3 text-base font-semibold leading-snug bg-gray-900 text-white rounded-md shadow-md focus:outline-none focus:bg-green-800 transition ease-in-out duration-150 hover:bg-green-800 sm:mt-0 sm:h-auto sm:ml-4 sm:w-auto">
            <span className="submitting">Search</span>
          </button>
        </div>
        <p x-show="error" x-text="error" className="lg:absolute mt-4 text-white max-w-xl font-medium"></p>
      </form>
      <div className="hidden absolute inset-y-0 mr-20 mt-4 right-0 lg:block">
        <img className="w-fulll h-full object-cover object-left" src={discover} alt="Tailwind Gallery illustration"/>
      </div>
    </div>
    )
}

export default ImageSearch;