import { motion } from 'motion/react';
import { siteContent } from '@/src/lib/content';
import Section from '@/src/components/shared/Section';
import CTAButton from '@/src/components/shared/CTAButton';
import ImageCard from '@/src/components/shared/ImageCard';

export default function StoryPreview() {
  const { headline, body, image, cta } = siteContent.home.founderStory;
  return (
    <Section variant="light">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <ImageCard src={image} alt={headline} aspectRatio="aspect-square" />
        <div className="space-y-8">
          <span className="text-xs font-bold uppercase tracking-widest text-teal underline underline-offset-8">Our Roots</span>
          <h2 className="text-4xl md:text-6xl tracking-tight leading-[1.1]">{headline}</h2>
          <p className="text-xl text-midnight/70 leading-relaxed max-w-lg whitespace-pre-line font-light">
            {body}
          </p>
          <CTAButton to="/story" variant="primary">
            {cta}
          </CTAButton>
        </div>
      </div>
    </Section>
  );
}
