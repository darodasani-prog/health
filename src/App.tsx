import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowRight, 
  ChevronRight, 
  Activity, 
  Leaf, 
  Utensils, 
  Users, 
  Menu, 
  X, 
  TrendingUp,
  Droplets,
  Heart
} from 'lucide-react';
import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  AreaChart,
  Area
} from 'recharts';
import { cn } from './lib/utils';

// --- Components ---

const Logo = ({ className, isScrolled }: { className?: string, isScrolled?: boolean }) => (
  <div className={cn("flex items-center gap-3", className)}>
    <div className={cn(
      "text-3xl font-bold tracking-tight transition-colors",
      isScrolled ? "text-white" : "text-teal-logo"
    )}>
      9JA
    </div>
    <div className={cn(
      "w-[2px] h-8 transition-colors",
      isScrolled ? "bg-white/40" : "bg-teal-logo"
    )} />
    <div className={cn(
      "flex flex-col text-[10px] font-bold leading-tight tracking-wider transition-colors",
      isScrolled ? "text-white/80" : "text-teal-logo"
    )}>
      <span>DIABETIC AND</span>
      <span>HEALTH GUIDE</span>
    </div>
  </div>
);

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-6 py-4",
      isScrolled ? "bg-forest/95 backdrop-blur-md py-3 shadow-lg" : "bg-transparent"
    )}>
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Logo isScrolled={isScrolled} />
        
        <div className="hidden md:flex items-center gap-8">
          {['Guide', 'Food Swaps', 'Tracking', 'Herbs', 'Community'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase().replace(' ', '-')}`}
              className={cn(
                "text-sm font-medium uppercase tracking-widest hover:text-clay transition-colors",
                isScrolled ? "text-eggshell/80" : "text-forest/80"
              )}
            >
              {item}
            </a>
          ))}
          <button className="bg-clay text-eggshell px-6 py-2 rounded-full text-sm font-bold hover:bg-clay/90 transition-all">
            GET STARTED
          </button>
        </div>

        <button 
          className="md:hidden text-forest"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu className={isScrolled ? "text-eggshell" : "text-forest"} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-forest p-6 flex flex-col gap-4 md:hidden"
          >
            {['Guide', 'Food Swaps', 'Tracking', 'Herbs', 'Community'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase().replace(' ', '-')}`}
                className="text-eggshell text-lg font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-eggshell">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center section-padding relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-clay font-bold tracking-[0.3em] uppercase text-sm mb-4 block">
            Premium Afro-Minimalist Wellness
          </span>
          <h1 className="text-6xl md:text-8xl font-extrabold text-forest leading-[0.9] tracking-tighter mb-8">
            EAT WELL, <br />
            <span className="italic font-serif text-clay">Live Longer.</span>
          </h1>
          <p className="text-lg text-forest/70 max-w-md mb-10 font-serif leading-relaxed">
            The definitive guide for Nigerians managing diabetes. Traditional wisdom meets modern science in a breathtakingly simple interface.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="bg-forest text-eggshell px-8 py-4 rounded-full font-bold flex items-center gap-2 hover:gap-4 transition-all group">
              START YOUR JOURNEY <ArrowRight className="w-5 h-5" />
            </button>
            <button className="border border-forest/20 text-forest px-8 py-4 rounded-full font-bold hover:bg-forest/5 transition-all">
              EXPLORE GUIDE
            </button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative"
        >
          <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl border-[12px] border-white relative">
            <img 
              src="https://picsum.photos/seed/nigerianfood/1000/1000" 
              alt="Gourmet Fonio Swallow and Efo Riro"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-forest/40 to-transparent" />
          </div>
          {/* Floating badge */}
          <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-6 -left-6 glass-card p-6 rounded-2xl max-w-[200px]"
          >
            <div className="flex items-center gap-2 mb-2">
              <div className="w-2 h-2 rounded-full bg-neon-green animate-pulse" />
              <span className="text-[10px] font-bold tracking-widest text-white uppercase">Live Insight</span>
            </div>
            <p className="text-xs text-white/90 font-serif italic">
              "Fonio has a GI of 45, making it the perfect swallow for stable sugar levels."
            </p>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Background Pattern */}
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-[0.03] pointer-events-none">
        <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
          <pattern id="pattern" x="0" y="0" width="10" height="10" patternUnits="userSpaceOnUse">
            <path d="M0 5h10M5 0v10" stroke="currentColor" strokeWidth="0.1" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#pattern)" />
        </svg>
      </div>
    </section>
  );
};

