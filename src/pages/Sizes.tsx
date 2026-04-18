import { siteContent } from '@/src/lib/content';
import PageHero from '@/src/components/layout/PageHero';
import Section from '@/src/components/shared/Section';
import SecondaryButton from '@/src/components/shared/SecondaryButton';

export default function Sizes() {
  const { hero, cards, help } = siteContent.sizes;

  return (
    <main>
      <PageHero title={hero.title} subtitle={hero.subtitle} image={hero.image} />
      
      <Section variant="light">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {cards.map((card) => (
            <div key={card.name} className="flex flex-col bg-bone rounded-[40px] overflow-hidden border border-midnight/5">
              <div className="aspect-[4/3] w-full">
                <img src={card.image} alt={card.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </div>
              <div className="p-10 flex-grow space-y-6">
                <div>
                  <h3 className="text-3xl font-display font-bold mb-2">{card.name}</h3>
                  <p className="text-teal font-bold uppercase tracking-widest text-xs">{card.dims}</p>
                </div>
                <p className="text-midnight/70 font-light leading-relaxed">
                  {card.description}
                </p>
                <div className="space-y-3 pt-4 border-t border-midnight/5">
                  <p className="text-[10px] font-bold uppercase tracking-[2px] text-midnight/40">Why owners choose it:</p>
                  {card.benefits?.map(benefit => (
                    <div key={benefit} className="flex items-center gap-2">
                       <div className="w-1 h-1 rounded-full bg-teal" />
                       <p className="text-sm text-midnight/80">{benefit}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section variant="bone" className="text-center">
        <div className="max-w-3xl mx-auto space-y-8">
          <span className="text-xs font-bold uppercase tracking-widest text-teal underline underline-offset-8">Selection Guide</span>
          <h2 className="text-4xl md:text-5xl">{help.headline}</h2>
          <p className="text-xl text-midnight/70 leading-relaxed font-light">
            {help.body}
          </p>
          <div className="pt-8">
            <SecondaryButton to="/contact">Contact Us</SecondaryButton>
          </div>
        </div>
      </Section>
    </main>
  );
}
