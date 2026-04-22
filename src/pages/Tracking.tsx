import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Plus, 
  Activity, 
  TrendingUp, 
  TrendingDown, 
  Calendar, 
  Clock, 
  ChevronRight, 
  ChevronLeft, 
  Save, 
  X, 
  Camera, 
  Mic, 
  Droplets, 
  Utensils, 
  Info 
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

// Mock Data
const MOCK_READINGS = [
  { time: '06:00', value: 95, type: 'Fasting' },
  { time: '09:00', value: 145, type: 'Post-Breakfast' },
  { time: '12:00', value: 110, type: 'Pre-Lunch' },
  { time: '15:00', value: 165, type: 'Post-Lunch' },
  { time: '18:00', value: 105, type: 'Pre-Dinner' },
  { time: '21:00', value: 135, type: 'Post-Dinner' },
];

export const Tracking = () => {
  const [readings, setReadings] = useState(MOCK_READINGS);
  const [isAdding, setIsAdding] = useState(false);
  const [newValue, setNewValue] = useState('');
  const [newType, setNewType] = useState('Post-Meal');
  const [newNotes, setNewNotes] = useState('');

  const currentGlucose = readings[readings.length - 1].value;
  const status = currentGlucose > 140 ? 'High' : currentGlucose < 70 ? 'Low' : 'Normal';
  const statusColor = status === 'High' ? 'text-coral' : status === 'Low' ? 'text-blue-500' : 'text-sage';
  const statusBg = status === 'High' ? 'bg-coral/10' : status === 'Low' ? 'bg-blue-500/10' : 'bg-sage/10';

  const handleAddReading = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newValue) return;
    
    const now = new Date();
    const timeStr = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    
    const newReading = {
      time: timeStr,
      value: parseInt(newValue),
      type: newType
    };
    
    setReadings([...readings, newReading]);
    setIsAdding(false);
    setNewValue('');
    setNewNotes('');
  };

  return (
    <div className="pt-40 pb-32 bg-eggshell min-h-screen relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-sage/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-clay/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-12 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-12 bg-clay" />
              <span className="text-clay font-accent uppercase tracking-[0.3em] text-xs font-bold">Health Dashboard</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-serif italic text-forest leading-[0.9]">Welcome back, <br /><span className="text-clay">Tunde.</span></h1>
            <p className="text-forest/60 mt-6 text-lg max-w-md">Visualize your health with clinical precision and traditional wisdom.</p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-6"
          >
            <div className="hidden md:flex flex-col items-end">
              <p className="text-[10px] font-bold uppercase tracking-widest text-forest/40 mb-1">Current Date</p>
              <p className="text-lg font-bold text-forest">Monday, 23 March</p>
            </div>
            <button 
              onClick={() => setIsAdding(true)}
              className="btn-primary group shadow-2xl shadow-clay/20"
            >
              <Plus size={20} className="group-hover:rotate-90 transition-transform" /> Log Reading
            </button>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column: Snapshot & Stats */}
          <div className="lg:col-span-4 space-y-10">
            {/* Current Reading Card */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-white p-12 rounded-[60px] shadow-premium border border-forest/5 relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-40 h-40 bg-forest/5 rounded-full -mr-20 -mt-20 group-hover:scale-110 transition-transform duration-700" />
              <div className="relative z-10">
                <div className="flex justify-between items-start mb-12">
                  <div className="w-16 h-16 bg-forest/5 rounded-2xl flex items-center justify-center text-forest">
                    <Activity size={32} />
                  </div>
                  <div className={`px-6 py-3 rounded-full text-[10px] font-bold uppercase tracking-[0.2em] ${statusBg} ${statusColor}`}>
                    {status}
                  </div>
                </div>
                <div className="flex items-baseline gap-3 mb-4">
                  <span className="text-8xl font-black text-forest tracking-tighter leading-none">{currentGlucose}</span>
                  <span className="text-forest/40 font-bold uppercase tracking-widest text-xs">mg/dL</span>
                </div>
                <p className="text-xs text-forest/40 mb-10 flex items-center gap-2 font-bold uppercase tracking-widest">
                  <Clock size={14} /> Last reading: {readings[readings.length - 1].time}
                </p>
                <div className="flex items-center gap-3 p-4 bg-sage/5 rounded-2xl text-sage font-bold text-xs uppercase tracking-widest">
                  <TrendingDown size={18} /> Stable trend
                </div>
              </div>
            </motion.div>

            {/* Quick Stats Grid */}
            <div className="grid grid-cols-2 gap-6">
              <motion.div 
                whileHover={{ y: -5 }}
                className="bg-white p-8 rounded-[40px] border border-forest/5 shadow-sm group"
              >
                <div className="w-12 h-12 bg-blue-500/10 rounded-2xl flex items-center justify-center text-blue-500 mb-6 group-hover:scale-110 transition-transform">
                  <Droplets size={24} />
                </div>
                <span className="text-[10px] text-forest/40 uppercase tracking-[0.2em] font-bold">Hydration</span>
                <p className="text-2xl font-bold text-forest mt-2">1.2<span className="text-sm text-forest/40 ml-1">L</span></p>
                <div className="h-1 w-full bg-forest/5 rounded-full mt-4 overflow-hidden">
                  <div className="h-full bg-blue-500" style={{ width: '48%' }} />
                </div>
              </motion.div>
              <motion.div 
                whileHover={{ y: -5 }}
                className="bg-white p-8 rounded-[40px] border border-forest/5 shadow-sm group"
              >
                <div className="w-12 h-12 bg-clay/10 rounded-2xl flex items-center justify-center text-clay mb-6 group-hover:scale-110 transition-transform">
                  <Utensils size={24} />
                </div>
                <span className="text-[10px] text-forest/40 uppercase tracking-[0.2em] font-bold">Nutrition</span>
                <p className="text-2xl font-bold text-forest mt-2">3<span className="text-sm text-forest/40 ml-1">Logged</span></p>
                <div className="h-1 w-full bg-forest/5 rounded-full mt-4 overflow-hidden">
                  <div className="h-full bg-clay" style={{ width: '75%' }} />
                </div>
              </motion.div>
            </div>

            {/* Insights Card */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-forest text-white p-12 rounded-[60px] relative overflow-hidden group"
            >
              <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M30 0l30 30-30 30L0 30z\' fill=\'%23FFFFFF\' /%3E%3C/svg%3E")' }} />
              <div className="relative z-10">
                <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center text-sage mb-8 group-hover:rotate-12 transition-transform">
                  <Info size={28} />
                </div>
                <h3 className="text-2xl font-serif italic mb-6">Correlation Insight</h3>
                <p className="text-white/60 leading-relaxed mb-10">
                  "Your sugar spikes consistently after white rice. Consider swapping for Ofada rice to maintain stability."
                </p>
                <button className="text-sage font-bold text-sm flex items-center gap-2 group/btn">
                  Learn more <ChevronRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Chart & History */}
          <div className="lg:col-span-8 space-y-10">
            {/* Chart Card */}
            <div className="bg-white p-12 rounded-[60px] shadow-premium border border-forest/5">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 mb-12">
                <div>
                  <h3 className="text-3xl font-serif italic text-forest">Daily Glucose Curve</h3>
                  <p className="text-forest/40 text-xs font-bold uppercase tracking-widest mt-2">March 23, 2024</p>
                </div>
                <div className="flex gap-3">
                  <button className="w-12 h-12 flex items-center justify-center bg-eggshell hover:bg-forest/5 rounded-2xl transition-colors"><ChevronLeft size={20} /></button>
                  <button className="w-12 h-12 flex items-center justify-center bg-eggshell hover:bg-forest/5 rounded-2xl transition-colors"><ChevronRight size={20} /></button>
                </div>
              </div>
              
              <div className="h-[450px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={readings}>
                    <defs>
                      <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#C65D3B" stopOpacity={0.2}/>
                        <stop offset="95%" stopColor="#C65D3B" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#F5F1E8" />
                    <XAxis 
                      dataKey="time" 
                      axisLine={false} 
                      tickLine={false} 
                      tick={{ fill: '#2C2C2C', fontSize: 10, fontWeight: 700, opacity: 0.3 }} 
                      dy={20}
                    />
                    <YAxis 
                      axisLine={false} 
                      tickLine={false} 
                      tick={{ fill: '#2C2C2C', fontSize: 10, fontWeight: 700, opacity: 0.3 }} 
                      domain={[0, 200]}
                      dx={-10}
                    />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: '#1A3C34', 
                        border: 'none', 
                        borderRadius: '24px', 
                        color: '#fff',
                        padding: '20px',
                        boxShadow: '0 20px 50px rgba(0,0,0,0.2)'
                      }}
                      itemStyle={{ color: '#fff', fontWeight: 700 }}
                      cursor={{ stroke: '#C65D3B', strokeWidth: 2, strokeDasharray: '5 5' }}
                    />
                    <Area 
                      type="monotone" 
                      dataKey="value" 
                      stroke="#C65D3B" 
                      strokeWidth={6} 
                      fillOpacity={1} 
                      fill="url(#colorValue)" 
                      animationDuration={2000}
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* History List */}
            <div className="bg-white p-12 rounded-[60px] shadow-premium border border-forest/5">
              <div className="flex justify-between items-center mb-12">
                <h3 className="text-3xl font-serif italic text-forest">Recent History</h3>
                <button className="text-xs font-bold uppercase tracking-widest text-clay hover:underline underline-offset-8">View All</button>
              </div>
              <div className="space-y-6">
                {readings.slice().reverse().map((reading, idx) => (
                  <motion.div 
                    key={idx} 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex items-center justify-between p-8 bg-eggshell/30 rounded-[32px] border border-forest/5 group hover:bg-white hover:shadow-xl transition-all duration-500"
                  >
                    <div className="flex items-center gap-8">
                      <div className={`w-16 h-16 rounded-2xl flex items-center justify-center text-2xl font-black ${reading.value > 140 ? 'bg-coral/10 text-coral' : 'bg-sage/10 text-sage'}`}>
                        {reading.value}
                      </div>
                      <div>
                        <h4 className="text-xl font-serif italic text-forest">{reading.type}</h4>
                        <p className="text-[10px] font-bold uppercase tracking-widest text-forest/30 flex items-center gap-2 mt-2">
                          <Clock size={14} /> {reading.time}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-6">
                      <div className="hidden sm:flex flex-col items-end">
                        <span className="text-[10px] font-bold uppercase tracking-widest text-forest/20">Status</span>
                        <span className={`text-xs font-bold ${reading.value > 140 ? 'text-coral' : 'text-sage'}`}>
                          {reading.value > 140 ? 'Elevated' : 'Optimal'}
                        </span>
                      </div>
                      <button className="w-12 h-12 flex items-center justify-center bg-white rounded-full text-forest/20 group-hover:text-forest group-hover:shadow-lg transition-all">
                        <ChevronRight size={24} />
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Add Reading Modal */}
      <AnimatePresence>
        {isAdding && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsAdding(false)}
              className="absolute inset-0 bg-forest/60 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative bg-white w-full max-w-lg rounded-[40px] overflow-hidden shadow-2xl"
            >
              <div className="p-10">
                <div className="flex justify-between items-center mb-10">
                  <h3 className="text-3xl font-serif italic">Log Reading</h3>
                  <button onClick={() => setIsAdding(false)} className="p-2 hover:bg-eggshell rounded-full transition-colors">
                    <X size={24} />
                  </button>
                </div>

                <form onSubmit={handleAddReading} className="space-y-8">
                  <div>
                    <label className="text-xs font-bold uppercase tracking-widest text-forest/40 mb-4 block">Glucose Value (mg/dL)</label>
                    <input
                      type="number"
                      value={newValue}
                      onChange={(e) => setNewValue(e.target.value)}
                      placeholder="e.g. 110"
                      className="w-full text-5xl font-black text-forest border-b-2 border-forest/10 focus:border-clay focus:outline-none py-4 bg-transparent transition-colors"
                      autoFocus
                    />
                  </div>

                  <div>
                    <label className="text-xs font-bold uppercase tracking-widest text-forest/40 mb-4 block">Reading Type</label>
                    <div className="grid grid-cols-2 gap-3">
                      {['Fasting', 'Pre-Meal', 'Post-Meal', 'Bedtime'].map((type) => (
                        <button
                          key={type}
                          type="button"
                          onClick={() => setNewType(type)}
                          className={`py-4 rounded-2xl text-sm font-bold transition-all ${newType === type ? 'bg-forest text-white' : 'bg-eggshell text-forest hover:bg-forest/10'}`}
                        >
                          {type}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-bold uppercase tracking-widest text-forest/40 mb-4 block">Notes (Optional)</label>
                    <div className="flex gap-4">
                      <textarea
                        value={newNotes}
                        onChange={(e) => setNewNotes(e.target.value)}
                        placeholder="What did you eat? How do you feel?"
                        className="flex-1 bg-eggshell/50 border border-forest/10 rounded-2xl p-4 text-sm focus:outline-none focus:border-clay transition-colors h-24 resize-none"
                      />
                      <div className="flex flex-col gap-2">
                        <button type="button" className="p-4 bg-eggshell rounded-2xl text-forest hover:bg-forest/10 transition-colors"><Camera size={20} /></button>
                        <button type="button" className="p-4 bg-eggshell rounded-2xl text-forest hover:bg-forest/10 transition-colors"><Mic size={20} /></button>
                      </div>
                    </div>
                  </div>

                  <button type="submit" className="btn-primary w-full py-6 text-lg">
                    <Save size={20} /> Save Reading
                  </button>
                </form>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};
