import React from "react";
import '../styles/loading-display.css'

const LoadingDisplay = () => {
  return (
    <div className="overlay">
      <div className="lds-ripple">
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default LoadingDisplay;
