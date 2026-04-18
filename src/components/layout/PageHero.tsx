import React from 'react';
import { motion } from 'motion/react';

interface PageHeroProps {
  title: string;
  subtitle: string;
  image: string;
  alignment?: 'left' | 'center';
  children?: React.ReactNode;
}

export default function PageHero({ title, subtitle, image, alignment = 'center', children }: PageHeroProps) {
  return (
    <section className="relative h-[80vh] min-h-[650px] flex items-center overflow-hidden bg-midnight">
      <img 
        src={image} 
        alt={title} 
        referrerPolicy="no-referrer"
        className="absolute inset-0 w-full h-full object-cover opacity-60 scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-midnight/20 via-midnight/40 to-midnight" />
      
      <div className="container mx-auto px-6 relative z-10 pt-20">
        <div className={`max-w-4xl ${alignment === 'center' ? 'mx-auto text-center' : ''}`}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl text-softwhite mb-8 tracking-[1px] leading-tight whitespace-pre-line">
              {title}
            </h1>
          </motion.div>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className={`text-xl md:text-2xl text-softwhite/80 font-light leading-relaxed mb-12 ${alignment === 'center' ? 'mx-auto max-w-2xl' : ''}`}
          >
            {subtitle}
          </motion.p>

          {children && (
             <motion.div
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
               className={`flex flex-wrap gap-4 ${alignment === 'center' ? 'justify-center' : ''}`}
             >
               {children}
             </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
