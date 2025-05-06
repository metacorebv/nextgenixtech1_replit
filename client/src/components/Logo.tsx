import { motion } from "framer-motion";

interface LogoProps {
  className?: string;
}

const Logo = ({ className = "h-8 w-auto" }: LogoProps) => {
  return (
    <motion.svg
      className={className}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
    >
      {/* Animated glowing background */}
      <motion.circle 
        cx="24" 
        cy="24" 
        r="20" 
        fill="url(#gradient)"
        animate={{ 
          opacity: [0.7, 0.9, 0.7], 
          scale: [1, 1.02, 1] 
        }}
        transition={{
          repeat: Infinity,
          duration: 3,
          ease: "easeInOut"
        }}
      />
      
      {/* Abstract tech shape */}
      <motion.path 
        d="M24 10L14 16L24 22L34 16L24 10Z" 
        fill="hsl(var(--background))" 
        animate={{ 
          y: [0, 0.5, 0] 
        }}
        transition={{
          repeat: Infinity,
          duration: 2,
          ease: "easeInOut"
        }}
      />
      
      {/* Grid lines */}
      <path
        d="M14 25L24 31L34 25"
        stroke="hsl(var(--accent))"
        strokeWidth="1.5"
        strokeDasharray="1 2"
      />
      
      {/* Tech circuit lines */}
      <path
        d="M14 20L24 26L34 20"
        stroke="hsl(var(--secondary))"
        strokeWidth="1.5"
      />
      
      {/* Central element */}
      <circle cx="24" cy="24" r="2" fill="hsl(var(--primary))" />
      
      {/* Connecting lines */}
      <path d="M24 22V16" stroke="hsl(var(--primary))" strokeWidth="1.5" />
      <path d="M24 26V31" stroke="hsl(var(--primary))" strokeWidth="1.5" />
      <path d="M22 24H16" stroke="hsl(var(--primary))" strokeWidth="1.5" />
      <path d="M26 24H32" stroke="hsl(var(--primary))" strokeWidth="1.5" />
      
      {/* Gradient definition */}
      <defs>
        <radialGradient id="gradient" cx="0.5" cy="0.5" r="0.5" fx="0.5" fy="0.5">
          <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.7" />
          <stop offset="100%" stopColor="hsl(var(--secondary))" stopOpacity="0" />
        </radialGradient>
      </defs>
    </motion.svg>
  );
};

export default Logo;
