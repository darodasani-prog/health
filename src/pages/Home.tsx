import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Activity, Leaf, BookOpen, ChevronRight, Play, Star, Shield, Users, Quote, Info } from 'lucide-react';
import { Link } from 'react-router-dom';
import { HERBS } from '../constants';

export const Home = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <motion.div 
            animate={{ 
              scale: [1, 1.2, 1],
              rotate: [0, 90, 0],
              x: [0, 100, 0],
              y: [0, -50, 0]
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute -top-24 -left-24 w-96 h-96 bg-sage/10 rounded-full blur-3xl" 
          />
          <motion.div 
            animate={{ 
              scale: [1, 1.1, 1],
              rotate: [0, -45, 0],
              x: [0, -50, 0],
              y: [0, 100, 0]
            }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            className="absolute top-1/2 -right-24 w-[500px] h-[500px] bg-clay/5 rounded-full blur-3xl" 
          />
        </div>

        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={itemVariants} className="flex items-center gap-3 mb-8">
              <div className="h-px w-12 bg-clay" />
              <span className="text-clay font-accent uppercase tracking-[0.3em] text-xs font-bold">
                Nigeria's Premier Health Guide
              </span>
            </motion.div>
            
            <motion.h1 variants={itemVariants} className="text-6xl md:text-8xl lg:text-9xl font-serif italic leading-[0.9] mb-10 text-forest">
              Health is <br />
              <span className="text-clay">Heritage.</span>
            </motion.h1>
            
            <motion.p variants={itemVariants} className="text-forest/60 text-lg md:text-xl leading-relaxed max-w-lg mb-12">
              Empowering Nigerians to manage diabetes with traditional wisdom and modern precision. No compromises on flavor, just smarter choices.
            </motion.p>
            
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-6">
              <Link to="/tracking" className="btn-primary group">
                Start Tracking <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/food-swaps" className="btn-secondary">
                Explore Swaps
              </Link>
            </motion.div>

            <motion.div variants={itemVariants} className="mt-16 flex items-center gap-8 pt-8 border-t border-forest/5">
              <div className="flex -space-x-4">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-12 h-12 rounded-full border-4 border-eggshell overflow-hidden">
                    <img src={`https://i.pravatar.cc/150?u=${i}`} alt="User" className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
              <div>
                <div className="flex items-center gap-1 text-gold mb-1">
                  {[1, 2, 3, 4, 5].map((i) => <Star key={i} size={14} fill="currentColor" />)}
                </div>
                <p className="text-xs font-bold text-forest/40 uppercase tracking-widest">Joined by 5,000+ Nigerians</p>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <div className="relative aspect-[4/5] rounded-[80px] overflow-hidden shadow-2xl">
              <img 
                src="https://picsum.photos/seed/nigerian-food/1200/1500" 
                alt="Healthy Nigerian Meal" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest/40 to-transparent" />
            </div>
            
            {/* Floating Stats Card */}
            <motion.div 
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-12 -left-12 glass-card p-8 rounded-[40px] max-w-[280px]"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-sage/20 rounded-2xl flex items-center justify-center text-sage">
                  <Activity size={24} />
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-forest/40">Real-time Tracking</p>
                  <p className="text-lg font-bold text-forest">Glucose Stability</p>
                </div>
              </div>
              <div className="h-2 w-full bg-forest/5 rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: "75%" }}
                  transition={{ duration: 2, delay: 1 }}
                  className="h-full bg-sage" 
                />
              </div>
              <p className="text-[10px] text-forest/40 mt-3 font-bold uppercase tracking-widest">75% Improvement Rate</p>
            </motion.div>

            {/* Floating Badge */}
            <motion.div 
              animate={{ y: [0, 20, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute top-12 -right-12 bg-clay text-white p-6 rounded-full w-32 h-32 flex flex-col items-center justify-center text-center shadow-xl rotate-12"
            >
              <span className="text-2xl font-black leading-none">100%</span>
              <span className="text-[8px] font-bold uppercase tracking-widest mt-1">Natural Remedies</span>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Features Bento Grid */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-24">
            <span className="badge bg-clay/10 text-clay mb-6">The Ecosystem</span>
            <h2 className="text-5xl md:text-7xl font-serif italic mb-8">Everything you need to thrive.</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            {/* Feature 1 */}
            <motion.div 
              whileHover={{ y: -10 }}
              className="md:col-span-8 bg-eggshell rounded-[60px] p-12 md:p-16 relative overflow-hidden group border border-forest/5"
            >
              <div className="relative z-10 max-w-md">
                <div className="w-16 h-16 bg-clay/10 rounded-3xl flex items-center justify-center text-clay mb-10">
                  <Activity size={32} />
                </div>
                <h3 className="text-4xl font-serif italic mb-6">Precision Tracking.</h3>
                <p className="text-forest/60 leading-relaxed mb-10">
                  Log your glucose levels, meals, and activity with ease. Our intelligent system identifies patterns and provides personalized insights.
                </p>
                <Link to="/tracking" className="btn-ghost group">
                  Open Dashboard <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
              <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 group-hover:opacity-20 transition-opacity">
                <img src="https://picsum.photos/seed/chart/800/1000" alt="Chart" className="w-full h-full object-cover" />
              </div>
            </motion.div>

            {/* Feature 2 */}
            <motion.div 
              whileHover={{ y: -10 }}
              className="md:col-span-4 bg-forest text-white rounded-[60px] p-12 relative overflow-hidden group"
            >
              <div className="relative z-10">
                <div className="w-16 h-16 bg-white/10 rounded-3xl flex items-center justify-center text-sage mb-10">
                  <Leaf size={32} />
                </div>
                <h3 className="text-4xl font-serif italic mb-6">Botanical Library.</h3>
                <p className="text-white/60 leading-relaxed mb-10">
                  Discover the power of Nigerian herbs validated by clinical research.
                </p>
                <Link to="/herbs" className="text-sage font-bold flex items-center gap-2 group">
                  Explore Herbs <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
              <div className="absolute -bottom-12 -right-12 w-48 h-48 bg-sage/20 rounded-full blur-3xl" />
            </motion.div>

            {/* Feature 3 */}
            <motion.div 
              whileHover={{ y: -10 }}
              className="md:col-span-4 bg-sage/10 rounded-[60px] p-12 border border-sage/20 group"
            >
              <div className="w-16 h-16 bg-sage/20 rounded-3xl flex items-center justify-center text-sage mb-10">
                <BookOpen size={32} />
              </div>
              <h3 className="text-3xl font-serif italic mb-6">Expert Guides.</h3>
              <p className="text-forest/60 leading-relaxed mb-8">
                Doctor-approved articles on nutrition, lifestyle, and medication.
              </p>
              <Link to="/guide" className="btn-ghost">Read More</Link>
            </motion.div>

            {/* Feature 4 */}
            <motion.div 
              whileHover={{ y: -10 }}
              className="md:col-span-8 bg-clay rounded-[60px] p-12 md:p-16 text-white relative overflow-hidden group"
            >
              <div className="relative z-10 flex flex-col md:flex-row gap-12 items-center">
                <div className="flex-1">
                  <h3 className="text-4xl font-serif italic mb-6">The Smart Swap.</h3>
                  <p className="text-white/80 leading-relaxed mb-10">
                    Love Pounded Yam? Try our Fonio or Cauliflower-Oat alternative. Same texture, better for your blood sugar.
                  </p>
                  <Link to="/food-swaps" className="bg-white text-clay px-8 py-4 rounded-full font-bold hover:bg-eggshell transition-all inline-block">
                    See All Swaps
                  </Link>
                </div>
                <div className="w-full md:w-64 aspect-square rounded-[40px] overflow-hidden border-4 border-white/20">
                  <img src="https://picsum.photos/seed/food-swap/600/600" alt="Food Swap" className="w-full h-full object-cover" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="section-padding bg-eggshell">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            <div className="flex flex-col items-center text-center">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center text-clay shadow-xl mb-8">
                <Shield size={32} />
              </div>
              <h4 className="text-2xl font-serif italic mb-4">Doctor Approved</h4>
              <p className="text-forest/60 text-sm leading-relaxed">
                Every piece of advice is vetted by our board of Nigerian endocrinologists.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center text-sage shadow-xl mb-8">
                <Users size={32} />
              </div>
              <h4 className="text-2xl font-serif italic mb-4">Community Led</h4>
              <p className="text-forest/60 text-sm leading-relaxed">
                Built for Nigerians, by Nigerians who understand our unique culture.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center text-forest shadow-xl mb-8">
                <Star size={32} />
              </div>
              <h4 className="text-2xl font-serif italic mb-4">Science Backed</h4>
              <p className="text-forest/60 text-sm leading-relaxed">
                Combining ancestral knowledge with the latest clinical research.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="bg-forest rounded-[80px] p-16 md:p-32 text-center relative overflow-hidden">
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
              className="absolute -top-64 -right-64 w-[600px] h-[600px] border border-white/5 rounded-full" 
            />
            <div className="relative z-10 max-w-3xl mx-auto">
              <h2 className="text-5xl md:text-8xl font-serif italic text-white mb-12">
                Your journey to a <br />
                <span className="text-sage">vibrant life</span> starts here.
              </h2>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Link to="/tracking" className="btn-primary">
                  Join for Free
                </Link>
                <Link to="/about" className="btn-secondary border-white/20 text-white hover:bg-white/10">
                  Learn Our Story
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
