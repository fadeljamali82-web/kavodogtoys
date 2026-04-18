import { Link } from 'react-router-dom';
import { motion } from 'motion/react';

interface SecondaryButtonProps {
  to: string;
  children: string;
  className?: string;
}

export default function SecondaryButton({ to, children, className = '' }: SecondaryButtonProps) {
  const isExternal = to.startsWith('http') || to.startsWith('mailto');
  const buttonContent = (
    <div className="px-9 py-[18px] rounded-full font-bold text-base tracking-wide border-2 border-midnight hover:bg-midnight hover:text-softwhite transition-all text-center inline-block">
      {children}
    </div>
  );

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`inline-block ${className}`}
    >
      {isExternal ? (
        <a href={to} target="_blank" rel="noopener noreferrer">
          {buttonContent}
        </a>
      ) : (
        <Link to={to}>
          {buttonContent}
        </Link>
      )}
    </motion.div>
  );
}
