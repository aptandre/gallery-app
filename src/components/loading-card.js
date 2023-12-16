import React from "react";

const LoadingCard = () => {
    return (
        <div className="text-center">
            <div className="max-w-sm inline-block mx-auto">
            <div class="animate-spin rounded-full h-24 w-24 border-t-8 border-b-8 border-purple-900 mb-4 mx-auto"></div>
            <h1 className="text-2xl text-purple-800 font-bold font-roboto">Fetching images...</h1>
        </div>
</div>

    );
}

export default LoadingCard;