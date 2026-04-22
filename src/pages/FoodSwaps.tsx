import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Filter, ChevronRight, ArrowRight, Download, Info } from 'lucide-react';
import { FOOD_SWAPS } from '../constants';

export const FoodSwaps = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Swallows', 'Soups', 'Proteins', 'Snacks', 'Drinks'];

  const filteredSwaps = FOOD_SWAPS.filter(swap => {
    const matchesSearch = swap.originalName.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          swap.swapName.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeCategory === 'All' || swap.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="pt-40 pb-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-sage/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-clay/5 rounded-full blur-3xl" />
      </div>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 mb-32 relative z-10">
        <div className="text-center max-w-4xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center justify-center gap-3 mb-8"
          >
            <div className="h-px w-12 bg-clay" />
            <span className="text-clay font-accent uppercase tracking-[0.3em] text-xs font-bold">
              The Smart Swap System
            </span>
            <div className="h-px w-12 bg-clay" />
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-6xl md:text-8xl font-serif italic mb-10 text-forest leading-[0.9]"
          >
            Transform your <br />
            <span className="text-clay">favorite meals.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-forest/60 text-xl leading-relaxed max-w-2xl mx-auto"
          >
            Discover blood sugar-friendly masterpieces without losing the soul of 9ja flavor. Our database helps you make informed choices for a healthier life.
          </motion.p>
        </div>

        {/* Search and Filter */}
        <div className="glass-card p-8 rounded-[40px] border-white/20 shadow-premium flex flex-col lg:flex-row gap-8 items-center justify-between">
          <div className="relative w-full lg:w-[450px] group">
            <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-forest/30 group-focus-within:text-clay transition-colors" size={20} />
            <input
              type="text"
              placeholder="What are you craving?"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-forest/5 border border-forest/10 rounded-2xl pl-14 pr-8 py-5 focus:outline-none focus:border-clay focus:bg-white transition-all text-forest placeholder:text-forest/30"
            />
          </div>
          
          <div className="flex gap-3 overflow-x-auto w-full lg:w-auto pb-4 lg:pb-0 no-scrollbar">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-8 py-4 rounded-2xl text-xs font-bold uppercase tracking-widest whitespace-nowrap transition-all ${activeCategory === cat ? 'bg-forest text-white shadow-xl shadow-forest/20' : 'bg-white text-forest/60 border border-forest/5 hover:bg-forest/5'}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Swaps Grid */}
      <section className="max-w-7xl mx-auto px-6 mb-40 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {filteredSwaps.map((swap) => (
            <motion.div
              key={swap.id}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              whileHover={{ y: -10 }}
              className="bg-white rounded-[60px] overflow-hidden shadow-premium border border-forest/5 flex flex-col group"
            >
              <div className="flex flex-col sm:flex-row h-full relative">
                {/* Original Side */}
                <div className="flex-1 relative overflow-hidden">
                  <img src={swap.originalImage} alt={swap.originalName} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-coral/40 flex flex-col justify-end p-10 text-white">
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] mb-3 opacity-80">Original</span>
                    <h3 className="text-3xl font-serif italic mb-4">{swap.originalName}</h3>
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-bold uppercase tracking-widest">GI: {swap.originalGI}</span>
                      <div className="h-1.5 w-16 bg-white/20 rounded-full overflow-hidden">
                        <motion.div 
                          initial={{ width: 0 }}
                          whileInView={{ width: `${swap.originalGI}%` }}
                          className="h-full bg-white" 
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Arrow Divider */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 hidden sm:block">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-2xl text-clay border-4 border-eggshell group-hover:rotate-180 transition-transform duration-500">
                    <ArrowRight size={24} />
                  </div>
                </div>

                {/* Swap Side */}
                <div className="flex-1 relative overflow-hidden">
                  <img src={swap.swapImage} alt={swap.swapName} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-sage/40 flex flex-col justify-end p-10 text-white">
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] mb-3 opacity-80">The Smart Swap</span>
                    <h3 className="text-3xl font-serif italic mb-4">{swap.swapName}</h3>
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-bold uppercase tracking-widest">GI: {swap.swapGI}</span>
                      <div className="h-1.5 w-16 bg-white/20 rounded-full overflow-hidden">
                        <motion.div 
                          initial={{ width: 0 }}
                          whileInView={{ width: `${swap.swapGI}%` }}
                          className="h-full bg-white" 
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-12 bg-white">
                <div className="flex items-start gap-6 mb-10">
                  <div className="w-14 h-14 bg-sage/10 rounded-2xl flex items-center justify-center text-sage shrink-0">
                    <Info size={28} />
                  </div>
                  <div>
                    <h4 className="text-xl font-serif italic text-forest mb-3">Why this works</h4>
                    <p className="text-forest/60 leading-relaxed">{swap.whyItWorks}</p>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-6">
                  <button className="btn-primary flex-1 py-5">View Recipe</button>
                  <button className="btn-secondary flex-1 py-5">Add to Meal Plan</button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {filteredSwaps.length === 0 && (
          <div className="text-center py-32 bg-white rounded-[40px] border border-dashed border-forest/20">
            <Search className="mx-auto text-forest/20 mb-6" size={48} />
            <h3 className="text-2xl font-serif italic text-forest/40">No swaps found for your search.</h3>
            <p className="text-forest/30 mt-2">Try searching for another favorite meal.</p>
          </div>
        )}
      </section>

      {/* Nutritional Science Section */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="bg-forest rounded-[60px] p-12 md:p-24 text-white overflow-hidden relative">
          {/* Pattern Overlay */}
          <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M30 0l30 30-30 30L0 30z\' fill=\'%23FFFFFF\' /%3E%3C/svg%3E")' }} />
          
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div>
              <span className="text-sage font-accent uppercase tracking-widest text-sm font-bold">The Science</span>
              <h2 className="text-4xl md:text-6xl font-serif italic mt-6 mb-12">Decoding the Nigerian Plate.</h2>
              
              <div className="space-y-8">
                {[
                  { title: 'What is Glycemic Index?', content: 'GI measures how quickly a food causes blood sugar levels to rise. Low GI foods release glucose slowly.' },
                  { title: 'Why Fiber Matters', content: 'Fiber acts as a natural buffer, slowing down the digestion of carbohydrates and sugar absorption.' },
                  { title: 'Portion Control for Nigerians', content: 'Learn to use your hand as a measurement tool for swallows and proteins.' }
                ].map((item, idx) => (
                  <div key={idx} className="group border-b border-white/10 pb-8 cursor-pointer">
                    <div className="flex justify-between items-center mb-4">
                      <h4 className="text-xl font-bold group-hover:text-sage transition-colors">{item.title}</h4>
                      <ChevronRight className="text-sage group-hover:translate-x-2 transition-transform" />
                    </div>
                    <p className="text-white/60 text-sm leading-relaxed max-w-md">{item.content}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-12 rounded-[40px]">
              <h3 className="text-2xl font-serif italic mb-8">Downloadable Resources</h3>
              <div className="space-y-4">
                {[
                  'Nigerian Diabetes-Friendly Meal Planner',
                  'GI Chart of Local Foods (Printable)',
                  'Weekly Shopping List Template'
                ].map((res, idx) => (
                  <button key={idx} className="w-full flex items-center justify-between p-6 bg-white/5 hover:bg-white/10 border border-white/10 rounded-2xl transition-all group">
                    <span className="text-sm font-bold">{res}</span>
                    <Download size={20} className="text-sage group-hover:translate-y-1 transition-transform" />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
