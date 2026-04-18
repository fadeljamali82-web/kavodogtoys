import { Link } from 'react-router-dom';
import { siteContent } from '@/src/lib/content';
import { Instagram, Twitter, Facebook, PawPrint } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-midnight text-softwhite pt-24 pb-12 px-6">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-2">
              <PawPrint className="w-8 h-8 text-lime" />
              <span className="font-display font-bold text-3xl tracking-tighter">KAVO</span>
            </Link>
            <p className="text-softwhite/60 max-w-sm leading-relaxed font-light">
              {siteContent.brand.tagline}
            </p>
            <div className="flex gap-4">
              <a href={siteContent.brand.social.instagram} target="_blank" rel="noopener noreferrer">
                <Instagram className="w-5 h-5 text-softwhite/40 hover:text-teal cursor-pointer transition-colors" />
              </a>
              <a href={siteContent.brand.social.x} target="_blank" rel="noopener noreferrer">
                <Twitter className="w-5 h-5 text-softwhite/40 hover:text-teal cursor-pointer transition-colors" />
              </a>
              <a href={siteContent.brand.social.facebook} target="_blank" rel="noopener noreferrer">
                <Facebook className="w-5 h-5 text-softwhite/40 hover:text-teal cursor-pointer transition-colors" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-display font-bold text-lg mb-6">Explore</h4>
            <ul className="space-y-4">
              {siteContent.navigation.map((item) => (
                <li key={item.label}>
                  <Link to={item.href} className="text-softwhite/60 hover:text-white transition-colors">{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-medium text-xs uppercase tracking-[2px] text-white/40 mb-8">Navigation</h4>
            <ul className="space-y-4">
              <li><a href={siteContent.brand.backProjectUrl} target="_blank" rel="noopener noreferrer" className="text-softwhite/60 hover:text-white transition-colors">Kickstarter</a></li>
              <li><Link to="/contact" className="text-softwhite/60 hover:text-white transition-colors">Contact</Link></li>
              <li><Link to="/materials" className="text-softwhite/60 hover:text-white transition-colors">Materials</Link></li>
              <li><Link to="/future" className="text-softwhite/60 hover:text-white transition-colors">Future</Link></li>
              <li><Link to="/story" className="text-softwhite/60 hover:text-white transition-colors">Story</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-lg mb-6">Join the Mailing List</h4>
            <p className="text-softwhite/60 mb-6 font-sm">Get early access to our Kickstarter launch and product updates.</p>
            <form className="flex gap-2">
              <input 
                type="email" 
                placeholder="dog-lover@example.com" 
                className="bg-graphite border-none rounded-full px-4 py-2 flex-grow text-sm focus:ring-1 focus:ring-teal outline-none"
              />
              <button className="bg-lime text-midnight px-6 py-2 rounded-full font-bold text-sm hover:bg-white transition-colors">Join</button>
            </form>
          </div>
        </div>

        <div className="pt-12 border-t border-softwhite/10 flex flex-col md:flex-row justify-between items-center gap-6 text-xs text-softwhite/30">
          <p>© 2026 KAVO. All rights reserved.</p>
          <div className="flex gap-8">
            <span className="cursor-pointer hover:text-white transition-colors">Privacy Policy</span>
            <span className="cursor-pointer hover:text-white transition-colors">Terms of Service</span>
            <span className="cursor-pointer hover:text-white transition-colors">Cookie Settings</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
