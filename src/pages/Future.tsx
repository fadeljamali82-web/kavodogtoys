import { siteContent } from '@/src/lib/content';
import PageHero from '@/src/components/layout/PageHero';
import Section from '@/src/components/shared/Section';
import CTAButton from '@/src/components/shared/CTAButton';
import ImageCard from '@/src/components/shared/ImageCard';

export default function Future() {
  const { hero, concepts, vision } = siteContent.future;

  return (
    <main>
      <PageHero title={hero.title} subtitle={hero.subtitle} image={hero.image} />
      
      <Section variant="light">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-xs font-bold uppercase tracking-widest text-teal underline underline-offset-8">Roadmap</span>
          <h2 className="text-4xl md:text-5xl my-8">Concepts in progress</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {concepts.map((concept) => (
            <div key={concept.title} className="p-12 bg-bone rounded-[48px] border border-midnight/5 hover:border-teal/20 transition-colors">
              <h3 className="text-3xl font-display font-bold mb-4">{concept.title}</h3>
              <p className="text-midnight/60 text-lg font-light leading-relaxed">
                {concept.description}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <Section variant="bone">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl leading-tight">{vision.headline}</h2>
            <p className="text-xl text-midnight/70 font-light leading-relaxed">
              {vision.body}
            </p>
            <CTAButton to="/back-the-project" variant="primary">Back the Project</CTAButton>
          </div>
          <ImageCard src={vision.image} alt="Future vision" />
        </div>
      </Section>
    </main>
  );
}
