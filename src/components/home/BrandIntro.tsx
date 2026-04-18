import { motion } from 'motion/react';
import { siteContent } from '@/src/lib/content';
import Section from '@/src/components/shared/Section';

export default function BrandIntro() {
  const { intro } = siteContent.home;

  return (
    <div className="bg-midnight py-12 px-6 overflow-hidden border-y border-white/5">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 items-start">
          {intro.map((feature, i) => (
            <motion.div 
              key={feature.title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <div className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-teal shadow-[0_0_8px_rgba(46,211,198,0.5)]" />
                <h3 className="text-[11px] font-bold uppercase tracking-[2px] text-softwhite whitespace-nowrap">
                  {feature.title}
                </h3>
              </div>
              <p className="text-softwhite/50 text-xs leading-relaxed max-w-[240px]">
                {feature.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
