import React from 'react';
import useFirestore from '../hooks/useFirestore';
import { motion } from 'framer-motion';

const ImgaeGrid = ({ setSelectedimg }) => {
  const [docs] = useFirestore('user-images');

  return (
    <div className="img-grid">
      {docs &&
        docs.map((doc) => (
          <motion.div className="img-wrap" layout key={doc.id} onClick={() => setSelectedimg(doc.url)}>
            <motion.img
              src={doc.url}
              alt="images"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            />
          </motion.div>
        ))}
    </div>
  );
};

export default ImgaeGrid;
