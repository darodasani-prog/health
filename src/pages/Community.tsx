import React from 'react';
import { motion } from 'framer-motion';
import { Users, MessageSquare, Calendar, Heart, ChevronRight, ArrowRight, Quote } from 'lucide-react';

export const Community = () => {
  const stories = [
    { name: 'Tunde A.', location: 'Lagos, Nigeria', quote: 'Fonio changed my life. My HbA1c dropped from 8.2 to 6.4 in just six months.' },
    { name: 'Amaka O.', location: 'London, UK', quote: 'I finally found a way to enjoy my favorite soups without worrying about my sugar levels.' },
    { name: 'Ibrahim K.', location: 'Abuja, Nigeria', quote: 'The community support here is incredible. You never feel alone on this journey.' },
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
            <span className="text-clay font-accent uppercase tracking-[0.3em] text-xs font-bold">You're Not Alone</span>
            <div className="h-px w-12 bg-clay" />
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-6xl md:text-8xl font-serif italic text-forest leading-[0.9] mb-12"
          >
            Join thousands of Nigerians <br />
            <span className="text-clay">managing diabetes with pride.</span>
          </motion.h1>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <button className="btn-primary px-12 py-6 text-lg shadow-2xl shadow-clay/20">Join the Community</button>
            <div className="flex -space-x-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-12 h-12 rounded-full border-4 border-white overflow-hidden bg-eggshell">
                  <img src={`https://i.pravatar.cc/100?u=${i + 10}`} alt="User" className="w-full h-full object-cover" />
                </div>
              ))}
              <div className="w-12 h-12 rounded-full border-4 border-white bg-sage flex items-center justify-center text-white text-xs font-bold">
                +2k
              </div>
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-40">
          {stories.map((story, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-white p-12 rounded-[60px] shadow-premium border border-forest/5 relative overflow-hidden group"
            >
              <Quote className="text-clay/5 absolute -top-8 -right-8 group-hover:scale-110 transition-transform duration-700" size={160} />
              <div className="relative z-10">
                <div className="w-20 h-20 bg-forest/5 rounded-3xl overflow-hidden mb-10 group-hover:rotate-6 transition-transform">
                  <img src={`https://i.pravatar.cc/150?u=${idx + 20}`} alt={story.name} className="w-full h-full object-cover" />
                </div>
                <p className="text-forest/60 text-xl font-serif italic leading-relaxed mb-10">"{story.quote}"</p>
                <div className="flex justify-between items-end pt-8 border-t border-forest/5">
                  <div>
                    <h4 className="text-lg font-serif italic text-forest">{story.name}</h4>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-forest/30 mt-1">{story.location}</p>
                  </div>
                  <button className="w-12 h-12 bg-eggshell rounded-full flex items-center justify-center text-clay group-hover:bg-clay group-hover:text-white transition-all duration-500">
                    <ChevronRight size={24} />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div 
            whileHover={{ y: -5 }}
            className="bg-forest text-white p-16 md:p-24 rounded-[80px] flex flex-col justify-between relative overflow-hidden group shadow-premium"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32 group-hover:scale-110 transition-transform duration-1000" />
            <div className="relative z-10">
              <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center text-sage mb-12">
                <MessageSquare size={32} />
              </div>
              <h2 className="text-5xl md:text-6xl font-serif italic mb-10 leading-tight">Discussion <br />Forums.</h2>
              <p className="text-white/60 text-xl mb-16 leading-relaxed max-w-md">
                Connect with others, share recipes, and get advice from people who understand your journey.
              </p>
            </div>
            <div className="space-y-4 relative z-10">
              {['Newly Diagnosed', 'Meal Ideas', 'Exercise Tips', 'Mental Health'].map((cat, idx) => (
                <button key={idx} className="w-full flex items-center justify-between p-8 bg-white/5 hover:bg-white/10 border border-white/10 rounded-3xl transition-all duration-500 group/item">
                  <span className="text-lg font-serif italic">{cat}</span>
                  <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-sage group-hover/item:bg-sage group-hover/item:text-forest transition-all">
                    <ArrowRight size={20} className="group-hover/item:translate-x-1 transition-transform" />
                  </div>
                </button>
              ))}
            </div>
          </motion.div>

          <motion.div 
            whileHover={{ y: -5 }}
            className="bg-white p-16 md:p-24 rounded-[80px] border border-forest/5 shadow-premium flex flex-col group"
          >
            <div className="w-16 h-16 bg-clay/5 rounded-2xl flex items-center justify-center text-clay mb-12">
              <Users size={32} />
            </div>
            <h2 className="text-5xl md:text-6xl font-serif italic mb-10 text-forest leading-tight">Expert <br />Q&A.</h2>
            <p className="text-forest/60 text-xl mb-16 leading-relaxed max-w-md">
              Monthly live sessions with Nigerian endocrinologists, nutritionists, and health coaches.
            </p>
            <div className="p-10 bg-eggshell rounded-[60px] mb-12 group-hover:bg-eggshell/50 transition-colors duration-500">
              <div className="flex items-center gap-6 mb-10">
                <div className="w-16 h-16 bg-white rounded-3xl flex items-center justify-center text-clay shadow-sm">
                  <Calendar size={28} />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-forest/30 mb-2">Next Session</h4>
                  <p className="text-lg font-bold text-forest">March 28th, 2024 • 6:00 PM</p>
                </div>
              </div>
              <h3 className="text-2xl font-serif italic mb-6 text-forest">"Managing Sugar Spikes During Festive Seasons"</h3>
              <p className="text-forest/60 mb-10 text-lg">With Dr. Olumide B., Consultant Endocrinologist</p>
              <button className="btn-primary w-full py-6 text-lg shadow-xl shadow-clay/10">Register for Free</button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};
