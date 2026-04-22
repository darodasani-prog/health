import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronRight, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Guide', path: '/guide' },
    { name: 'Food Swaps', path: '/food-swaps' },
    { name: 'Tracking', path: '/tracking' },
    { name: 'Herbs', path: '/herbs' },
    { name: 'Community', path: '/community' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'py-4' : 'py-8'}`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className={`flex justify-between items-center px-8 py-4 rounded-full transition-all duration-500 ${scrolled ? 'glass-card border-white/20' : 'bg-transparent border-transparent'}`}>
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-clay rounded-xl flex items-center justify-center text-white font-black text-xl group-hover:rotate-12 transition-transform">9J</div>
            <div className="flex flex-col">
              <span className="text-xl font-black text-forest tracking-tighter leading-none">9JA</span>
              <span className="text-[8px] font-bold text-forest/40 tracking-[0.2em] uppercase hidden sm:block">Diabetic & Health</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-xs font-bold uppercase tracking-widest transition-all hover:text-clay relative group ${location.pathname === link.path ? 'text-clay' : 'text-forest/60'}`}
              >
                {link.name}
                <span className={`absolute -bottom-1 left-0 h-0.5 bg-clay transition-all duration-300 ${location.pathname === link.path ? 'w-full' : 'w-0 group-hover:w-full'}`} />
              </Link>
            ))}
            <Link to="/tracking" className="btn-primary py-3 px-8 text-xs">
              Join Free
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button className="md:hidden text-forest p-2 hover:bg-forest/5 rounded-full transition-colors" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 md:hidden"
          >
            <div className="absolute inset-0 bg-forest/95 backdrop-blur-xl" onClick={() => setIsOpen(false)} />
            <div className="relative h-full flex flex-col pt-32 px-10">
              {navLinks.map((link, idx) => (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                >
                  <Link
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className="text-white text-5xl font-serif italic mb-10 flex items-center justify-between group"
                  >
                    {link.name}
                    <ChevronRight className="text-sage opacity-0 group-hover:opacity-100 transition-all group-hover:translate-x-2" size={32} />
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="mt-auto mb-16"
              >
                <Link
                  to="/tracking"
                  onClick={() => setIsOpen(false)}
                  className="w-full bg-clay text-white py-6 rounded-3xl text-center font-bold text-xl flex items-center justify-center gap-3 shadow-2xl shadow-clay/20"
                >
                  Join Free <ArrowRight size={24} />
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
