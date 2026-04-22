import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Shield, Users, Globe, ChevronRight } from 'lucide-react';

export const About = () => {
  return (
    <div className="pt-40 pb-32 bg-eggshell min-h-screen relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[1000px] h-[1000px] bg-sage/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-clay/5 rounded-full blur-3xl" />
      </div>

      <section className="max-w-7xl mx-auto px-6 mb-32 relative z-10">
        <div className="text-center max-w-4xl mx-auto mb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center justify-center gap-3 mb-8"
          >
            <div className="h-px w-12 bg-clay" />
            <span className="text-clay font-accent uppercase tracking-[0.3em] text-xs font-bold">Our Story</span>
            <div className="h-px w-12 bg-clay" />
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-6xl md:text-8xl font-serif italic text-forest leading-[0.9] mb-12"
          >
            Traditional wisdom <br />
            <span className="text-clay">meets modern science.</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-forest/60 text-xl leading-relaxed max-w-3xl mx-auto"
          >
            9JA Diabetic & Health is Nigeria's definitive guide for managing diabetes. We blend Afro-minimalist aesthetics with clinical precision, serving as both an educational resource and a health tracking tool.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-center mb-48">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative aspect-square rounded-[80px] overflow-hidden shadow-premium group"
          >
            <img src="https://picsum.photos/seed/about/1200/1200" alt="About Us" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
            <div className="absolute inset-0 bg-forest/20 group-hover:bg-forest/0 transition-colors duration-700" />
            <div className="absolute bottom-12 left-12 right-12 p-10 glass-card rounded-[40px] border border-white/20 text-white">
              <p className="text-2xl font-serif italic">"Health is the greatest heritage we can pass down."</p>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-16"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="h-px w-12 bg-clay" />
              <h2 className="text-5xl md:text-7xl font-serif italic text-forest">Our Mission.</h2>
            </div>
            <p className="text-forest/60 text-xl leading-relaxed">
              Empowering Nigerians to manage diabetes without losing the soul of 9ja flavor and culture. We believe that health management should be culturally competent and accessible to all.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
              <motion.div 
                whileHover={{ y: -5 }}
                className="p-10 bg-white rounded-[60px] shadow-premium border border-forest/5 group"
              >
                <div className="w-16 h-16 bg-clay/5 rounded-2xl flex items-center justify-center text-clay mb-8 group-hover:scale-110 transition-transform">
                  <Heart size={32} />
                </div>
                <h3 className="text-2xl font-serif italic text-forest mb-4">Empathy</h3>
                <p className="text-sm text-forest/40 leading-relaxed font-bold uppercase tracking-widest">We understand your journey because we've been there.</p>
              </motion.div>
              <motion.div 
                whileHover={{ y: -5 }}
                className="p-10 bg-white rounded-[60px] shadow-premium border border-forest/5 group"
              >
                <div className="w-16 h-16 bg-sage/5 rounded-2xl flex items-center justify-center text-sage mb-8 group-hover:scale-110 transition-transform">
                  <Shield size={32} />
                </div>
                <h3 className="text-2xl font-serif italic text-forest mb-4">Integrity</h3>
                <p className="text-sm text-forest/40 leading-relaxed font-bold uppercase tracking-widest">Our content is doctor-approved and scientifically backed.</p>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Medical Advisory Board */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-forest text-white p-16 md:p-32 rounded-[80px] relative overflow-hidden shadow-premium"
        >
          <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M30 0l30 30-30 30L0 30z\' fill=\'%23FFFFFF\' /%3E%3C/svg%3E")' }} />
          
          <div className="relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-24">
              <h2 className="text-5xl md:text-7xl font-serif italic mb-8 leading-tight">Medical Advisory Board.</h2>
              <p className="text-white/60 text-xl leading-relaxed">Our platform is guided by leading experts in Nigerian endocrinology and nutrition.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
              {[
                { name: 'Dr. Olumide B.', role: 'Consultant Endocrinologist', photo: 'https://i.pravatar.cc/150?u=dr1' },
                { name: 'Amaka N.', role: 'Clinical Nutritionist', photo: 'https://i.pravatar.cc/150?u=dr2' },
                { name: 'Dr. Tunde O.', role: 'Public Health Specialist', photo: 'https://i.pravatar.cc/150?u=dr3' },
              ].map((member, idx) => (
                <motion.div 
                  key={idx} 
                  whileHover={{ y: -10 }}
                  className="text-center group"
                >
                  <div className="w-48 h-48 bg-white/10 rounded-[60px] overflow-hidden mx-auto mb-10 border-2 border-white/20 group-hover:border-sage transition-all duration-700 group-hover:rotate-3">
                    <img src={member.photo} alt={member.name} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                  </div>
                  <h3 className="text-3xl font-serif italic mb-4">{member.name}</h3>
                  <p className="text-sage text-xs font-bold uppercase tracking-[0.2em]">{member.role}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
};
