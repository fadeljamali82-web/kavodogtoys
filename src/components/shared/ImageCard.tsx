import { motion } from 'motion/react';

interface ImageCardProps {
  src: string;
  alt: string;
  className?: string;
  aspectRatio?: string;
}

export default function ImageCard({ src, alt, className = '', aspectRatio = 'aspect-[4/3]' }: ImageCardProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`relative overflow-hidden rounded-3xl group ${aspectRatio} ${className}`}
    >
      <img 
        src={src} 
        alt={alt} 
        referrerPolicy="no-referrer"
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-midnight/10 group-hover:bg-midnight/0 transition-colors duration-500" />
    </motion.div>
  );
}
