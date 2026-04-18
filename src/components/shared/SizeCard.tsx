import React from 'react';
import { motion } from 'motion/react';

interface SizeCardProps {
  name: string;
  dims: string;
  description: string;
  image: string;
  key?: React.Key;
}

export default function SizeCard({ name, dims, description, image }: SizeCardProps) {
  return (
    <motion.div 
      whileHover={{ y: -10 }}
      className="bg-softwhite rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all"
    >
      <div className="aspect-square bg-bone">
        <img 
          src={image} 
          alt={name} 
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-8 text-center">
        <h3 className="text-3xl font-display font-bold mb-2">{name}</h3>
        <span className="inline-block px-4 py-1 bg-teal/10 text-teal rounded-full text-xs font-bold mb-4 uppercase tracking-widest whitespace-nowrap overflow-hidden">
          {dims}
        </span>
        <p className="text-midnight/60">{description}</p>
      </div>
    </motion.div>
  );
}
