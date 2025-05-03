import { motion } from "framer-motion";
import { Link } from "wouter";

const FloatingCTA = () => {
  return (
    <motion.div 
      className="fixed bottom-6 right-6 z-50"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1, duration: 0.3 }}
    >
      <Link href="/contact">
        <a className="flex items-center justify-center w-14 h-14 bg-primary rounded-full shadow-lg hover:bg-primary/90 transition-colors">
          <i className="fas fa-comment-alt text-white text-xl"></i>
        </a>
      </Link>
    </motion.div>
  );
};

export default FloatingCTA;
