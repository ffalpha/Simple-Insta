import { useState, useEffect } from "react";
import { projectStorage } from "../firebase/config";

//responsible for uplaoding

const useStorage = (file) => {
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState(null);
  const [url, setUrl] = useState(null);
};
