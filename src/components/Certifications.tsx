import { motion } from 'framer-motion';
import { Award, ExternalLink } from 'lucide-react';

interface Certification {
  title: string;
  authority: string;
  link: string;
  meta?: string;
  highlight?: boolean;
}

const certifications: Certification[] = [
  {
    title: 'Software Engineer Intern – Internship Completion',
    authority: 'Hexagon Capability Center India',
    link: 'Zia Mahmood Hussain_Internship Completion Letter.pdf',
    meta: 'Jan 2024 – May 2024',
    highlight: true,
  },
  {
    title: 'Data Mining (Top 2%, Score: 90%)',
    authority: 'NPTEL · IIT Kharagpur',
    link: 'https://nptel.ac.in/noc/E_Certificate/NPTEL23CS43S3472282103137896',
    meta: 'Jan–Mar 2023',
  },
  {
    title: 'AWS Academy Graduate – Cloud Foundations',
    authority: 'AWS Academy',
    link: 'https://www.credly.com/go/U6rJRZzz',
    meta: '20 hours · Nov 2023',
  },
  {
    title: 'Programming in Java',
    authority: 'NPTEL · IIT Kharagpur',
    link: 'https://nptel.ac.in/noc/E_Certificate/NPTEL23CS49S5375095104333185',
    meta: 'Jan–Apr 2023',
  },
  {
    title: 'Introduction to Machine Learning',
    authority: 'NPTEL · IIT Kharagpur',
    link: 'https://nptel.ac.in/noc/E_Certificate/NPTEL22CS97S1301286609034715',
    meta: 'Jul–Sep 2022',
  },
  {
    title: 'Introduction to Python',
    authority: 'Coding Ninjas',
    link: 'https://certificate.codingninjas.com/verify/d0441a9c76f650f1',
    meta: 'Dec 2021 – Jun 2022',
  },
  {
    title: 'Introduction to Java',
    authority: 'Coding Ninjas',
    link: 'https://certificate.codingninjas.com/verify/716956cbfd2e40a2',
    meta: 'Dec 2021 – Jun 2022',
  },
];

export const Certifications = () => {
  return (
    <section id="certifications" className="py-24">
      <div className="section-container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">
            Certifications & <span className="gradient-text">Credentials</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Academic and industry credentials supporting my engineering background
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <motion.a
              key={cert.title}
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className={`
                relative group glass-card p-6
                transition-all duration-300
                hover:-translate-y-1 hover:border-primary/40
                ${cert.highlight ? 'border-primary/40 bg-gradient-to-br from-primary/5 to-transparent' : ''}
              `}
            >
              {/* Highlight badge */}
              {cert.highlight && (
                <div className="absolute top-4 right-4 flex items-center gap-1 text-xs font-semibold text-primary">
                  <Award size={14} />
                  Highlight
                </div>
              )}

              {/* Title */}
              <h3 className="font-semibold text-base mb-1 leading-snug">
                {cert.title}
              </h3>

              {/* Authority */}
              <p className="text-sm text-primary mb-2">
                {cert.authority}
              </p>

              {/* Meta */}
              {cert.meta && (
                <p className="text-xs text-muted-foreground">
                  {cert.meta}
                </p>
              )}

              {/* External link icon */}
              <ExternalLink
                size={16}
                className="absolute bottom-4 right-4 text-primary opacity-0 group-hover:opacity-100 transition-opacity"
              />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};
