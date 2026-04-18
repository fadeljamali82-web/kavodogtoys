import { siteContent } from '@/src/lib/content';
import PageHero from '@/src/components/layout/PageHero';
import Section from '@/src/components/shared/Section';
import CTAButton from '@/src/components/shared/CTAButton';
import ImageCard from '@/src/components/shared/ImageCard';
import SecondaryButton from '@/src/components/shared/SecondaryButton';

export default function Product() {
  const { hero, details, useCases } = siteContent.product;

  return (
    <main>
      <PageHero title={hero.title} subtitle={hero.subtitle} image={hero.image}>
        <CTAButton to="/back-the-project" variant="lime">Back the Project</CTAButton>
        <SecondaryButton to="/materials" className="text-softwhite border-softwhite hover:bg-softwhite hover:text-midnight">
          See the Science
        </SecondaryButton>
      </PageHero>
      
      <Section variant="light">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <span className="text-xs font-bold uppercase tracking-widest text-teal underline underline-offset-8">Product Design</span>
            <h2 className="text-4xl md:text-5xl">{details.headline}</h2>
            <p className="text-xl text-midnight/70 leading-relaxed font-light">
              {details.body}
            </p>
            <div className="grid grid-cols-1 gap-6 pt-4">
              {details.features.map(feature => (
                <div key={feature.title} className="flex gap-4">
                  <div className="w-1.5 h-1.5 rounded-full bg-teal mt-2 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-sm uppercase tracking-wider">{feature.title}</h4>
                    <p className="text-sm text-midnight/60">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <ImageCard src={details.image} alt="GRABO design" />
        </div>
      </Section>

      <Section variant="bone">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-teal underline underline-offset-8">Performance</span>
          <h2 className="text-4xl md:text-5xl mt-8 mb-6">{useCases.headline}</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {useCases.cases.map((useCase) => (
            <div key={useCase.title} className="bg-softwhite p-8 rounded-[32px] border border-midnight/5 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-display font-bold mb-4">{useCase.title}</h3>
              <p className="text-midnight/60 leading-relaxed font-light">{useCase.text}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-16">
          <ImageCard src={useCases.image} alt="Play scenario" aspectRatio="aspect-video" />
          <ImageCard src={useCases.detailImage} alt="Detail view" aspectRatio="aspect-video" />
        </div>
      </Section>

      <Section variant="midnight" className="text-center">
        <h2 className="text-4xl md:text-5xl text-softwhite mb-10">Ready to choose your size?</h2>
        <CTAButton to="/sizes" variant="lime">Choose your size</CTAButton>
      </Section>
    </main>
  );
}
