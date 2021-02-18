import { useState, useEffect } from "react";
import { projectStorage, projectFireStore } from "../firebase/config";

//Hooks mean resuble code
//responsible for uplaoding

const useStorage = (file) => {
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState(null);
  const [url, setUrl] = useState(null);

  //when file change usefffet fire everytime
  useEffect(() => {
    //reffernce
    const storageRef = projectStorage.ref(file.name);
    storageRef.put(file).on(
      "state_changed",
      (snap) => {
        let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
        setProgress(percentage);
      },
      (err) => {
        setError(err);
      },
      async () => {
        const url = await storageRef.getDownloadURL();
        setUrl(url);
      }
    );
  }, [file]);

  return { progress, url, error };
};

export default useStorage;
