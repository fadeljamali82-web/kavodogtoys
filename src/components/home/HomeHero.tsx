import { motion, useScroll, useTransform } from 'motion/react';
import { siteContent } from '@/src/lib/content';
import CTAButton from '@/src/components/shared/CTAButton';
import SecondaryButton from '@/src/components/shared/SecondaryButton';

export default function HomeHero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const { hero } = siteContent.home;

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-bone pt-32 pb-20">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            style={{ opacity }}
            className="max-w-xl"
          >
            <div className="hero-tagline">{hero.eyebrow}</div>
            <h1 className="text-[56px] md:text-[72px] lg:text-[88px] text-midnight mb-8 leading-[0.95] tracking-[-2px] whitespace-pre-line">
              {hero.title}
            </h1>
            <p className="text-lg md:text-xl text-graphite mb-10 font-normal leading-relaxed max-w-lg">
              {hero.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 items-center">
              <CTAButton to="/back-the-project" variant="primary">
                {hero.primaryCTA}
              </CTAButton>
              <SecondaryButton to="/materials">
                {hero.secondaryCTA}
              </SecondaryButton>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-[4/5] bg-midnight/5 rounded-[40px] overflow-hidden relative shadow-2xl">
              <motion.img 
                style={{ y }}
                src={hero.image} 
                alt="KAVO Hero" 
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-midnight/20 to-transparent" />
            </div>
            
            <div className="absolute -bottom-10 -right-6 md:-right-10 bg-midnight text-softwhite p-8 rounded-3xl shadow-2xl min-w-[200px] border border-white/10">
              <span className="text-xs uppercase tracking-widest text-softwhite/60 mb-2 block">Sustainability Score</span>
              <span className="text-4xl font-display font-black text-lime">98.4%</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
