import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Leaf, Search, Filter, Info, ChevronRight, X, Play, Bookmark, Share2 } from 'lucide-react';
import { HERBS } from '../constants';

export const Herbs = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedHerb, setSelectedHerb] = useState<any>(null);

  const filters = ['All', 'Blood Sugar', 'Digestion', 'Immunity', 'Anti-Inflammatory'];

  const filteredHerbs = HERBS.filter(herb => {
    const matchesSearch = herb.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          herb.scientificName.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = activeFilter === 'All' || herb.benefits.some(b => b.toLowerCase().includes(activeFilter.toLowerCase()));
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="pt-40 pb-32 bg-eggshell min-h-screen relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[1000px] h-[1000px] bg-sage/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-clay/5 rounded-full blur-3xl" />
      </div>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 mb-32 relative z-10">
        <div className="text-center max-w-4xl mx-auto mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center justify-center gap-3 mb-8"
          >
            <div className="h-px w-12 bg-clay" />
            <span className="text-clay font-accent uppercase tracking-[0.3em] text-xs font-bold">Botanical Wisdom</span>
            <div className="h-px w-12 bg-clay" />
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-6xl md:text-8xl font-serif italic text-forest leading-[0.9] mb-12"
          >
            Ancient remedies <br />
            <span className="text-clay">validated by science.</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-forest/60 text-xl leading-relaxed max-w-2xl mx-auto"
          >
            Explore the rich botanical heritage of Nigeria. Our library combines traditional herbal knowledge with modern clinical research.
          </motion.p>
        </div>

        {/* Search and Filter */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex flex-col lg:flex-row gap-8 items-center justify-between glass-card p-8 rounded-[40px] shadow-premium border border-forest/5"
        >
          <div className="relative w-full lg:w-[450px]">
            <Search className="absolute left-8 top-1/2 -translate-y-1/2 text-forest/30" size={24} />
            <input
              type="text"
              placeholder="Search herbs, scientific names..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-eggshell/50 border border-forest/10 rounded-full pl-16 pr-10 py-6 focus:outline-none focus:border-clay transition-all duration-500 text-forest placeholder:text-forest/20"
            />
          </div>
          
          <div className="flex gap-3 overflow-x-auto w-full lg:w-auto pb-4 lg:pb-0 no-scrollbar">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-8 py-5 rounded-full text-xs font-bold uppercase tracking-widest whitespace-nowrap transition-all duration-500 ${activeFilter === filter ? 'bg-forest text-white shadow-xl shadow-forest/20' : 'bg-eggshell text-forest hover:bg-forest/5'}`}
              >
                {filter}
              </button>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Herbs Grid */}
      <section className="max-w-7xl mx-auto px-6 mb-40 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {filteredHerbs.map((herb) => (
            <motion.div
              key={herb.id}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              whileHover={{ y: -10 }}
              onClick={() => setSelectedHerb(herb)}
              className="group cursor-pointer bg-white rounded-[60px] overflow-hidden shadow-premium border border-forest/5 flex flex-col"
            >
              <div className="h-80 overflow-hidden relative">
                <img src={herb.image} alt={herb.name} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                <div className="absolute inset-0 bg-forest/20 group-hover:bg-forest/0 transition-colors duration-700" />
                <div className="absolute top-8 right-8">
                  <div className="w-14 h-14 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white border border-white/30 group-hover:rotate-12 transition-transform">
                    <Leaf size={28} />
                  </div>
                </div>
              </div>
              <div className="p-12 flex flex-col flex-1">
                <div className="mb-8">
                  <h3 className="text-4xl font-serif italic text-forest mb-3 group-hover:text-clay transition-colors">{herb.name}</h3>
                  <p className="text-[10px] text-forest/40 font-bold uppercase tracking-[0.2em]">{herb.scientificName}</p>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-10">
                  {herb.benefits.map((benefit: string, idx: number) => (
                    <span key={idx} className="px-4 py-2 bg-sage/5 text-sage text-[10px] font-bold uppercase tracking-widest rounded-full border border-sage/10">
                      {benefit}
                    </span>
                  ))}
                </div>
                
                <div className="mt-auto pt-8 border-t border-forest/5 flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-widest text-clay">Explore Profile</span>
                  <div className="w-10 h-10 bg-eggshell rounded-full flex items-center justify-center text-clay group-hover:bg-clay group-hover:text-white transition-all duration-500">
                    <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Herb Detail Modal */}
      <AnimatePresence>
        {selectedHerb && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedHerb(null)}
              className="absolute inset-0 bg-forest/80 backdrop-blur-md"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative bg-white w-full max-w-5xl rounded-[60px] overflow-hidden shadow-2xl max-h-[90vh] overflow-y-auto no-scrollbar"
            >
              <div className="flex flex-col lg:flex-row">
                {/* Left: Image & Quick Info */}
                <div className="lg:w-2/5 relative h-96 lg:h-auto">
                  <img src={selectedHerb.image} alt={selectedHerb.name} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-forest/80 via-transparent to-transparent" />
                  <button 
                    onClick={() => setSelectedHerb(null)}
                    className="absolute top-8 left-8 p-3 bg-white/20 backdrop-blur-md rounded-full text-white hover:bg-white/40 transition-colors"
                  >
                    <X size={24} />
                  </button>
                  <div className="absolute bottom-12 left-12 text-white">
                    <h2 className="text-5xl font-serif italic mb-4">{selectedHerb.name}</h2>
                    <div className="space-y-2 text-white/60 text-sm">
                      <p><span className="font-bold text-white">Yoruba:</span> {selectedHerb.localNames.yoruba}</p>
                      <p><span className="font-bold text-white">Igbo:</span> {selectedHerb.localNames.igbo}</p>
                      <p><span className="font-bold text-white">Hausa:</span> {selectedHerb.localNames.hausa}</p>
                    </div>
                  </div>
                </div>

                {/* Right: Detailed Content */}
                <div className="lg:w-3/5 p-12 md:p-20">
                  <div className="flex justify-end gap-4 mb-12">
                    <button className="p-4 bg-eggshell rounded-2xl text-forest hover:bg-forest/10 transition-colors"><Bookmark size={20} /></button>
                    <button className="p-4 bg-eggshell rounded-2xl text-forest hover:bg-forest/10 transition-colors"><Share2 size={20} /></button>
                  </div>

                  <div className="space-y-12">
                    <section>
                      <h4 className="text-xs font-bold uppercase tracking-widest text-clay mb-4">Traditional Use</h4>
                      <p className="text-forest/60 leading-relaxed">{selectedHerb.traditionalUse}</p>
                    </section>

                    <section>
                      <h4 className="text-xs font-bold uppercase tracking-widest text-clay mb-4">Scientific Validation</h4>
                      <div className="p-6 bg-sage/5 border border-sage/10 rounded-3xl flex items-start gap-4">
                        <Info className="text-sage shrink-0" size={20} />
                        <p className="text-sm text-forest/80 leading-relaxed">{selectedHerb.scientificValidation}</p>
                      </div>
                    </section>

                    <section>
                      <h4 className="text-xs font-bold uppercase tracking-widest text-clay mb-6">Preparation Methods</h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {selectedHerb.preparationMethods.map((method: string, idx: number) => (
                          <div key={idx} className="flex items-center gap-4 p-4 bg-eggshell rounded-2xl group cursor-pointer hover:bg-forest hover:text-white transition-all">
                            <div className="w-10 h-10 bg-white/50 rounded-xl flex items-center justify-center group-hover:bg-white/10">
                              <Play size={16} className="fill-current" />
                            </div>
                            <span className="text-sm font-bold">{method}</span>
                          </div>
                        ))}
                      </div>
                    </section>

                    <div className="pt-12 border-t border-forest/5 flex flex-col sm:flex-row gap-6">
                      <button className="btn-primary flex-1 py-6">Add to My Garden</button>
                      <button className="btn-secondary flex-1 py-6">Ask an Expert</button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};
