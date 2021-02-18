import React, { useState } from "react";

function UploadForm() {
  const changeHandler = (e) => {
    let selected = e.target.files[0];
    console.log(selected);
  };
  return (
    <div>
      <input type="file" onChange={changeHandler} />
    </div>
  );
}

export default UploadForm;
