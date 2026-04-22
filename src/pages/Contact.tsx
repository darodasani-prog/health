import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MessageSquare, Send, ChevronRight, AlertCircle } from 'lucide-react';

export const Contact = () => {
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
            <span className="text-clay font-accent uppercase tracking-[0.3em] text-xs font-bold">Get In Touch</span>
            <div className="h-px w-12 bg-clay" />
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-6xl md:text-8xl font-serif italic text-forest leading-[0.9] mb-12"
          >
            We're here to <br />
            <span className="text-clay">support your journey.</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-forest/60 text-xl leading-relaxed max-w-2xl mx-auto"
          >
            Have questions about our guide, tracking tools, or community? We'd love to hear from you.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-32">
          {/* Contact Info */}
          <div className="space-y-16">
            <div className="flex items-center gap-4 mb-8">
              <div className="h-px w-12 bg-clay" />
              <h2 className="text-5xl md:text-7xl font-serif italic text-forest">Contact Us.</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
              <motion.div 
                whileHover={{ y: -5 }}
                className="p-12 bg-white rounded-[60px] shadow-premium border border-forest/5 group"
              >
                <div className="w-16 h-16 bg-clay/5 rounded-2xl flex items-center justify-center text-clay mb-10 group-hover:scale-110 transition-transform">
                  <Mail size={32} />
                </div>
                <h3 className="text-2xl font-serif italic text-forest mb-4">Email</h3>
                <p className="text-sm text-forest/60 font-bold uppercase tracking-widest">hello@9jadiabetic.com</p>
              </motion.div>
              <motion.div 
                whileHover={{ y: -5 }}
                className="p-12 bg-white rounded-[60px] shadow-premium border border-forest/5 group"
              >
                <div className="w-16 h-16 bg-sage/5 rounded-2xl flex items-center justify-center text-sage mb-10 group-hover:scale-110 transition-transform">
                  <MessageSquare size={32} />
                </div>
                <h3 className="text-2xl font-serif italic text-forest mb-4">WhatsApp</h3>
                <p className="text-sm text-forest/60 font-bold uppercase tracking-widest">+234 (0) 800 9JA HEALTH</p>
              </motion.div>
            </div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-forest text-white p-16 rounded-[60px] relative overflow-hidden shadow-premium group"
            >
              <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M30 0l30 30-30 30L0 30z\' fill=\'%23FFFFFF\' /%3E%3C/svg%3E")' }} />
              <div className="relative z-10 flex flex-col sm:flex-row items-start gap-10">
                <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center text-coral shrink-0 group-hover:rotate-12 transition-transform">
                  <AlertCircle size={32} />
                </div>
                <div>
                  <h4 className="text-3xl font-serif italic mb-4">Emergency Notice</h4>
                  <p className="text-white/60 text-lg leading-relaxed">
                    For medical emergencies, call local emergency numbers or go to the nearest hospital. This platform is for educational purposes only.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white p-16 md:p-24 rounded-[80px] shadow-premium border border-forest/5"
          >
            <form className="space-y-12">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                <div className="space-y-4">
                  <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-forest/30 ml-4">Full Name</label>
                  <input type="text" placeholder="Tunde Afolayan" className="w-full bg-eggshell/50 border border-forest/10 rounded-full px-10 py-6 focus:outline-none focus:border-clay transition-all duration-500 text-forest placeholder:text-forest/20" />
                </div>
                <div className="space-y-4">
                  <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-forest/30 ml-4">Email Address</label>
                  <input type="email" placeholder="tunde@example.com" className="w-full bg-eggshell/50 border border-forest/10 rounded-full px-10 py-6 focus:outline-none focus:border-clay transition-all duration-500 text-forest placeholder:text-forest/20" />
                </div>
              </div>
              <div className="space-y-4">
                <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-forest/30 ml-4">Subject</label>
                <div className="relative">
                  <select className="w-full bg-eggshell/50 border border-forest/10 rounded-full px-10 py-6 focus:outline-none focus:border-clay transition-all duration-500 text-forest appearance-none cursor-pointer">
                    <option>General Inquiry</option>
                    <option>Guide Feedback</option>
                    <option>Technical Support</option>
                    <option>Partnership</option>
                  </select>
                  <div className="absolute right-8 top-1/2 -translate-y-1/2 pointer-events-none text-forest/30">
                    <ChevronRight size={20} className="rotate-90" />
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-forest/30 ml-4">Your Message</label>
                <textarea placeholder="How can we help you today?" className="w-full bg-eggshell/50 border border-forest/10 rounded-[40px] px-10 py-8 focus:outline-none focus:border-clay transition-all duration-500 text-forest placeholder:text-forest/20 h-56 resize-none" />
              </div>
              <button type="submit" className="btn-primary w-full py-8 text-xl shadow-2xl shadow-clay/20 group">
                Send Message <Send size={24} className="group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform" />
              </button>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  );
};
