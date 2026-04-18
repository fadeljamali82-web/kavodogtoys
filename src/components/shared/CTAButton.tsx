import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

interface CTAButtonProps {
  to?: string;
  children: string;
  variant?: 'primary' | 'lime' | 'softwhite';
  className?: string;
}

export default function CTAButton({ to = '#', children, variant = 'primary', className = '' }: CTAButtonProps & { as?: any }) {
  const styles = {
    primary: 'bg-teal text-midnight hover:bg-teal/90',
    lime: 'bg-lime text-midnight hover:bg-lime/90',
    softwhite: 'bg-softwhite text-midnight hover:bg-bone',
  }[variant];

  const isExternal = to.startsWith('http') || to.startsWith('mailto');
  const buttonContent = (
    <div className={`${styles} px-9 py-[18px] rounded-full font-bold text-base tracking-wide transition-all shadow-md flex items-center justify-center gap-3 group`}>
      {children}
      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
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
