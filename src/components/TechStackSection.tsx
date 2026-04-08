import { motion } from 'motion/react';
import { GradientText } from './ui/GradientText';

const technologies = [
  { name: 'Next.js', category: 'Frontend' },
  { name: 'React', category: 'Frontend' },
  { name: 'TypeScript', category: 'Language' },
  { name: 'Tailwind CSS', category: 'Styling' },
  { name: 'Framer Motion', category: 'Animation' },
  { name: 'Node.js', category: 'Backend' },
  { name: 'PostgreSQL', category: 'Database' },
  { name: 'Prisma', category: 'ORM' },
  { name: 'Stripe', category: 'Payment' },
  { name: 'Vercel', category: 'Deployment' },
  { name: 'Docker', category: 'DevOps' },
  { name: 'Redis', category: 'Caching' },
];

export const TechStackSection = () => {
  return (
    <section className="py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">
            Our <GradientText>Tech Stack</GradientText>
          </h2>
          <p className="text-text-muted text-lg max-w-2xl mx-auto">
            Chúng tôi sử dụng những công nghệ hiện đại nhất để đảm bảo hiệu năng và bảo mật.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ y: -5, borderColor: 'var(--color-accent)' }}
              className="px-6 py-3 glass rounded-xl border border-border flex flex-col items-center gap-1 transition-all duration-300"
            >
              <span className="font-bold text-text-primary">{tech.name}</span>
              <span className="text-[10px] uppercase tracking-widest text-text-muted">{tech.category}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
