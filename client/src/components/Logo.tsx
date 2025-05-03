import { motion } from "framer-motion";

interface LogoProps {
  className?: string;
}

const Logo = ({ className = "h-8 w-auto" }: LogoProps) => {
  return (
    <motion.svg
      className={className}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <path d="M20 4L4 12L20 20L36 12L20 4Z" fill="hsl(var(--primary))" />
      <path
        d="M4 20L20 28L36 20"
        stroke="hsl(var(--secondary))"
        strokeWidth="2"
      />
      <path
        d="M4 28L20 36L36 28"
        stroke="hsl(var(--primary))"
        strokeOpacity="0.5"
        strokeWidth="2"
      />
    </motion.svg>
  );
};

export default Logo;
