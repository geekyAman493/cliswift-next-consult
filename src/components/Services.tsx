import { motion } from 'framer-motion';
import { Cloud, Database, Brain, Users, Shield, Zap } from 'lucide-react';
import { Card } from '@/components/ui/card';

const Services = () => {
  const services = [
    {
      icon: Brain,
      title: 'AI & Machine Learning',
      description: 'Production-ready AI solutions from prototype to scale. Custom models, MLOps, and intelligent automation.',
      features: ['Custom AI Models', 'MLOps Pipeline', 'AI Integration'],
    },
    {
      icon: Cloud,
      title: 'Cloud Engineering',
      description: 'Enterprise cloud architecture, migration, and optimization across AWS, Azure, and GCP.',
      features: ['Cloud Migration', 'Multi-Cloud Strategy', 'DevOps & CI/CD'],
    },
    {
      icon: Database,
      title: 'Data Engineering',
      description: 'Scalable data platforms, real-time pipelines, and modern data warehouses for data-driven decisions.',
      features: ['Data Pipelines', 'Data Warehousing', 'Real-time Analytics'],
    },
    {
      icon: Shield,
      title: 'Security & Compliance',
      description: 'Enterprise-grade security architecture, compliance automation, and risk management.',
      features: ['Security Audits', 'Compliance', 'Risk Management'],
    },
    {
      icon: Zap,
      title: 'Product Development',
      description: 'Full-stack development with modern frameworks. From MVP to enterprise-scale applications.',
      features: ['Web & Mobile Apps', 'API Development', 'Microservices'],
    },
    {
      icon: Users,
      title: 'Expert Staffing',
      description: 'On-demand access to senior engineers, architects, and data scientists for your projects.',
      features: ['Contract Staffing', 'Team Augmentation', 'Expert Consulting'],
    },
  ];

  return (
    <section id="services" className="py-24 md:py-32 relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="mb-6">Solutions that Scale</h2>
            <p className="text-lg text-muted-foreground">
              End-to-end technology services designed for speed, reliability, and enterprise-scale operations.
            </p>
          </motion.div>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="glass-dark p-8 h-full hover:shadow-lg transition-all duration-300 group cursor-pointer border-border/50">
                <div className="mb-6 inline-flex p-3 bg-secondary/10 rounded-xl group-hover:bg-secondary/20 transition-colors">
                  <service.icon className="w-7 h-7 text-secondary" />
                </div>
                
                <h3 className="mb-4 text-foreground">{service.title}</h3>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <ul className="space-y-2">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-secondary rounded-full mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
