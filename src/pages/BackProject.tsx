import { siteContent } from '@/src/lib/content';
import PageHero from '@/src/components/layout/PageHero';
import Section from '@/src/components/shared/Section';
import CTAButton from '@/src/components/shared/CTAButton';
import ImageCard from '@/src/components/shared/ImageCard';

export default function BackProject() {
  const { hero, reasons, transparency } = siteContent.backProject;

  return (
    <main>
      <PageHero title={hero.title} subtitle={hero.subtitle} image={hero.image} />
      
      <Section variant="light">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {reasons.map((reason) => (
            <div key={reason.title} className="p-10 bg-bone rounded-[40px] space-y-6 border border-midnight/5">
              <span className="text-xs font-bold uppercase tracking-[2px] text-teal">Early Access</span>
              <h3 className="text-2xl font-display font-bold">{reason.title}</h3>
              <p className="text-midnight/60 text-sm leading-relaxed">{reason.text}</p>
            </div>
          ))}
        </div>

        <div className="bg-midnight text-softwhite rounded-[60px] overflow-hidden p-12 lg:p-24 relative">
          <div className="relative z-10 max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-[2px] text-lime mb-8 block underline underline-offset-8">Trust & Honesty</span>
            <h2 className="text-4xl md:text-6xl mb-8 tracking-tighter leading-tight">{transparency.headline}</h2>
            <p className="text-xl text-softwhite/70 font-light leading-relaxed mb-12 whitespace-pre-line">
              {transparency.body}
            </p>
            
            <div className="flex flex-wrap gap-4 mb-12">
              {transparency.trustMarkers.map(marker => (
                <div key={marker} className="px-4 py-2 border border-white/10 rounded-full text-xs font-bold uppercase tracking-widest text-white/60">
                  {marker}
                </div>
              ))}
            </div>

            <CTAButton to={siteContent.brand.backProjectUrl} variant="lime">
              Pledge on Kickstarter
            </CTAButton>
          </div>
          <div className="hidden lg:block absolute inset-y-0 right-0 w-1/3">
            <img 
              src={transparency.image} 
              alt="Transparency" 
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover opacity-40 grayscale"
            />
          </div>
        </div>
      </Section>
    </main>
  );
}
