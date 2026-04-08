import { motion } from 'motion/react';
import { Mail, MessageSquare, MapPin, Send } from 'lucide-react';
import { GradientText } from './ui/GradientText';

export const ContactSection = () => {
  return (
    <section id="contact" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6">
              Let's Build <br />
              <GradientText>Together</GradientText>
            </h2>
            <p className="text-text-muted text-lg mb-10 max-w-md">
              Chúng tôi mở cửa cho các dự án outsource, hợp tác dài hạn và tư vấn kỹ thuật. Có dự án trong đầu? Hãy nói chuyện.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center text-accent">
                  <Mail size={20} />
                </div>
                <div>
                  <div className="text-sm text-text-muted">Email</div>
                  <div className="font-medium">solix.freelancer@gmail.com</div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-accent-2/10 flex items-center justify-center text-accent-2">
                  <MessageSquare size={20} />
                </div>
                <div>
                  <div className="text-sm text-text-muted">Telegram / Zalo</div>
                  <div className="font-medium">@solixteam</div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center text-accent">
                  <MapPin size={20} />
                </div>
                <div>
                  <div className="text-sm text-text-muted">Location</div>
                  <div className="font-medium">Vietnam (Remote-first)</div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass p-8 rounded-3xl"
          >
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-text-muted">Name</label>
                  <input 
                    type="text" 
                    placeholder="Your Name"
                    className="w-full bg-surface border border-border rounded-xl px-4 py-3 focus:border-accent focus:outline-none transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-text-muted">Email</label>
                  <input 
                    type="email" 
                    placeholder="hello@example.com"
                    className="w-full bg-surface border border-border rounded-xl px-4 py-3 focus:border-accent focus:outline-none transition-colors"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-text-muted">Project Type</label>
                <select className="w-full bg-surface border border-border rounded-xl px-4 py-3 focus:border-accent focus:outline-none transition-colors appearance-none">
                  <option>SaaS Platform</option>
                  <option>E-commerce</option>
                  <option>CRM / HRM</option>
                  <option>Landing Page</option>
                  <option>Other</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-text-muted">Message</label>
                <textarea 
                  rows={4}
                  placeholder="Tell us about your project..."
                  className="w-full bg-surface border border-border rounded-xl px-4 py-3 focus:border-accent focus:outline-none transition-colors resize-none"
                />
              </div>

              <button className="w-full bg-gradient-brand py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:opacity-90 transition-opacity">
                Send Message <Send size={18} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
