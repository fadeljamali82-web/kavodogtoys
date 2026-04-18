import { siteContent } from '@/src/lib/content';
import PageHero from '@/src/components/layout/PageHero';
import Section from '@/src/components/shared/Section';
import CTAButton from '@/src/components/shared/CTAButton';
import ImageCard from '@/src/components/shared/ImageCard';

export default function Materials() {
  const { hero, science, betterSection, endOfLife } = siteContent.materials;
  const { process, patent } = siteContent.research;

  return (
    <main>
      <PageHero title={hero.title} subtitle={hero.subtitle} image={hero.image} />
      
      {/* Science Section */}
      <Section variant="light">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <span className="text-xs font-bold uppercase tracking-widest text-teal underline underline-offset-8">Science</span>
            <h2 className="text-4xl md:text-5xl">{science.headline}</h2>
            <p className="text-xl text-midnight/70 leading-relaxed font-light whitespace-pre-line">
              {science.body}
            </p>
            <div className="space-y-6 pt-6">
              {science.points.map(point => (
                <div key={point.title} className="flex gap-4">
                  <div className="w-1.5 h-1.5 rounded-full bg-teal mt-2" />
                  <div>
                    <h4 className="font-bold text-sm uppercase tracking-wider">{point.title}</h4>
                    <p className="text-sm text-midnight/60">{point.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <ImageCard src={science.image} alt="Science detail" />
        </div>
      </Section>

      {/* R&D Process */}
      <Section variant="midnight">
        <div className="text-center max-w-3xl mx-auto mb-20 text-softwhite">
          <span className="text-xs font-bold uppercase tracking-widest text-lime mb-8 block underline underline-offset-8">The Process</span>
          <h2 className="text-4xl md:text-6xl tracking-tighter">Real R&D. Real results.</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {process.map((item) => (
            <div key={item.step} className="p-10 bg-white/5 border border-white/10 rounded-[40px] hover:bg-white/10 transition-colors">
              <span className="text-4xl font-display font-black text-lime/30 block mb-6">{item.step}</span>
              <h4 className="text-xl font-bold text-softwhite mb-4">{item.title}</h4>
              <p className="text-softwhite/50 text-sm leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-20 p-12 lg:p-20 bg-lime text-midnight rounded-[60px] relative overflow-hidden">
          <div className="max-w-2xl relative z-10">
            <h3 className="text-4xl md:text-5xl font-display font-bold mb-8 uppercase tracking-tighter">
              {patent.headline}
            </h3>
            <p className="text-xl font-light leading-relaxed">
              {patent.body}
            </p>
          </div>
          <div className="absolute right-[-10%] top-[-20%] opacity-10">
            <div className="w-96 h-96 border-[40px] border-midnight rounded-full" />
          </div>
        </div>
      </Section>

      {/* Better Section */}
      <Section variant="bone">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center lg:flex-row-reverse">
          <div className="lg:order-2">
            <ImageCard src={betterSection.image} alt="Better for world" />
          </div>
          <div className="space-y-8 lg:order-1">
            <h2 className="text-4xl md:text-5xl">{betterSection.headline}</h2>
            <div className="space-y-6">
              {betterSection.points.map(point => (
                <div key={point.title} className="flex gap-4 p-6 bg-softwhite rounded-3xl border border-midnight/5">
                  <div className="w-1.5 h-1.5 rounded-full bg-teal mt-2" />
                  <div>
                    <h4 className="font-bold text-sm uppercase tracking-wider">{point.title}</h4>
                    <p className="text-sm text-midnight/60">{point.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* End of Life */}
      <Section variant="midnight">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl text-softwhite leading-tight">{endOfLife.headline}</h2>
            <p className="text-xl text-softwhite/70 font-light leading-relaxed">
              {endOfLife.body}
            </p>
            <CTAButton to="/back-the-project" variant="lime">See the R&D Process</CTAButton>
          </div>
          <ImageCard src={endOfLife.image} alt="Sustainability" />
        </div>
      </Section>
    </main>
  );
}
