import { motion } from 'motion/react';
import { siteContent } from '@/src/lib/content';
import Section from '@/src/components/shared/Section';
import CTAButton from '@/src/components/shared/CTAButton';
import ImageCard from '@/src/components/shared/ImageCard';

export default function MaterialsPreview() {
  const { headline, body, image, cta } = siteContent.home.materialsPreview;
  return (
    <Section variant="bone">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="order-2 lg:order-1 space-y-8">
          <span className="text-xs font-bold uppercase tracking-widest text-teal underline underline-offset-8">Sustainability</span>
          <h2 className="text-4xl md:text-6xl tracking-tight leading-[1.1]">{headline}</h2>
          <p className="text-xl text-midnight/70 leading-relaxed max-w-lg font-light">
            {body}
          </p>
          <CTAButton to="/materials" variant="primary">
            {cta}
          </CTAButton>
        </div>
        <div className="order-1 lg:order-2">
          <ImageCard src={image} alt={headline} aspectRatio="aspect-square" />
        </div>
      </div>
    </Section>
  );
}
