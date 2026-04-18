import { motion } from 'motion/react';
import { siteContent } from '@/src/lib/content';
import Section from '@/src/components/shared/Section';
import CTAButton from '@/src/components/shared/CTAButton';
import ImageCard from '@/src/components/shared/ImageCard';

export default function ProductPreview() {
  const { headline, body, image, cta, features } = siteContent.home.productIntro;
  return (
    <Section variant="midnight">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="order-2 lg:order-1 space-y-8">
          <span className="text-xs font-bold uppercase tracking-widest text-lime underline underline-offset-8">This is GRABO™</span>
          <h2 className="text-4xl md:text-6xl tracking-tight text-softwhite leading-[1.1]">{headline}</h2>
          <p className="text-xl text-softwhite/70 leading-relaxed max-w-lg mb-8 font-light">
            {body}
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
            {features.map((feature) => (
              <div key={feature.title} className="space-y-2">
                <h4 className="text-softwhite text-xs font-bold uppercase tracking-wider">{feature.title}</h4>
                <p className="text-softwhite/50 text-[10px] uppercase tracking-wide leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>

          <CTAButton to="/product" variant="lime">
            {cta}
          </CTAButton>
        </div>
        <div className="order-1 lg:order-2">
          <ImageCard src={image} alt={headline} aspectRatio="aspect-[3/4]" />
        </div>
      </div>
    </Section>
  );
}
