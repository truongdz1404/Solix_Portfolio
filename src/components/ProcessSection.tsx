import { motion } from 'motion/react';
import { GradientText } from './ui/GradientText';

const steps = [
  {
    number: '01',
    title: 'Discovery',
    description: 'Kickoff call, thu thập requirements, phân tích scope và lên roadmap chi tiết.'
  },
  {
    number: '02',
    title: 'Design & Plan',
    description: 'Wireframe, UI mockup, tech stack decision, chia milestone và estimate timeline.'
  },
  {
    number: '03',
    title: 'Build & Iterate',
    description: 'Phát triển theo sprint, demo định kỳ, feedback loop nhanh với client.'
  },
  {
    number: '04',
    title: 'Ship & Support',
    description: 'Deploy production, QA toàn diện, hỗ trợ sau launch và maintain theo yêu cầu.'
  }
];

export const ProcessSection = () => {
  return (
    <section id="process" className="py-24 bg-surface/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">
            How We <GradientText>Work</GradientText>
          </h2>
          <p className="text-text-muted text-lg max-w-2xl mx-auto">
            Quy trình làm việc rõ ràng, minh bạch từ đầu đến cuối
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-px bg-border -translate-y-1/2 z-0" />
          
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative z-10 glass p-8 rounded-2xl group hover:border-accent transition-all duration-300"
            >
              <div className="font-heading text-5xl font-bold text-accent/20 group-hover:text-accent/40 transition-colors mb-4">
                {step.number}
              </div>
              <h3 className="font-heading text-xl mb-3">{step.title}</h3>
              <p className="text-text-muted text-sm leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
