import React, { useState } from "react";

const ImageSearch = ({ searchText }) => {
    const [text, setText] = useState('');

    const onSubmit = (event) => {
        event.preventDefault();
        searchText(text);
    }

    return (
        <div className="max-w-sm rounded overflow-hidden my-10 mx-auto border-2 border-b border-b-2 border-purple-500">
            <form onSubmit={onSubmit} action="" className="w-full max-w-sm">
                <div className="flex items-center">
                <input onChange={e => setText(e.target.value)} type="text" className="text-lg appearance-none bg-transparrent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" placeholder="Search for images"/>
                <button className="text-lg flex-shrink-0 bg-purple-500 hover:bg-purple-700 border-purple-500 hover:border-purple-700 text-sm border-4 text-white py-1 px-2 rounded-tl-bl" type="submit">
                    Search
                </button>
                </div>
            </form>
        </div>
    );
}

export default ImageSearch;