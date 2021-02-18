import React from "react";
import useFireStore from "../hooks/useFireStore";
import LoadingSpinner from "./LoadingSpinner";
import { motion } from "framer-motion";
function ImageGrid({ setSelectedImg }) {
  const { docs, loading } = useFireStore("images");
  console.log(loading);
  return loading ? (
    <LoadingSpinner />
  ) : (
    <div className="img-grid">
      {docs &&
        docs.map((doc) => (
          <motion.div
            className="img-wrap"
            key={doc.id}
            whileHover={{ opacity: 1 }}
            layout
            onClick={() => setSelectedImg(doc.url)}
          >
            <motion.img
              src={doc.url}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            />
          </motion.div>
        ))}
    </div>
  );
}

export default ImageGrid;
