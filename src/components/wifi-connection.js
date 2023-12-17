import React from "react";
import wifiImage from "../assets/dead-wifi.jpg"

const WifiConnectionLostComponent = () => {
    return (
        <div className="flex my-auto mx-auto items-center">
            <img src={wifiImage} alt="" />
            <h1 className="text-3xl font-bold text-red-500">Oops! Looks like you lost your connection! Please, try again.</h1>
        </div>
    );
}

export default WifiConnectionLostComponent;