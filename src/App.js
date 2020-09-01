import React, {useState, useEffect} from 'react';
import ImageCard from './components/ImageCard';

import loader from './assets/images/loader.gif';

function App() {

  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [term, setTerm] = useState('');

  useEffect(() => {
    fetch(`https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=${term}&image_type=photo`)
      .then(res => res.json())
      .then(data => {
        setImages(data.hits);
        setIsLoading(false);
      })
      .catch(console.error())
  }, []);
  return (
    <div className="container mx-auto">
      {isLoading ? <div className="flex content-center h-screen"> <img className="my-auto mx-auto" src={loader} alt="loader"/></div>
      : <div className="grid  lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 grid-gap-4 ">
        {images.map( image => (
          <ImageCard key={image.id} image={image}/>
        ))}
      </div>}
    </div>
  );
}

export default App;
