import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp, MessageCircle, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const FloatingCTA = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const buttonVariants = {
    initial: { scale: 0, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
    exit: { scale: 0, opacity: 0 },
    hover: { scale: 1.1 },
    tap: { scale: 0.9 },
  };

  return (
    <div className="fixed bottom-8 right-8 z-50 flex flex-col gap-4 items-center">
      <AnimatePresence>
        {isVisible && (
          <motion.button
            key="top"
            variants={buttonVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            whileHover="hover"
            whileTap="tap"
            onClick={scrollToTop}
            className="p-3 bg-white dark:bg-zinc-800 text-black dark:text-white rounded-full shadow-lg border border-gray-200 dark:border-zinc-700 transition-colors hover:bg-gray-50 dark:hover:bg-zinc-700"
            aria-label="Scroll to top"
          >
            <ArrowUp size={24} />
          </motion.button>
        )}
      </AnimatePresence>

      <motion.a
        href="https://open.kakao.com/o/svQrVCw"
        target="_blank"
        rel="noopener noreferrer"
        variants={buttonVariants}
        initial="animate"
        animate="animate"
        whileHover="hover"
        whileTap="tap"
        className="p-3 bg-[#FEE500] text-[#3c1e1e] rounded-full shadow-lg hover:shadow-xl transition-shadow"
        aria-label="KakaoTalk Inquiry"
      >
        <MessageCircle size={24} fill="currentColor" />
      </motion.a>

      <Link to="/contact">
        <motion.button
          variants={buttonVariants}
          initial="animate"
          animate="animate"
          whileHover="hover"
          whileTap="tap"
          className="p-3 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition-colors"
          aria-label="Contact Us"
        >
          <Mail size={24} />
        </motion.button>
      </Link>
    </div>
  );
};

export default FloatingCTA;
