import { Github, Linkedin, Facebook } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="py-12 border-t border-border">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div>
            <div className="font-heading text-2xl font-bold tracking-tighter text-gradient mb-2">
              SOLIX
            </div>
            <p className="text-text-muted text-sm">We build. You grow.</p>
          </div>

          <div className="flex gap-8 text-sm text-text-muted">
            <a href="#" className="hover:text-text-primary transition-colors">Privacy</a>
            <a href="#" className="hover:text-text-primary transition-colors">Terms</a>
            <a href="#" className="hover:text-text-primary transition-colors">Github</a>
          </div>

          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center hover:text-accent transition-colors">
              <Github size={20} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center hover:text-accent transition-colors">
              <Linkedin size={20} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center hover:text-accent transition-colors">
              <Facebook size={20} />
            </a>
          </div>
        </div>
        
        <div className="mt-12 text-center text-text-muted text-xs">
          © 2025 Solix Team. All rights reserved.
        </div>
      </div>
    </footer>
  );
};
