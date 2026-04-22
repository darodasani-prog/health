import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, ChevronRight, Search, Download, Play, Info } from 'lucide-react';

export const Guide = () => {
  const articles = [
    { title: 'Understanding Diabetes: Type 1 vs Type 2', category: 'Basics', readTime: '5 min' },
    { title: 'The Nigerian Plate: Reimagining Traditional Meals', category: 'Nutrition', readTime: '8 min' },
    { title: 'Eating Out: Restaurant Guide for Lagos, Abuja, PH', category: 'Lifestyle', readTime: '10 min' },
    { title: 'Exercise Routines That Work for Our Climate', category: 'Fitness', readTime: '6 min' },
    { title: 'Managing Diabetes During Ramadan', category: 'Special Occasions', readTime: '7 min' },
    { title: 'Travel Tips: Flying with Medications', category: 'Travel', readTime: '5 min' },
  ];

  return (
    <div className="pt-40 pb-32 bg-eggshell min-h-screen relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[1000px] h-[1000px] bg-sage/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-clay/5 rounded-full blur-3xl" />
      </div>

      <section className="max-w-7xl mx-auto px-6 mb-32 relative z-10">
        <div className="text-center max-w-4xl mx-auto mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center justify-center gap-3 mb-8"
          >
            <div className="h-px w-12 bg-clay" />
            <span className="text-clay font-accent uppercase tracking-[0.3em] text-xs font-bold">Education Center</span>
            <div className="h-px w-12 bg-clay" />
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-6xl md:text-8xl font-serif italic text-forest leading-[0.9] mb-12"
          >
            Knowledge is your <br />
            <span className="text-clay">greatest weapon.</span>
          </motion.h1>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="relative max-w-2xl mx-auto"
          >
            <Search className="absolute left-8 top-1/2 -translate-y-1/2 text-forest/30" size={24} />
            <input
              type="text"
              placeholder="Search guide, articles, or videos..."
              className="w-full bg-white border border-forest/10 rounded-full pl-20 pr-10 py-6 shadow-premium focus:outline-none focus:border-clay transition-all duration-500 text-forest text-lg placeholder:text-forest/20"
            />
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {articles.map((article, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-white p-12 rounded-[60px] border border-forest/5 shadow-premium group cursor-pointer relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-clay/5 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-700" />
              
              <div className="flex justify-between items-start mb-10 relative z-10">
                <span className="px-5 py-2 bg-forest/5 text-forest text-[10px] font-bold uppercase tracking-[0.2em] rounded-full">
                  {article.category}
                </span>
                <span className="text-xs text-forest/30 font-bold uppercase tracking-widest">{article.readTime}</span>
              </div>
              
              <h3 className="text-3xl font-serif italic text-forest mb-8 group-hover:text-clay transition-colors leading-tight relative z-10">
                {article.title}
              </h3>
              
              <div className="flex items-center gap-3 text-clay font-bold text-sm uppercase tracking-widest relative z-10">
                Read Article 
                <div className="w-8 h-8 rounded-full bg-clay/10 flex items-center justify-center group-hover:translate-x-2 transition-transform">
                  <ChevronRight size={16} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Featured Video Section */}
      <section className="max-w-7xl mx-auto px-6 mb-40 relative z-10">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-forest rounded-[80px] p-16 md:p-32 text-white relative overflow-hidden shadow-premium group"
        >
          <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'svg\'%3E%3Cpath d=\'M30 0l30 30-30 30L0 30z\' fill=\'%23FFFFFF\' /%3E%3C/svg%3E")' }} />
          
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
            <div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex items-center gap-4 mb-8"
              >
                <div className="h-px w-12 bg-coral" />
                <span className="text-coral font-accent uppercase tracking-[0.3em] text-xs font-bold">Visual Learning</span>
              </motion.div>
              
              <h2 className="text-5xl md:text-7xl font-serif italic mb-10 leading-tight">Visual <br /><span className="text-coral">Learning.</span></h2>
              <p className="text-white/60 text-xl leading-relaxed mb-16 max-w-lg">
                Our video series breaks down complex medical concepts into simple, actionable steps for your daily life.
              </p>
              <button className="btn-primary py-8 px-12 text-lg shadow-2xl shadow-coral/20">
                Explore Video Library <Play size={24} />
              </button>
            </div>
            
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative aspect-video bg-white/5 rounded-[60px] border border-white/10 flex items-center justify-center group cursor-pointer overflow-hidden shadow-2xl"
            >
              <img src="https://picsum.photos/seed/video/1200/800" alt="Video Preview" className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:scale-110 transition-transform duration-1000" />
              <div className="absolute inset-0 bg-forest/20 group-hover:bg-forest/0 transition-colors duration-500" />
              
              <div className="relative z-10 w-24 h-24 bg-coral rounded-full flex items-center justify-center text-white shadow-2xl group-hover:scale-125 transition-transform duration-500">
                <Play size={40} fill="currentColor" />
              </div>
              
              <div className="absolute bottom-10 left-10 right-10 flex justify-between items-center text-white/60 text-xs font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <span>Diabetes Management 101</span>
                <span>12:45</span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>
    </div>
  );
};
