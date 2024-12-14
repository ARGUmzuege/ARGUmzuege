import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

interface AnimatedLinkProps {
  to: string;
  children: React.ReactNode;
  className?: string;
}

export const AnimatedLink = ({ to, children, className }: AnimatedLinkProps) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      <Link to={to} className={className}>
        {children}
      </Link>
    </motion.div>
  );
}; 