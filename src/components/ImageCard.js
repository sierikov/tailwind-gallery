import React from 'react'

const ImageCard = () => {
  return (
    <div className="max-w-sm my-5 pb-5 rounded overflow-hidden shadow-lg">
      <img className="w-full" src="https://source.unsplash.com/random?800x600" alt="Random from unsplash"/>
      <div className="px-6 pt-6">
        <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
        <p className="text-gray-700 text-base">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
        </p>
      </div>
      <div className="px-6 pt-4">
        <ul>
          <li><strong>Views: </strong> test</li>
          <li><strong>Downloads: </strong> 300</li>
          <li><strong>Likes:</strong> 400</li>
        </ul>
      </div>
      <div className="px-6 pt-4">
        <span className="mr-2 px-2 inline-flex text-xs leading-4 font-semibold rounded-full bg-gray-200 text-gray-800">#photography</span>
        <span className="mr-2 px-2 inline-flex text-xs leading-4 font-semibold rounded-full bg-gray-200 text-gray-800">#travel</span>
        <span className="mr-2 px-2 inline-flex text-xs leading-4 font-semibold rounded-full bg-gray-200 text-gray-800">#winter</span>
      </div>  
    </div>
  )
}

export default ImageCard;