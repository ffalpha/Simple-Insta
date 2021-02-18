import React from "react";
import useFireStore from "../hooks/useFireStore";
function ImageGrid() {
  const { docs, loading } = useFireStore("images");
  console.log(loading);
  return (
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
