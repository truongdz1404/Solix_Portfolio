import { ProjectCard } from './ui/ProjectCard';
import { GradientText } from './ui/GradientText';

const projects = [
  {
    title: "Me Creative",
    url: "https://me-creative-mu.vercel.app/",
    image: "https://v1.screenshot.11ty.dev/https%3A%2F%2Fme-creative-mu.vercel.app%2F/large/",
    description: "Creative agency portfolio với animation mượt mà, thiết kế độc đáo và trải nghiệm người dùng cao cấp.",
    tags: ["Next.js", "Framer Motion", "Tailwind"],
    type: "Portfolio / Creative"
  },
  {
    title: "FoodMap Asia",
    url: "https://foodmap.asia",
    image: "https://v1.screenshot.11ty.dev/https%3A%2F%2Ffoodmap.asia/large/",
    description: "Nền tảng khám phá ẩm thực châu Á — bản đồ nhà hàng, review cộng đồng và tích hợp đặt bàn.",
    tags: ["React", "Maps API", "Node.js"],
    type: "Platform / F&B"
  },
  {
    title: "Nexus House",
    url: "https://nexushouse.vn/",
    image: "https://v1.screenshot.11ty.dev/https%3A%2F%2Fnexushouse.vn%2F/large/",
    description: "Website bất động sản cao cấp với listing, tìm kiếm nâng cao và hệ thống CRM tích hợp.",
    tags: ["Next.js", "CRM", "PostgreSQL"],
    type: "Real Estate"
  },
  {
    title: "The Skinna",
    url: "https://theskinna.com",
    image: "https://v1.screenshot.11ty.dev/https%3A%2F%2Ftheskinna.com/large/",
    description: "Thương hiệu skincare D2C — e-commerce tích hợp loyalty program, subscription và beauty quiz.",
    tags: ["E-commerce", "Shopify", "Tailwind"],
    type: "E-commerce / Beauty"
  },
  {
    title: "FitFood",
    url: "https://fitfood.vn",
    image: "https://v1.screenshot.11ty.dev/https%3A%2F%2Ffitfood.vn/large/",
    description: "Nền tảng đặt meal prep healthy theo gói — subscription model, meal planner, giao hàng định kỳ.",
    tags: ["Next.js", "Subscription", "F&B"],
    type: "E-commerce / Health"
  },
  {
    title: "iCare BHXH",
    url: "https://kekhai.tokhaibaohiem.vn/",
    image: "https://v1.screenshot.11ty.dev/https%3A%2F%2Fkekhai.tokhaibaohiem.vn%2F/large/",
    description: "Hệ thống quản lý Bảo hiểm xã hội điện tử iCare — Hỗ trợ báo tăng/giảm lao động, điều chỉnh mức đóng và quản lý hồ sơ nhân sự trực tuyến một cách chuyên nghiệp.",
    tags: ["Enterprise", "Dashboard", "React"],
    type: "Management / GovTech"
  }
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">
            Our <GradientText>Work</GradientText>
          </h2>
          <p className="text-text-muted text-lg max-w-2xl mx-auto">
            Các sản phẩm thực tế chúng tôi đã build và ship
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard 
              key={project.title}
              {...project}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
