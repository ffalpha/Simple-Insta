import { useState, useEffect } from "react";
import {
  projectStorage,
  projectFireStore,
  timestamp,
} from "../firebase/config";

//Hooks mean resuble code
//responsible for uplaoding

const useStorage = (file) => {
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState(null);
  const [url, setUrl] = useState(null);
  console.log(progress);

  //when file change usefffet fire everytime
  useEffect(() => {
    //reffernce
    const storageRef = projectStorage.ref(file.name);
    const collectionRef = projectFireStore.collection("images");
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
        const createdAt = timestamp();
        collectionRef.add({ url, createdAt });
        setUrl(url);
      }
    );
  }, [file]);

  return { progress, url, error };
};

export default useStorage;
