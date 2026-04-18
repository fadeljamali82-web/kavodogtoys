import { motion } from 'motion/react';
import { siteContent } from '@/src/lib/content';
import Section from '@/src/components/shared/Section';
import CTAButton from '@/src/components/shared/CTAButton';

export default function BackProjectCTA() {
  const { headline, body, image, cta } = siteContent.home.backingSection;
  return (
    <section className="relative py-40 px-6 overflow-hidden bg-midnight text-softwhite">
      <img 
        src={image} 
        alt="Back the Project" 
        referrerPolicy="no-referrer"
        className="absolute inset-0 w-full h-full object-cover opacity-30"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-midnight via-midnight/60 to-midnight/20" />
      
      <div className="container mx-auto relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <span className="text-xs font-bold uppercase tracking-widest text-lime mb-8 block underline underline-offset-8">Join the journey</span>
          <h2 className="text-5xl md:text-7xl mb-8 tracking-tighter leading-tight">{headline}</h2>
          <p className="text-xl md:text-2xl text-softwhite/70 mb-12 font-light leading-relaxed max-w-2xl mx-auto">
            {body}
          </p>
          <CTAButton to="/back-the-project" variant="lime">
            {cta}
          </CTAButton>
        </motion.div>
      </div>
    </section>
  );
}
