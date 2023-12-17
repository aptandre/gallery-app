import React, { useState, useEffect } from "react";
import ImageCard from "./components/image-card.js"
import ImageSearch from "./components/image-search.js"
import NoDataFoundCard from "./components/no-data-found-card.js";
import LoadingCard from "./components/loading-card.js";
import WifiConnectionLostComponent from "./components/wifi-connection.js";

function App() {

  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [term, setTerm] = useState("");
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=${term}&image_type=photo`)
    .then(res => res.json())
    .then(data => {
      setError(null);
      setImages(data.hits);
      setIsLoading(false);
    })
    .catch(err => {
      setError(err);
      setIsLoading(false);
    });
  }, [term]);

  return (
    <div className="container mx-auto">
      {error ? (
        <WifiConnectionLostComponent></WifiConnectionLostComponent>
      ) : (
        <div className="container">

          <ImageSearch searchText={(text) => setTerm(text)} />
  
          {!isLoading && images.length === 0 && <NoDataFoundCard/>}
  
          {
            isLoading ? (
              <LoadingCard />
            ) : (
              <div className="grid grid-cols-4 gap-4">

                {images.map((image) => (
                  <ImageCard key={image.id} image={image} />
                ))}

              </div>
          )
        }
        </div>
      )}
    </div>
  );
  
}

export default App;
