import React, { useState } from "react";

function UploadForm() {
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);
  const types = ["image/png", "image/jpeg"];

  const changeHandler = (e) => {
    let selected = e.target.files[0];
    if (selected && types.includes(selected.type)) {
      setFile(selected);
      setError(null);
    } else {
      setFile(selected);
      setError("Please select an image file(png or jpeg)");
    }
  };
  return (
    <div>
      <input type="file" onChange={changeHandler} />
      <span>+</span>
      <div className="output">
        {error && <div className="error">{error}</div>}
        {file && <div>{file.name}</div>}
      </div>
    </div>
  );
}

export default UploadForm;
