import React from "react";
import Loader from "react-loader-spinner";
function LoadingSpinner() {
  return (
    <div styles=" position: relative; ">
      <Loader type="Bars" color="#00BFFF" height={80} width={80} />
    </div>
  );
}

export default LoadingSpinner;
