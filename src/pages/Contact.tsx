import React, { useState } from 'react';
import { siteContent } from '@/src/lib/content';
import PageHero from '@/src/components/layout/PageHero';
import Section from '@/src/components/shared/Section';
import CTAButton from '@/src/components/shared/CTAButton';

export default function Contact() {
  const { hero, secondaryLine } = siteContent.contact;
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoLink = `mailto:${siteContent.brand.email}?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`)}`;
    window.location.href = mailtoLink;
  };

  return (
    <main>
      <PageHero title={hero.title} subtitle={hero.subtitle} image={hero.image} />
      
      <Section variant="light">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
          <div className="space-y-12">
            <div>
              <h2 className="text-4xl md:text-5xl mb-6">Reach out.</h2>
              <p className="text-xl text-midnight/70 font-light leading-relaxed">
                {secondaryLine}
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-1.5 h-1.5 rounded-full bg-teal mt-2" />
                <div>
                  <h4 className="font-bold text-sm uppercase tracking-wider">Social</h4>
                  <p className="text-midnight/60">@wwpdogtoys</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-1.5 h-1.5 rounded-full bg-teal mt-2" />
                <div>
                  <h4 className="font-bold text-sm uppercase tracking-wider">Community</h4>
                  <p className="text-midnight/60">Join the discussion on Instagram</p>
                </div>
              </div>
            </div>
          </div>

          <form 
            onSubmit={handleSubmit}
            className="bg-bone p-12 rounded-[60px] space-y-8 border border-midnight/5 shadow-sm"
          >
            <div className="space-y-4">
              <label className="text-[10px] font-bold uppercase tracking-[2px] text-midnight/40 ml-4">Full Name</label>
              <input 
                type="text" 
                placeholder="Name" 
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full bg-softwhite border border-midnight/5 rounded-full px-8 py-5 text-midnight outline-none focus:border-teal/30 transition-colors"
                required
              />
            </div>
            <div className="space-y-4">
              <label className="text-[10px] font-bold uppercase tracking-[2px] text-midnight/40 ml-4">Email Address</label>
              <input 
                type="email" 
                placeholder="email@example.com" 
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full bg-softwhite border border-midnight/5 rounded-full px-8 py-5 text-midnight outline-none focus:border-teal/30 transition-colors"
                required
              />
            </div>
            <div className="space-y-4">
              <label className="text-[10px] font-bold uppercase tracking-[2px] text-midnight/40 ml-4">Subject</label>
              <input 
                type="text" 
                placeholder="Product Inquiry" 
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                className="w-full bg-softwhite border border-midnight/5 rounded-full px-8 py-5 text-midnight outline-none focus:border-teal/30 transition-colors"
                required
              />
            </div>
            <div className="space-y-4">
              <label className="text-[10px] font-bold uppercase tracking-[2px] text-midnight/40 ml-4">Message</label>
              <textarea 
                rows={4} 
                placeholder="How can we help?" 
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full bg-softwhite border border-midnight/5 rounded-[32px] px-8 py-5 text-midnight outline-none focus:border-teal/30 transition-colors resize-none"
                required
              />
            </div>
            <button type="submit" className="w-full">
              <CTAButton as="div" variant="primary" className="w-full justify-center py-6">
                Send Message
              </CTAButton>
            </button>
          </form>
        </div>
      </Section>
    </main>
  );
}
