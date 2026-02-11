import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';

const educationData = [
  {
    degree: 'M.Tech in Computer Science Engineering',
    institution: 'International Institute of Information Technology Hyderabad (IIIT-H)',
    location: 'Hyderabad, India',
    period: 'Aug 2024 – Present',
    grade: '7.59/10',
    logo: 'IIIT-H',
    description:
      'Graduate program with a strong emphasis on computer science fundamentals, systems, and applied machine learning, supported by rigorous coursework and project-based evaluation.',
    learnings: [
      'Advanced data structures, algorithms, and systems concepts',
      'Machine learning foundations and statistical methods',
      'Computer vision and perception-oriented coursework',
      'Mobile robotics and real-world systems experimentation',
    ],
  },
  {
    degree: 'B.E in Computer Science Engineering',
    institution: 'Vasavi College of Engineering (Autonomous)',
    location: 'Hyderabad, India',
    period: 'Dec 2020 – May 2024',
    grade: '8.48/10',
    logo: 'VCE',
    description:
      'Undergraduate program focused on core computer science principles and practical software development, forming a strong foundation in engineering fundamentals.',
    learnings: [
      'Data structures, algorithms, operating systems, and DBMS',
      'Object-oriented programming and software design',
      'Hands-on experience through academic and personal projects',
      'Problem-solving and algorithmic thinking',
    ],
  },
];

export const Education = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="education" className="py-24 relative bg-secondary/20" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">
            <span className="gradient-text">Education</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Academic foundation built on strong computer science fundamentals
          </p>
        </motion.div>

        <div className="w-full flex flex-col items-center justify-center">
          <div className="flex flex-col gap-8 md:flex-row md:gap-8 w-full justify-center items-stretch">
            {educationData.map((edu, index) => (
              <motion.div
                key={edu.degree}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="flex-1 min-w-[260px] max-w-md bg-card/70 rounded-2xl shadow-lg hover:shadow-xl border border-border px-6 py-8 flex flex-col md:min-h-[420px] mx-auto md:mx-0 backdrop-blur-[2px] transition-all duration-300"
                style={{ boxShadow: '0 8px 32px 0 hsl(var(--card) / 0.25)' }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center shrink-0">
                    <span className="font-display font-bold text-base gradient-text">
                      {edu.logo}
                    </span>
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-lg md:text-xl mb-1 text-left">
                      {edu.degree}
                    </h3>
                    <div className="flex items-center gap-2 text-primary font-semibold">
                      <GraduationCap size={18} />
                      <span>{edu.institution}</span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-3 text-sm text-muted-foreground mb-3">
                  <div className="flex items-center gap-2 bg-secondary/50 px-3 py-1.5 rounded-full">
                    <Calendar size={14} className="text-primary" />
                    <span>{edu.period}</span>
                  </div>
                  <div className="flex items-center gap-2 bg-secondary/50 px-3 py-1.5 rounded-full">
                    <MapPin size={14} className="text-primary" />
                    <span>{edu.location}</span>
                  </div>
                </div>

                <p className="text-muted-foreground mb-4 leading-normal">
                  {edu.description}
                </p>

                <div className="flex-1 flex flex-col justify-end">
                  <p className="text-sm font-semibold text-foreground mb-1">
                    Key Learnings:
                  </p>
                  <ul className="space-y-2 mb-2">
                    {edu.learnings.map((learning, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-sm text-muted-foreground"
                      >
                        <span className="text-primary mt-1">▹</span>
                        <span>{learning}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="text-xs text-muted-foreground mt-2">
                    CGPA: {edu.grade}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
