import React, { useState, useEffect } from "react";
import ImageCard from "./components/image-card.js"
import ImageSearch from "./components/image-search.js"
import NoDataFoundCard from "./components/no-data-found-card.js";
import LoadingCard from "./components/loading-card.js";

function App() {

  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [term, setTerm] = useState("");

  useEffect(() => {
    fetch(`https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=${term}&image_type=photo`)
    .then(res => res.json())
    .then(data => {
      setImages(data.hits);
      setIsLoading(false);
    })
    .catch(err => console.log(err));
  }, [term]);

  return (
    <div className="container mx-auto">

      <ImageSearch searchText={(text) => setTerm(text)}></ImageSearch>

      {

        !isLoading &&
        images.length === 0 &&
        <NoDataFoundCard></NoDataFoundCard>
      
      }

      {
        isLoading ?
        <LoadingCard></LoadingCard> :
        <div className="grid grid-cols-4 gap-4">
          {
            images.map(image => (
              <ImageCard key={image.id} image={image}></ImageCard>
            ))
          }
        </div>
    }
    </div>
  );
}

export default App;
