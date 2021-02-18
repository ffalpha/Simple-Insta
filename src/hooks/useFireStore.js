import { useState, useEffect } from "react";
import { projectFireStore } from "../firebase/config";

//getting all documents

const useFirestore = (collection) => {
  const [docs, setDocs] = useState([]);
  const [loading, setloading] = useState(true);
  useEffect(() => {
    projectFireStore
      .collection(collection)
      .orderBy("createdAt", "desc")
      .onSnapshot((snap) => {
        let documents = [];
        snap.forEach((doc) => {
          documents.push({ ...doc.data(), id: doc.id });
        });

        setDocs(documents);
        setloading(false);
      });
  }, [collection]);

  return { docs, loading };
};

export default useFirestore;
