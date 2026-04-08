import { motion } from 'motion/react';
import { ArrowRight, Zap, Rocket, ShieldCheck } from 'lucide-react';
import { GradientText } from './ui/GradientText';

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Blobs */}
      <div className="absolute top-1/4 -right-20 w-96 h-96 bg-accent/20 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-1/4 -left-20 w-96 h-96 bg-accent-2/10 rounded-full blur-[120px] animate-pulse delay-700" />

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex flex-wrap gap-3 mb-8">
            <motion.div 
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="flex items-center gap-2 px-4 py-2 glass rounded-full text-xs font-semibold"
            >
              <Zap size={14} className="text-accent" /> 5+ Live Projects
            </motion.div>
            <motion.div 
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
              className="flex items-center gap-2 px-4 py-2 glass rounded-full text-xs font-semibold"
            >
              <Rocket size={14} className="text-accent-2" /> Fast Delivery
            </motion.div>
            <motion.div 
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 3, repeat: Infinity, delay: 1 }}
              className="flex items-center gap-2 px-4 py-2 glass rounded-full text-xs font-semibold"
            >
              <ShieldCheck size={14} className="text-accent" /> Clean Code
            </motion.div>
          </div>

          <h1 className="font-heading text-6xl md:text-8xl font-bold leading-[0.9] mb-6">
            We Build <br />
            <GradientText>Digital Products</GradientText> <br />
            That Scale.
          </h1>
          
          <p className="text-text-muted text-lg md:text-xl max-w-lg mb-10 leading-relaxed">
            Solix là team freelance chuyên outsource các dự án website — SaaS, CRM, HRM, E-commerce và hơn thế nữa.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="#projects"
              className="bg-text-primary text-background px-8 py-4 rounded-full font-bold flex items-center justify-center gap-2 hover:scale-105 transition-transform"
            >
              View Our Work <ArrowRight size={20} />
            </a>
            <a 
              href="#contact"
              className="glass px-8 py-4 rounded-full font-bold flex items-center justify-center gap-2 hover:bg-white/10 transition-colors"
            >
              Let's Talk
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative hidden lg:block"
        >
          <div className="relative z-10 rounded-2xl border border-white/10 overflow-hidden shadow-2xl shadow-accent/20">
            <div className="bg-surface p-2 flex gap-1.5 border-b border-white/10">
              <div className="w-2.5 h-2.5 rounded-full bg-red-500/50" />
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50" />
              <div className="w-2.5 h-2.5 rounded-full bg-green-500/50" />
            </div>
            <div className="aspect-[4/3] bg-card relative overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80" 
                alt="Modern Web Development"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
              
              {/* Floating Code Snippet Decorative */}
              <div className="absolute bottom-6 left-6 right-6 p-4 glass rounded-xl border border-white/10">
                <div className="flex gap-2 mb-2">
                  <div className="w-2 h-2 rounded-full bg-accent" />
                  <div className="w-2 h-2 rounded-full bg-accent-2" />
                </div>
                <div className="space-y-1.5">
                  <div className="h-1.5 w-3/4 bg-white/20 rounded" />
                  <div className="h-1.5 w-1/2 bg-white/10 rounded" />
                </div>
              </div>
            </div>
          </div>
          
          {/* Decorative Elements */}
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-accent rounded-full opacity-20 blur-3xl" />
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-accent-2 rounded-full opacity-20 blur-3xl" />
        </motion.div>
      </div>
    </section>
  );
};
