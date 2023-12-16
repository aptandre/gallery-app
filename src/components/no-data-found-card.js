import React from "react";

const NoDataFoundCard = () => {
    return (
        <div className="flex max-w-sm my-auto mx-auto">
            <img className="max-w-48 max-h-32"  src="https://cdn.pixabay.com/photo/2012/04/10/23/44/compress-27103_640.png" alt="" />

            <div>
                <h1 className="text-center text-4xl font-bold">Sorry!</h1>
                <h2 className="text-center mt-6 text-1xl font-bold">It appears that no images were found for your query.</h2>
            </div>
            
        </div>
    );
}

export default NoDataFoundCard;