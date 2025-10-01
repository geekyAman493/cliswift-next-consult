import { motion } from 'framer-motion';
import { ArrowRight, TrendingUp, Clock, DollarSign } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const CaseStudies = () => {
  const studies = [
    {
      title: 'Fortune 500 Cloud Migration',
      industry: 'Financial Services',
      challenge: 'Legacy infrastructure limiting scalability and innovation',
      solution: 'Multi-cloud architecture with AWS and Azure, automated CI/CD pipelines, and microservices migration',
      results: [
        { icon: TrendingUp, label: '300% Performance Increase', value: '3x' },
        { icon: Clock, label: 'Reduced Deployment Time', value: '80%' },
        { icon: DollarSign, label: 'Infrastructure Cost Savings', value: '40%' },
      ],
      tags: ['Cloud Migration', 'DevOps', 'AWS'],
    },
    {
      title: 'Real-time Analytics Platform',
      industry: 'E-commerce',
      challenge: 'Need for real-time customer insights and personalization at scale',
      solution: 'Streaming data pipeline with Kafka, Snowflake data warehouse, and ML-powered recommendation engine',
      results: [
        { icon: TrendingUp, label: 'Revenue Growth', value: '45%' },
        { icon: Clock, label: 'Data Processing Speed', value: '10x' },
        { icon: DollarSign, label: 'Customer Retention', value: '+25%' },
      ],
      tags: ['Data Engineering', 'ML', 'Real-time'],
    },
    {
      title: 'AI-Powered Document Processing',
      industry: 'Healthcare',
      challenge: 'Manual processing of thousands of medical documents daily',
      solution: 'Custom NLP models, automated workflows, and intelligent document classification system',
      results: [
        { icon: TrendingUp, label: 'Processing Speed', value: '95%' },
        { icon: Clock, label: 'Time Saved Daily', value: '200hrs' },
        { icon: DollarSign, label: 'Annual Savings', value: '$2M' },
      ],
      tags: ['AI/ML', 'NLP', 'Automation'],
    },
  ];

  return (
    <section id="case-studies" className="py-24 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="mb-6">Proven Results</h2>
            <p className="text-lg text-muted-foreground">
              Real transformations delivering measurable business impact for enterprise clients.
            </p>
          </motion.div>
        </div>

        {/* Case Studies Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {studies.map((study, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="glass h-full flex flex-col">
                {/* Industry Tag */}
                <div className="p-6 pb-0">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-secondary/10 text-secondary">
                    {study.industry}
                  </span>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="mb-4 text-foreground">{study.title}</h3>
                  
                  <div className="space-y-4 mb-6">
                    <div>
                      <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1">
                        Challenge
                      </p>
                      <p className="text-sm text-foreground/80">{study.challenge}</p>
                    </div>
                    
                    <div>
                      <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1">
                        Solution
                      </p>
                      <p className="text-sm text-foreground/80">{study.solution}</p>
                    </div>
                  </div>

                  {/* Results */}
                  <div className="space-y-3 mb-6 mt-auto">
                    {study.results.map((result, i) => (
                      <div key={i} className="flex items-center justify-between p-3 bg-primary/5 rounded-lg">
                        <div className="flex items-center space-x-3">
                          <result.icon className="w-4 h-4 text-secondary" />
                          <span className="text-xs text-muted-foreground">{result.label}</span>
                        </div>
                        <span className="text-lg font-bold text-foreground">{result.value}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {study.tags.map((tag, i) => (
                      <span key={i} className="text-xs px-2 py-1 bg-border/50 rounded text-muted-foreground">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12"
        >
          <Button variant="outline" size="lg" className="group">
            View All Case Studies
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default CaseStudies;
