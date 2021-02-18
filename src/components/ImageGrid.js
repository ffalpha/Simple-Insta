import React from "react";
import useFireStore from "../hooks/useFireStore";
import LoadingSpinner from "./LoadingSpinner";
function ImageGrid() {
  const { docs, loading } = useFireStore("images");
  console.log(loading);
  return loading ? (
    <LoadingSpinner />
  ) : (
    <div className="img-grid">
      {docs &&
        docs.map((doc) => (
          <div className="img-wrap" key={doc.id}>
            <img src={doc.url} />
          </div>
        ))}
    </div>
  );
}

export default ImageGrid;
