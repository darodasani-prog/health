import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Mail, Phone, AlertCircle } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-forest text-white pt-32 pb-16 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'120\' height=\'120\' viewBox=\'0 0 120 120\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M60 0l60 60-60 60L0 60z\' fill=\'%23FFFFFF\' /%3E%3C/svg%3E")' }} />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-16 mb-32">
          {/* Brand Column */}
          <div className="lg:col-span-4 space-y-10">
            <Link to="/" className="flex items-center gap-3 group">
              <div className="w-12 h-12 bg-clay rounded-2xl flex items-center justify-center text-white font-black text-2xl group-hover:rotate-12 transition-transform shadow-xl shadow-clay/20">9J</div>
              <div className="flex flex-col">
                <span className="text-2xl font-black tracking-tighter leading-none">9JA</span>
                <span className="text-[10px] font-bold text-white/40 tracking-[0.2em] uppercase">Diabetic & Health</span>
              </div>
            </Link>
            <p className="text-white/60 text-lg leading-relaxed max-w-sm">
              Empowering Nigerians to manage diabetes with traditional wisdom and modern precision. No compromises on flavor, just smarter choices.
            </p>
            <div className="flex gap-4">
              {[Facebook, Twitter, Instagram].map((Icon, idx) => (
                <a key={idx} href="#" className="w-12 h-12 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center hover:bg-clay hover:border-clay hover:-translate-y-1 transition-all">
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-8">
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-sage">Platform</h4>
            <ul className="space-y-4 text-sm text-white/60">
              {['Guide', 'Food Swaps', 'Tracking', 'Herbs', 'Community', 'About'].map((item) => (
                <li key={item}>
                  <Link to={`/${item.toLowerCase().replace(' ', '-')}`} className="hover:text-white transition-colors flex items-center gap-2 group">
                    <span className="w-0 group-hover:w-2 h-px bg-clay transition-all" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div className="lg:col-span-2 space-y-8">
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-sage">Resources</h4>
            <ul className="space-y-4 text-sm text-white/60">
              {['Downloadable GI Chart', 'Meal Planner PDF', 'Doctor Finder', 'Privacy Policy', 'Terms of Service'].map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-white transition-colors flex items-center gap-2 group">
                    <span className="w-0 group-hover:w-2 h-px bg-clay transition-all" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="lg:col-span-4 space-y-8">
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-sage">Stay Updated</h4>
            <p className="text-white/60 text-sm leading-relaxed">
              Get weekly health tips and local recipes delivered to your inbox.
            </p>
            <form className="relative group">
              <input 
                type="email" 
                placeholder="Your email" 
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-sm focus:outline-none focus:border-clay focus:bg-white/10 transition-all"
              />
              <button className="absolute right-2 top-2 bottom-2 px-6 bg-clay text-white rounded-xl text-xs font-bold hover:bg-clay/90 transition-all">
                Join
              </button>
            </form>
          </div>
        </div>

        <div className="pt-16 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col md:flex-row items-center gap-8 text-[10px] font-bold uppercase tracking-widest text-white/20">
            <p>© 2024 9JA Diabetic & Health</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white transition-colors">Privacy</a>
              <a href="#" className="hover:text-white transition-colors">Terms</a>
            </div>
          </div>
          <div className="flex items-center gap-4 p-4 bg-white/5 rounded-2xl border border-white/10 max-w-md">
            <div className="w-8 h-8 bg-coral/20 rounded-lg flex items-center justify-center text-coral shrink-0">
              <AlertCircle size={16} />
            </div>
            <p className="text-[10px] italic text-white/40 leading-relaxed">
              Medical Disclaimer: This platform is for educational purposes only. Always consult with a healthcare professional.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
