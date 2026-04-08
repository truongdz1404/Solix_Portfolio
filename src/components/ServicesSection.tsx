import { 
  ShoppingCart, 
  Layout, 
  Users, 
  Package, 
  Paintbrush, 
  Link 
} from 'lucide-react';
import { ServiceCard } from './ui/ServiceCard';
import { GradientText } from './ui/GradientText';

const services = [
  {
    icon: <ShoppingCart size={24} />,
    title: "E-commerce Development",
    description: "Shopify custom, Next.js Commerce, hệ thống bán hàng tích hợp payment gateway, inventory, order management."
  },
  {
    icon: <Layout size={24} />,
    title: "SaaS Platform",
    description: "Xây dựng SaaS từ đầu: authentication, subscription billing, multi-tenancy, dashboard analytics."
  },
  {
    icon: <Users size={24} />,
    title: "CRM / HRM Systems",
    description: "Hệ thống quản lý khách hàng và nhân sự: pipeline, reporting, phân quyền vai trò, tích hợp email/calendar."
  },
  {
    icon: <Package size={24} />,
    title: "ERP & Management Systems",
    description: "Phần mềm quản lý kho, bán hàng, kế toán, sản xuất — tùy chỉnh theo quy trình của doanh nghiệp bạn."
  },
  {
    icon: <Paintbrush size={24} />,
    title: "Landing Page & Marketing Sites",
    description: "High-conversion landing pages, corporate websites, portfolio với SEO tối ưu và tốc độ tải cực nhanh."
  },
  {
    icon: <Link size={24} />,
    title: "API & Integration",
    description: "Tích hợp third-party APIs, payment (Stripe, VNPay, MoMo), CMS headless, automation workflows."
  }
];

export const ServicesSection = () => {
  return (
    <section id="services" className="py-24 bg-surface/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">
            What We <GradientText>Do</GradientText>
          </h2>
          <p className="text-text-muted text-lg max-w-2xl mx-auto">
            Dịch vụ phát triển web toàn diện, từ MVP đến production
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard 
              key={service.title}
              {...service}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