const FoodSwap = () => {
  const [sliderValue, setSliderValue] = useState(50);
  
  const swaps = [
    { 
      high: { name: "White Flour", gi: 85, color: "bg-red-100", text: "text-red-800" },
      low: { name: "Fonio Flour", gi: 45, color: "bg-emerald-100", text: "text-emerald-800" }
    }
  ];

  return (
    <section id="food-swaps" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-forest mb-4 tracking-tighter">THE SMART SWAP</h2>
          <p className="text-forest/60 font-serif italic">Transform your plate without losing the soul of 9ja flavor.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="p-8 rounded-3xl bg-eggshell border border-forest/5">
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                <Utensils className="text-clay" /> GI Comparison
              </h3>
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between text-xs font-bold mb-2 uppercase tracking-widest">
                    <span>White Garri (High GI)</span>
                    <span className="text-red-500">80+</span>
                  </div>
                  <div className="h-2 w-full bg-forest/5 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: "85%" }}
                      className="h-full bg-red-400" 
                    />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-xs font-bold mb-2 uppercase tracking-widest">
                    <span>Cauliflower Swallow (Low GI)</span>
                    <span className="text-neon-green">15</span>
                  </div>
                  <div className="h-2 w-full bg-forest/5 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: "15%" }}
                      className="h-full bg-neon-green" 
                    />
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="flex-1 p-6 rounded-2xl border border-forest/10 hover:border-clay transition-colors cursor-pointer group">
                <div className="w-10 h-10 rounded-full bg-clay/10 flex items-center justify-center mb-4 group-hover:bg-clay group-hover:text-white transition-all">
                  <ChevronRight className="w-5 h-5" />
                </div>
                <h4 className="font-bold mb-1">Grain Guide</h4>
                <p className="text-xs text-forest/50">Discover 12 local ancient grains.</p>
              </div>
              <div className="flex-1 p-6 rounded-2xl border border-forest/10 hover:border-clay transition-colors cursor-pointer group">
                <div className="w-10 h-10 rounded-full bg-clay/10 flex items-center justify-center mb-4 group-hover:bg-clay group-hover:text-white transition-all">
                  <ChevronRight className="w-5 h-5" />
                </div>
                <h4 className="font-bold mb-1">Soup Science</h4>
                <p className="text-xs text-forest/50">Low-oil traditional recipes.</p>
              </div>
            </div>
          </div>

          <div className="relative aspect-square md:aspect-auto md:h-[500px] rounded-3xl overflow-hidden shadow-2xl group">
            <div className="absolute inset-0 flex">
              <div className="w-full h-full relative">
                <img 
                  src="https://picsum.photos/seed/healthy/800/800" 
                  className="absolute inset-0 w-full h-full object-cover"
                  style={{ clipPath: `inset(0 ${100 - sliderValue}% 0 0)` }}
                  referrerPolicy="no-referrer"
                />
                <img 
                  src="https://picsum.photos/seed/unhealthy/800/800" 
                  className="absolute inset-0 w-full h-full object-cover"
                  style={{ clipPath: `inset(0 0 0 ${sliderValue}%)` }}
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
            
            {/* Slider Control */}
            <div 
              className="absolute inset-y-0 w-1 bg-white shadow-xl cursor-ew-resize z-20"
              style={{ left: `${sliderValue}%` }}
            >
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-2xl flex items-center justify-center">
                <div className="flex gap-1">
                  <div className="w-1 h-4 bg-forest/20 rounded-full" />
                  <div className="w-1 h-4 bg-forest/20 rounded-full" />
                </div>
              </div>
            </div>
            
            <input 
              type="range" 
              min="0" 
              max="100" 
              value={sliderValue}
              onChange={(e) => setSliderValue(parseInt(e.target.value))}
              className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-30"
            />

            <div className="absolute top-6 left-6 glass-card px-4 py-2 rounded-full text-[10px] font-bold tracking-widest text-white uppercase">
              Low GI Choice
            </div>
            <div className="absolute top-6 right-6 glass-card px-4 py-2 rounded-full text-[10px] font-bold tracking-widest text-white uppercase">
              Traditional High GI
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const HealthDashboard = () => {
  const data = [
    { name: '6AM', value: 95 },
    { name: '9AM', value: 140 },
    { name: '12PM', value: 110 },
    { name: '3PM', value: 125 },
    { name: '6PM', value: 105 },
    { name: '9PM', value: 98 },
  ];

  return (
    <section id="tracking" className="section-padding bg-forest text-eggshell relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-6xl font-extrabold mb-8 tracking-tighter leading-none">
              DATA THAT <br />
              <span className="text-neon-green">EMPOWERS.</span>
            </h2>
            <p className="text-eggshell/60 font-serif italic text-lg mb-10 leading-relaxed">
              Visualize your health with precision. Our tracking dashboard uses glassmorphism design to make complex data feel light and actionable.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              {[
                { label: 'Avg. Glucose', value: '112', unit: 'mg/dL', icon: <Droplets className="text-neon-green" /> },
                { label: 'Time in Range', value: '92', unit: '%', icon: <Activity className="text-neon-green" /> },
                { label: 'Activity', value: '8.4k', unit: 'steps', icon: <TrendingUp className="text-neon-green" /> },
                { label: 'Heart Rate', value: '72', unit: 'bpm', icon: <Heart className="text-neon-green" /> },
              ].map((stat, i) => (
                <motion.div 
                  key={i}
                  whileHover={{ y: -5 }}
                  className="glass-card p-6 rounded-3xl"
                >
                  <div className="mb-4">{stat.icon}</div>
                  <div className="text-3xl font-extrabold mb-1">{stat.value}</div>
                  <div className="text-[10px] font-bold tracking-widest text-eggshell/40 uppercase">{stat.label} ({stat.unit})</div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="glass-card p-8 rounded-[40px] h-[500px] flex flex-col">
            <div className="flex justify-between items-center mb-8">
              <h3 className="font-bold tracking-widest uppercase text-xs">Daily Glucose Curve</h3>
              <div className="flex gap-2">
                <div className="px-3 py-1 rounded-full bg-white/5 text-[10px] font-bold">24H</div>
                <div className="px-3 py-1 rounded-full bg-neon-green text-forest text-[10px] font-bold">LIVE</div>
              </div>
            </div>
            
            <div className="flex-1 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={data}>
                  <defs>
                    <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#39FF14" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#39FF14" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" vertical={false} />
                  <XAxis 
                    dataKey="name" 
                    stroke="rgba(255,255,255,0.3)" 
                    fontSize={10} 
                    tickLine={false} 
                    axisLine={false}
                  />
                  <YAxis 
                    stroke="rgba(255,255,255,0.3)" 
                    fontSize={10} 
                    tickLine={false} 
                    axisLine={false}
                  />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#013220', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px' }}
                    itemStyle={{ color: '#39FF14', fontWeight: 'bold' }}
                  />
                  <Area 
                    type="monotone" 
                    dataKey="value" 
                    stroke="#39FF14" 
                    strokeWidth={3}
                    fillOpacity={1} 
                    fill="url(#colorValue)" 
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative Orbs */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-neon-green/10 rounded-full blur-[120px]" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-clay/10 rounded-full blur-[120px]" />
    </section>
  );
};

const HerbLibrary = () => {
  const herbs = [
    { name: "Bitter Leaf", scientific: "Vernonia amygdalina", desc: "Potent blood sugar regulator used for centuries in West Africa.", img: "https://picsum.photos/seed/bitterleaf/400/500" },
    { name: "Ginger", scientific: "Zingiber officinale", desc: "Anti-inflammatory powerhouse that improves insulin sensitivity.", img: "https://picsum.photos/seed/ginger/400/500" },
    { name: "Scent Leaf", scientific: "Ocimum gratissimum", desc: "Rich in antioxidants that protect pancreatic beta cells.", img: "https://picsum.photos/seed/scentleaf/400/500" },
  ];

  return (
    <section id="herbs" className="section-padding bg-eggshell">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-xl">
            <span className="text-clay font-bold tracking-[0.3em] uppercase text-xs mb-4 block">Botanical Wisdom</span>
            <h2 className="text-4xl md:text-6xl font-extrabold text-forest tracking-tighter leading-none">THE HERB LIBRARY.</h2>
          </div>
          <p className="text-forest/60 font-serif italic max-w-xs">
            High-resolution botanical photography meets ancient healing secrets.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {herbs.map((herb, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="aspect-[4/5] rounded-[32px] overflow-hidden mb-6 relative">
                <img 
                  src={herb.img} 
                  alt={herb.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-forest/20 group-hover:bg-transparent transition-colors duration-500" />
                <div className="absolute bottom-6 left-6 right-6">
                   <button className="w-full py-3 glass-card rounded-full text-white text-xs font-bold tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-all translate-y-4 group-hover:translate-y-0">
                    View Details
                   </button>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-forest mb-1">{herb.name}</h3>
              <p className="text-[10px] font-bold tracking-widest text-clay uppercase mb-3">{herb.scientific}</p>
              <p className="text-sm text-forest/60 font-serif leading-relaxed">{herb.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const KnowledgeHub = () => {
  const [activeTab, setActiveTab] = useState('gi');

  const content = {
    gi: {
      title: "The GI Power Rankings",
      subtitle: "Decoding the 'Swallow' Science",
      sections: [
        {
          label: "High GI (The Danger Zone)",
          items: ["White Garri", "Pounded Yam", "White Flour Semo"],
          desc: "These hit your bloodstream like a Lagos express bus. They digest fast, causing sharp sugar spikes."
        },
        {
          label: "Medium GI (The Caution Lane)",
          items: ["Wheat (Whole)", "Yellow Garri", "Plantain Amala"],
          desc: "Better than white flours, but portion control is still your best friend here."
        },
        {
          label: "Low GI (The Green Light)",
          items: ["Fonio (Acha)", "Yam Peel Amala (Dudu)", "Guinea Corn (Ogi Baba)"],
          desc: "Slow-burning fuel. These keep you full and your sugar steady for hours."
        }
      ],
      tip: {
        title: "The Resistant Starch Hack",
        text: "Did you know? If you prepare your swallow, let it cool completely in the fridge, and then gently reheat it, you create 'resistant starch.' This significantly lowers the GI, making even traditional favorites safer for your sugar levels."
      }
    },
    drinks: {
      title: "Sugar-Free 9ja Drinks",
      subtitle: "Refreshing without the Crash",
      items: [
        {
          name: "Zobo (Hibiscus Tea)",
          benefit: "Natural Blood Pressure Regulator",
          desc: "Rich in anthocyanins. Drink it chilled with cloves and ginger—no sugar needed. It’s a heart-health powerhouse."
        },
        {
          name: "Kunun Aya (Tigernut Milk)",
          benefit: "Magnesium & Fiber Boost",
          desc: "Naturally sweet and creamy. Tigernuts are 'prebiotics' that feed good gut bacteria and improve insulin sensitivity."
        },
        {
          name: "Citrus-Ginger Infusion",
          benefit: "Metabolic Fire",
          desc: "Slices of local lime and crushed ginger in cold water. It flushes toxins and keeps your metabolism sharp."
        }
      ]
    },
    portion: {
      title: "Portion Architecture",
      subtitle: "The 50-25-25 Rule for 9ja Plates",
      steps: [
        {
          num: "50%",
          label: "Fiber First",
          desc: "Half your plate should be 'Green.' Think Efo Riro, Edikang Ikong, or plain steamed Okra. Fiber slows down sugar absorption."
        },
        {
          num: "25%",
          label: "The Protein Anchor",
          desc: "A quarter of your plate. Grilled Titus fish, lean goat meat, or boiled eggs. Protein keeps your muscles strong and sugar stable."
        },
        {
          num: "25%",
          label: "The Energy Fuel",
          desc: "The final quarter is for your swallow or rice. Keep it to the size of your fist. Quality over quantity."
        }
      ]
    },
    audit: {
      title: "Hidden Sugar Audit",
      subtitle: "The 'Eye-Openers' on Local Snacks",
      items: [
        {
          name: "Chin-Chin",
          fact: "One small cup of Chin-Chin can contain up to 8 cubes of sugar and refined fats. It's a double-hit to your arteries."
        },
        {
          name: "Meatpies & Sausage Rolls",
          fact: "The 'crust' is the problem. Refined white flour mixed with heavy margarine turns into pure glucose the moment it hits your tongue."
        },
        {
          name: "Buns & Puff-Puff",
          fact: "Deep-fried sugar bombs. They offer zero nutrition and cause immediate, dangerous insulin spikes."
        }
      ]
    },
    pharmacy: {
      title: "The Spice Pharmacy",
      subtitle: "Evidence-Based Healing from the Soil",
      spices: [
        {
          name: "Garlic & Ginger",
          action: "Circulation & Sensitivity",
          desc: "This duo thins the blood naturally and helps your cells 'unlock' to let sugar in for energy."
        },
        {
          name: "Turmeric",
          action: "Anti-Inflammatory",
          desc: "Diabetes is an inflammatory state. Turmeric (Ata Ile Pupa) calms the fire in your vessels."
        },
        {
          name: "Scent Leaf (Efirin)",
          action: "Pancreatic Support",
          desc: "Studies show Scent Leaf extracts can help protect the cells in your pancreas that produce insulin."
        }
      ]
    }
  };

  return (
    <section id="guide" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row gap-12">
          {/* Sidebar Navigation */}
          <div className="md:w-1/3">
            <h2 className="text-4xl font-extrabold text-forest mb-8 tracking-tighter">KNOWLEDGE <br /><span className="text-clay">HUB.</span></h2>
            <div className="space-y-2">
              {[
                { id: 'gi', label: 'GI Power Rankings', icon: <Utensils className="w-4 h-4" /> },
                { id: 'drinks', label: 'Drink Guide', icon: <Droplets className="w-4 h-4" /> },
                { id: 'portion', label: 'Portion Architecture', icon: <TrendingUp className="w-4 h-4" /> },
                { id: 'audit', label: 'Hidden Sugar Audit', icon: <Activity className="w-4 h-4" /> },
                { id: 'pharmacy', label: 'Spice Pharmacy', icon: <Leaf className="w-4 h-4" /> },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={cn(
                    "w-full text-left px-6 py-4 rounded-2xl flex items-center gap-4 transition-all font-bold text-sm tracking-widest uppercase",
                    activeTab === tab.id ? "bg-forest text-eggshell shadow-xl" : "bg-eggshell text-forest/40 hover:bg-forest/5"
                  )}
                >
                  {tab.icon}
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Content Area */}
          <div className="md:w-2/3">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="bg-eggshell rounded-[40px] p-8 md:p-12 border border-forest/5 min-h-[600px]"
              >
                <div className="mb-12">
                  <h3 className="text-3xl md:text-5xl font-extrabold text-forest mb-2 tracking-tighter">
                    {content[activeTab as keyof typeof content].title}
                  </h3>
                  <p className="text-clay font-serif italic text-lg">
                    {content[activeTab as keyof typeof content].subtitle}
                  </p>
                </div>

                {activeTab === 'gi' && (
                  <div className="space-y-8">
                    {content.gi.sections.map((s, i) => (
                      <div key={i} className="bg-white p-6 rounded-3xl shadow-sm">
                        <h4 className="font-bold text-forest mb-2 flex items-center gap-2">
                          <div className={cn("w-2 h-2 rounded-full", 
                            i === 0 ? "bg-red-500" : i === 1 ? "bg-yellow-500" : "bg-neon-green"
                          )} />
                          {s.label}
                        </h4>
                        <div className="flex flex-wrap gap-2 mb-3">
                          {s.items.map(item => (
                            <span key={item} className="px-3 py-1 bg-forest/5 rounded-full text-[10px] font-bold uppercase tracking-widest">{item}</span>
                          ))}
                        </div>
                        <p className="text-sm text-forest/60 font-serif leading-relaxed">{s.desc}</p>
                      </div>
                    ))}
                    <div className="p-6 rounded-3xl bg-forest text-eggshell">
                      <h4 className="font-bold mb-2 flex items-center gap-2"><Activity className="text-neon-green w-4 h-4" /> {content.gi.tip.title}</h4>
                      <p className="text-sm text-eggshell/70 font-serif italic">{content.gi.tip.text}</p>
                    </div>
                  </div>
                )}

                {activeTab === 'drinks' && (
                  <div className="grid gap-6">
                    {content.drinks.items.map((item, i) => (
                      <div key={i} className="bg-white p-6 rounded-3xl shadow-sm group hover:bg-forest hover:text-white transition-all duration-500">
                        <div className="flex justify-between items-start mb-4">
                          <h4 className="text-xl font-bold">{item.name}</h4>
                          <span className="text-[10px] font-bold tracking-widest text-clay uppercase group-hover:text-neon-green">{item.benefit}</span>
                        </div>
                        <p className="text-sm opacity-60 font-serif leading-relaxed">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                )}

                {activeTab === 'portion' && (
                  <div className="space-y-6">
                    {content.portion.steps.map((step, i) => (
                      <div key={i} className="flex gap-6 items-start">
                        <div className="text-4xl font-extrabold text-clay/20 tracking-tighter">{step.num}</div>
                        <div className="pt-2">
                          <h4 className="font-bold text-forest mb-1 uppercase tracking-widest text-sm">{step.label}</h4>
                          <p className="text-sm text-forest/60 font-serif leading-relaxed">{step.desc}</p>
                        </div>
                      </div>
                    ))}
                    <div className="mt-8 aspect-video rounded-3xl bg-forest/5 border-2 border-dashed border-forest/10 flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-24 h-24 rounded-full border-4 border-clay mx-auto mb-4 flex items-center justify-center">
                          <div className="w-12 h-12 bg-clay rounded-full" />
                        </div>
                        <p className="text-[10px] font-bold tracking-widest text-forest/40 uppercase">Visual Plating Guide</p>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'audit' && (
                  <div className="grid gap-6">
                    {content.audit.items.map((item, i) => (
                      <div key={i} className="bg-white p-8 rounded-3xl shadow-sm border-l-4 border-red-500">
                        <h4 className="text-xl font-bold text-forest mb-3">{item.name}</h4>
                        <p className="text-sm text-forest/60 font-serif italic leading-relaxed">"{item.fact}"</p>
                      </div>
                    ))}
                  </div>
                )}

                {activeTab === 'pharmacy' && (
                  <div className="grid gap-6">
                    {content.pharmacy.spices.map((spice, i) => (
                      <div key={i} className="bg-white p-6 rounded-3xl shadow-sm flex gap-6 items-center">
                        <div className="w-16 h-16 rounded-2xl bg-clay/10 flex items-center justify-center flex-shrink-0">
                          <Leaf className="text-clay" />
                        </div>
                        <div>
                          <h4 className="font-bold text-forest">{spice.name}</h4>
                          <p className="text-[10px] font-bold tracking-widest text-clay uppercase mb-2">{spice.action}</p>
                          <p className="text-xs text-forest/60 font-serif leading-relaxed">{spice.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

const CommunitySpotlight = () => {

  return (
    <section id="community" className="section-padding bg-white border-t border-forest/5">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-extrabold text-forest mb-4 tracking-tighter uppercase">Community Spotlight</h2>
          <p className="text-forest/60 font-serif italic">Real stories from Nigerians living their best lives.</p>
        </div>

        <div className="flex flex-wrap justify-center gap-12">
          {[1, 2, 3, 4].map((n) => (
            <div key={n} className="text-center group">
              <div className="w-32 h-32 md:w-48 md:h-48 rounded-full p-2 border-2 border-clay/20 group-hover:border-clay transition-all duration-500 mb-6 mx-auto">
                <div className="w-full h-full rounded-full overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-500">
                  <img 
                    src={`https://picsum.photos/seed/person${n}/300/300`} 
                    alt="Community Member"
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
              <h4 className="font-bold text-forest">Tunde A.</h4>
              <p className="text-[10px] font-bold tracking-widest text-clay uppercase">Lagos, Nigeria</p>
            </div>
          ))}
        </div>
        
        <div className="mt-24 glass-card bg-forest p-12 rounded-[40px] text-center relative overflow-hidden">
          <div className="relative z-10">
            <h3 className="text-3xl md:text-5xl font-extrabold text-eggshell mb-6 tracking-tighter">JOIN THE MOVEMENT.</h3>
            <p className="text-eggshell/60 font-serif italic mb-10 max-w-xl mx-auto">
              Get weekly health tips, local recipes, and expert advice delivered straight to your inbox.
            </p>
            <div className="flex flex-col md:flex-row gap-4 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-1 bg-white/5 border border-white/10 rounded-full px-6 py-4 text-eggshell focus:outline-none focus:border-clay transition-colors"
              />
              <button className="bg-clay text-eggshell px-8 py-4 rounded-full font-bold hover:bg-clay/90 transition-all">
                SUBSCRIBE
              </button>
            </div>
          </div>
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-5 pointer-events-none">
            <svg width="100%" height="100%" viewBox="0 0 100 100">
              <path d="M0 0L100 100M100 0L0 100" stroke="white" strokeWidth="0.5" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-eggshell section-padding border-t border-forest/5">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12">
        <div className="col-span-2">
          <Logo className="mb-6" />
          <p className="text-forest/50 font-serif italic max-w-sm leading-relaxed">
            Dedicated to improving the health and longevity of Nigerians through culturally relevant health education and modern technology.
          </p>
        </div>
        
        <div>
          <h5 className="font-bold text-xs tracking-widest uppercase mb-6">Explore</h5>
          <ul className="space-y-4 text-sm text-forest/70">
            <li><a href="#" className="hover:text-clay transition-colors">Food Swaps</a></li>
            <li><a href="#" className="hover:text-clay transition-colors">Herb Library</a></li>
            <li><a href="#" className="hover:text-clay transition-colors">Tracking App</a></li>
            <li><a href="#" className="hover:text-clay transition-colors">Recipes</a></li>
          </ul>
        </div>
        
        <div>
          <h5 className="font-bold text-xs tracking-widest uppercase mb-6">Connect</h5>
          <ul className="space-y-4 text-sm text-forest/70">
            <li><a href="#" className="hover:text-clay transition-colors">Instagram</a></li>
            <li><a href="#" className="hover:text-clay transition-colors">Twitter</a></li>
            <li><a href="#" className="hover:text-clay transition-colors">Contact Us</a></li>
            <li><a href="#" className="hover:text-clay transition-colors">Privacy Policy</a></li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-24 pt-8 border-t border-forest/5 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-[10px] font-bold tracking-widest text-forest/30 uppercase">
          © 2026 9ja Diabetic and Health Guide. All rights reserved.
        </p>
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-clay" />
          <span className="text-[10px] font-bold tracking-widest text-forest/30 uppercase">Made with Heart in Nigeria</span>
        </div>
      </div>
    </footer>
  );
};

// --- Main App ---

export default function App() {
  return (
    <div className="relative">
      <Navbar />
      <main>
        <Hero />
        <FoodSwap />
        <KnowledgeHub />
        <HealthDashboard />
        <HerbLibrary />
        <CommunitySpotlight />
      </main>
      <Footer />
      
      {/* Scroll Progress Bar */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-clay z-[60] origin-left"
        style={{ scaleX: useScrollProgress() }}
      />
    </div>
  );
}

// Custom Hook for scroll progress
function useScrollProgress() {
  const [progress, setProgress] = useState(0);
  
  useEffect(() => {
    const updateScroll = () => {
      const currentScroll = window.scrollY;
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (scrollHeight) {
        setProgress(currentScroll / scrollHeight);
      }
    };
    window.addEventListener('scroll', updateScroll);
    return () => window.removeEventListener('scroll', updateScroll);
  }, []);
  
  return progress;
}
