import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

const Stats = () => {
  const stats = [
    { value: 150, suffix: '+', label: 'Enterprise Clients' },
    { value: 98, suffix: '%', label: 'Client Satisfaction' },
    { value: 500, suffix: '+', label: 'Projects Delivered' },
    { value: 50, suffix: '+', label: 'Expert Engineers' },
  ];

  return (
    <section className="py-16 md:py-24 bg-primary">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center"
            >
              <StatCounter targetValue={stat.value} suffix={stat.suffix} />
              <p className="text-sm md:text-base text-primary-foreground/70 font-medium">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const StatCounter = ({ targetValue, suffix }: { targetValue: number; suffix: string }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000;
    const steps = 60;
    const increment = targetValue / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= targetValue) {
        setCount(targetValue);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [isVisible, targetValue]);

  return (
    <div ref={ref} className="text-4xl md:text-5xl font-bold text-primary-foreground mb-2">
      {count}
      {suffix}
    </div>
  );
};

export default Stats;
