import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Cpu, Network, Code2, Trophy, Eye, Layers } from 'lucide-react';

const highlights = [
  {
    icon: Eye,
    title: 'Computer Vision',
    description: 'Building real-time vision pipelines involving detection, tracking, homography, and multi-camera geometry.',
  },
  {
    icon: Network,
    title: 'Distributed Systems',
    description: 'Designing peer-to-peer systems with concurrency, synchronization, and network-level reliability.',
  },
  {
    icon: Code2,
    title: 'Backend Engineering',
    description: 'Developing structured backend services, APIs, and data flows with a focus on correctness and maintainability.',
  },
  {
    icon: Cpu,
    title: 'Systems Thinking',
    description: 'Comfortable working close to the system layer—threads, memory, performance trade-offs, and failures.',
  },
  {
    icon: Trophy,
    title: 'Problem Solving',
    description: 'Strong algorithmic foundation shaped by competitive programming and systems coursework.',
  },
  {
    icon: Layers,
    title: 'End-to-End Projects',
    description: 'Experience taking ideas from concept to implementation across software, ML, and hardware boundaries.',
  },
];

export const About = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="py-24 relative" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Software engineer with a strong focus on systems, vision, and real-world problem solving
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-card p-8"
          >
            <h3 className="font-display text-xl font-semibold mb-4 gradient-text">
              Background
            </h3>

            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                I am a <span className="text-foreground font-medium">Software Engineer</span> and M.Tech
                Computer Science student at IIIT Hyderabad, with a strong interest in building
                reliable, real-world systems. My work spans computer vision, distributed systems,
                backend development, and applied machine learning, with a consistent focus on
                correctness, performance, and system-level thinking.
              </p>

              <p>
                Across my projects, I’ve worked on problems such as real-time multi-camera tracking,
                peer-to-peer file sharing with concurrency control, and end-to-end backend systems.
                These experiences have shaped how I approach engineering—understanding constraints,
                reasoning about failure cases, and designing solutions that scale beyond toy setups.
              </p>

              <p>
                Competitive programming played a key role in shaping my problem-solving mindset.
                I enjoy breaking complex problems into smaller, tractable components and building
                solutions that are simple, efficient, and maintainable. I’m motivated by work that
                sits at the intersection of theory and practice, where strong fundamentals translate
                directly into robust systems.
              </p>
            </div>
          </motion.div>

          {/* Highlights */}
          <div className="grid sm:grid-cols-2 gap-4">
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="glass-card p-6 group hover:border-primary/30 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h4 className="font-display font-semibold mb-2">{item.title}</h4>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};