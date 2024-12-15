import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';



const overlayVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 0.5 },
};

const spinnerVariants = {
  hidden: { scale: 0, opacity: 0 },
  visible: { scale: 1, opacity: 1 },
};

const LoadingOverlay = () => {
  return (
    <AnimatePresence>
      
        <motion.div
          className="absolute top-0 left-0 w-full h-full bg-primary z-50 flex items-center justify-center"
          variants={overlayVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
          transition={{ duration: 0.3 }}
        >
          <motion.img
            src="/assets/spinner.svg"
            alt="Loading..."
            className="w-14 h-14"
            variants={spinnerVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            transition={{ duration: 0.3 }}
          />
        </motion.div>
      
    </AnimatePresence>
  );
};

export default LoadingOverlay;
