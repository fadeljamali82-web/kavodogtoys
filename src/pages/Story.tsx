import { siteContent } from '@/src/lib/content';
import PageHero from '@/src/components/layout/PageHero';
import Section from '@/src/components/shared/Section';
import ImageCard from '@/src/components/shared/ImageCard';
import CTAButton from '@/src/components/shared/CTAButton';

export default function Story() {
  const { hero, dcSection, problemSection, turningPoint, resultSection } = siteContent.story;

  return (
    <main>
      <PageHero title={hero.title} subtitle={hero.subtitle} image={hero.image} />
      
      {/* DC Section */}
      <Section variant="light">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <ImageCard src={dcSection.image} alt={dcSection.headline} />
          <div className="space-y-8">
            <span className="text-xs font-bold uppercase tracking-widest text-teal">Our Inspiration</span>
            <h2 className="text-4xl md:text-5xl">{dcSection.headline}</h2>
            <p className="text-xl text-midnight/70 leading-relaxed font-light">
              {dcSection.body}
            </p>
          </div>
        </div>
      </Section>

      {/* Problem Section */}
      <Section variant="bone">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center lg:flex-row-reverse">
          <div className="lg:order-2">
            <ImageCard src={problemSection.image} alt={problemSection.headline} />
          </div>
          <div className="space-y-8 lg:order-1">
            <span className="text-xs font-bold uppercase tracking-widest text-teal">The Problem</span>
            <h2 className="text-4xl md:text-5xl">{problemSection.headline}</h2>
            <p className="text-xl text-midnight/70 leading-relaxed font-light mb-8">
              {problemSection.body}
            </p>
            <div className="space-y-6">
              {problemSection.points.map(point => (
                <div key={point.title} className="flex gap-4">
                  <div className="w-1.5 h-1.5 rounded-full bg-teal mt-2 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-sm uppercase tracking-wider mb-1">{point.title}</h4>
                    <p className="text-sm text-midnight/60">{point.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Turning Point */}
      <Section variant="light">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <ImageCard src={turningPoint.image} alt={turningPoint.headline} />
          <div className="space-y-8">
            <span className="text-xs font-bold uppercase tracking-widest text-teal">The Research</span>
            <h2 className="text-4xl md:text-5xl">{turningPoint.headline}</h2>
            <p className="text-xl text-midnight/70 leading-relaxed font-light">
              {turningPoint.body}
            </p>
          </div>
        </div>
      </Section>

      {/* Production Section */}
      <Section variant="bone">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <span className="text-xs font-bold uppercase tracking-widest text-teal underline underline-offset-8">Production</span>
            <h2 className="text-4xl md:text-5xl">{siteContent.production.section.headline}</h2>
            <p className="text-xl text-midnight/70 font-light leading-relaxed">
              {siteContent.production.section.body}
            </p>
            <div className="grid grid-cols-1 gap-4 pt-6">
              {siteContent.production.section.points.map(point => (
                <div key={point.title} className="p-6 bg-softwhite rounded-3xl border border-midnight/5">
                  <h4 className="font-bold text-sm uppercase tracking-wider mb-2">{point.title}</h4>
                  <p className="text-sm text-midnight/60">{point.text}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-midnight/10 rounded-[60px] aspect-square flex items-center justify-center p-20">
             <div className="text-center">
                <p className="text-sm font-bold uppercase tracking-widest text-midnight/40 mb-4">Values First</p>
                <p className="text-5xl font-display font-black text-midnight/20">CRAFT</p>
             </div>
          </div>
        </div>
      </Section>

      {/* Result Section */}
      <Section variant="midnight">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <span className="text-xs font-bold uppercase tracking-widest text-lime">The Result</span>
            <h2 className="text-4xl md:text-5xl text-softwhite">{resultSection.headline}</h2>
            <p className="text-xl text-softwhite/70 leading-relaxed font-light">
              {resultSection.body}
            </p>
            <div className="pt-8">
              <p className="font-display font-bold text-xl text-softwhite">{resultSection.founder}</p>
              <p className="text-softwhite/40 text-sm">{resultSection.title}</p>
            </div>
          </div>
          <div className="relative">
            <ImageCard src={resultSection.image} alt="GRABO proof" />
          </div>
        </div>
      </Section>

      <Section variant="teal" className="text-center">
        <h2 className="text-4xl md:text-5xl mb-10">{resultSection.cta}</h2>
        <CTAButton to="/product" variant="primary">Explore our product</CTAButton>
      </Section>
    </main>
  );
}
