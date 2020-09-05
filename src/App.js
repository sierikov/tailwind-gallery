import React, { useState, useEffect } from "react";
import Loader from "./components/Loader";
import Gallery from "./components/Gallery";
import ImageSearch from "./components/ImageSearch";

function App() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [term, setTerm] = useState("");

  useEffect(() => {
    fetch(
      `https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=${term}&image_type=photo`
    )
      .then((res) => res.json())
      .then((data) => {
        setImages(data.hits);
        setIsLoading(false);
      })
      .catch((error) => console.error(error));
  }, [term]);
  return (
    <div className="container mx-auto my-10">
      <ImageSearch searchText={(text) => setTerm(text)} />
      {isLoading ? <Loader /> : <Gallery images={images} />}
    </div>
  );
}

export default App;
