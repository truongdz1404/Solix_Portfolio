import { motion } from 'motion/react';
import { GradientText } from './ui/GradientText';

const stats = [
  { label: 'Live Projects', value: '5+' },
  { label: 'Years Experience', value: '3+' },
  { label: 'Happy Clients', value: '10+' },
  { label: 'Lines of Code', value: '∞' },
];

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-8">
              About <GradientText>Solix</GradientText>
            </h2>
            <div className="space-y-6 text-text-muted text-lg leading-relaxed">
              <p>
                Solix là một team freelancer tại Việt Nam, chuyên nhận outsource phát triển web cho các đối tác trong và ngoài nước.
              </p>
              <p>
                Chúng tôi tập trung vào các sản phẩm có chiều sâu: SaaS platforms, hệ thống CRM/HRM, ứng dụng quản lý nội bộ và e-commerce. Không chỉ code — chúng tôi tư vấn, thiết kế và bảo trì sản phẩm.
              </p>
            </div>
          </motion.div>

          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass p-8 rounded-2xl text-center flex flex-col justify-center"
              >
                <div className="font-heading text-4xl md:text-5xl font-bold text-accent mb-2">
                  {stat.value}
                </div>
                <div className="text-text-muted text-sm font-medium uppercase tracking-wider">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
