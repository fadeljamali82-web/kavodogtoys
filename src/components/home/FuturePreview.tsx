import { motion } from 'motion/react';
import { siteContent } from '@/src/lib/content';
import Section from '@/src/components/shared/Section';
import CTAButton from '@/src/components/shared/CTAButton';
import ImageCard from '@/src/components/shared/ImageCard';

export default function FuturePreview() {
  const { headline, body, image, cta } = siteContent.home.futurePreview;
  return (
    <Section variant="light">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <ImageCard src={image} alt={headline} aspectRatio="aspect-[4/3]" />
        <div className="space-y-8">
          <span className="text-xs font-bold uppercase tracking-widest text-teal underline underline-offset-8">Vision</span>
          <h2 className="text-4xl md:text-6xl tracking-tight leading-[1.1]">{headline}</h2>
          <p className="text-xl text-midnight/70 leading-relaxed max-w-lg font-light">
            {body}
          </p>
          <CTAButton to="/future" variant="primary">
            {cta}
          </CTAButton>
        </div>
      </div>
    </Section>
  );
}
