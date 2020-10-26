import React from 'react';
import { motion } from 'framer-motion';

function Model({ selectedImg, setSelectedimg }) {
  const handleClick = (e) => {
    if (e.target.classList.contains('backdrop')) {
      setSelectedimg(null);
    }
  };

  return (
    <motion.div className="backdrop" initial={{ opacity: 0 }} animate={{ opacity: 1 }} onClick={handleClick}>
      {/* <img src={selectedImg} alt="large pig" onClick={(e) => e.stopPropagation()} /> */}
      <motion.img src={selectedImg} alt="large pig" initial={{ y: '-100vh' }} animate={{ y: 0 }} />
    </motion.div>
  );
}

export default Model;
