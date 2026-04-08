import React, { ReactNode } from 'react';
import { motion } from 'motion/react';

interface ServiceCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  index: number;
  key?: any;
}

export const ServiceCard = ({ icon, title, description, index }: ServiceCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="glass p-8 rounded-2xl hover:border-accent/50 group transition-all duration-300"
    >
      <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent mb-6 group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      <h3 className="font-heading text-xl mb-3">{title}</h3>
      <p className="text-text-muted text-sm leading-relaxed">
        {description}
      </p>
    </motion.div>
  );
};
