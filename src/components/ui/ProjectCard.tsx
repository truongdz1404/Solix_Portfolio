import React from 'react';
import { motion } from 'motion/react';
import { ExternalLink } from 'lucide-react';
import { Tag } from './Tag';

interface ProjectCardProps {
  title: string;
  description: string;
  url: string;
  image: string;
  tags: string[];
  type: string;
  index: number;
  key?: any;
}

export const ProjectCard = ({ title, description, url, image, tags, type, index }: ProjectCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -5 }}
      className="group relative bg-card border border-border rounded-2xl overflow-hidden hover:border-accent/50 transition-all duration-300"
    >
      <div className="absolute top-4 left-4 z-10">
        <span className="px-2 py-1 text-[10px] font-bold bg-accent-2 text-background rounded uppercase tracking-tighter">
          {type}
        </span>
      </div>
      
      <div className="aspect-video w-full bg-surface relative overflow-hidden">
        <img 
          src={image} 
          alt={title}
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-500"
        />
        
        <div className="absolute inset-0 bg-background/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-sm">
          <a 
            href={url} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-text-primary text-background px-6 py-2 rounded-full font-semibold transform translate-y-4 group-hover:translate-y-0 transition-transform"
          >
            View Project <ExternalLink size={16} />
          </a>
        </div>
      </div>

      <div className="p-6">
        <h3 className="font-heading text-xl mb-2 group-hover:text-accent transition-colors">{title}</h3>
        <p className="text-text-muted text-sm mb-4 line-clamp-2">{description}</p>
        <div className="flex flex-wrap gap-2">
          {tags.map(tag => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </div>
      </div>
    </motion.div>
  );
};
