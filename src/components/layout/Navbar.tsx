import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'motion/react';
import { Menu, X, PawPrint } from 'lucide-react';
import { useState, useEffect } from 'react';
import { siteContent } from '@/src/lib/content';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();

  useEffect(() => {
    return scrollY.onChange((latest) => {
      setIsScrolled(latest > 50);
    });
  }, [scrollY]);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'py-4' : 'py-8'}`}>
      <div className="container mx-auto px-6">
        <div className={`premium-blur rounded-full px-8 py-3 flex items-center justify-between shadow-lg transition-transform ${isScrolled ? 'scale-[0.98]' : 'scale-100'}`}>
          <Link to="/" className="flex items-center gap-2 group">
            <PawPrint className="w-6 h-6 text-teal group-hover:rotate-12 transition-transform" />
            <span className="font-display font-bold text-xl tracking-tighter text-midnight">KAVO</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {siteContent.navigation.map((item) => (
              <Link 
                key={item.label} 
                to={item.href} 
                className="text-sm font-medium text-midnight/70 hover:text-midnight transition-colors"
              >
                {item.label}
              </Link>
            ))}
            <Link 
              to="/back-the-project" 
              className="bg-midnight text-softwhite px-6 py-2.5 rounded-full text-[13px] font-bold hover:bg-graphite transition-all hover:scale-105 active:scale-95"
            >
              Back the Project
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-midnight"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <motion.div 
        initial={false}
        animate={isOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
        className={`fixed inset-0 bg-bone z-40 md:hidden flex flex-col items-center justify-center gap-8 p-6 ${isOpen ? 'pointer-events-auto' : 'pointer-events-none'}`}
      >
        {siteContent.navigation.map((item) => (
          <Link 
            key={item.label} 
            to={item.href} 
            onClick={() => setIsOpen(false)}
            className="text-2xl font-display font-bold text-midnight"
          >
            {item.label}
          </Link>
        ))}
        <Link 
          to="/back-the-project" 
          onClick={() => setIsOpen(false)}
          className="bg-midnight text-softwhite px-12 py-4 rounded-full text-lg font-bold"
        >
          Back the Project
        </Link>
      </motion.div>
    </nav>
  );
}
