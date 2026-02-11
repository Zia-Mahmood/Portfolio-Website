import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Mail, Download } from 'lucide-react';
import { TypeWriter } from './TypeWriter';
import heroBg from '@/assets/hero-bg.png';
import { useState } from 'react';


const resumeLinks = [
  {
    label: 'Software Engineer (SDE)',
    url: 'https://drive.google.com/uc?id=1v3JxIVnD_Di-_tpQOG8toALpeVHiYlvd&export=download',
  },
  {
    label: 'Machine Learning',
    url: 'https://drive.google.com/uc?id=1zbxTdPxOepy32K7jX0eCDT57oL0Ygcx9&export=download',
  },
  {
    label: 'Computer Vision',
    url: 'https://drive.google.com/uc?id=1n8xCprgq_0tl27iilyMCOutIXqmYTOlm&export=download',
  },
  {
    label: 'Blockchain',
    url: 'https://drive.google.com/uc?id=1fueOKWgqQXv2xm-xrmdcqGnQ5-pI1Jh7&export=download',
  },
];

export const Hero = () => {
  const [open, setOpen] = useState(false);

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      {/* Background Effects */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30" />
      <div className="absolute inset-0 bg-radial-gradient" />

      {/* Floating Orbs */}
      <motion.div
        animate={{ y: [0, -30, 0], x: [0, 15, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full bg-primary/10 blur-3xl"
      />
      <motion.div
        animate={{ y: [0, 20, 0], x: [0, -20, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-1/4 left-1/4 w-96 h-96 rounded-full bg-accent/10 blur-3xl"
      />


      <div className="section-container relative z-10 flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
        {/* Left Column */}
        <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left">
          {/* Name */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <p className="text-primary font-medium mb-4 text-lg">
              Hi, I’m
            </p>
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Zia <span className="gradient-text">Mahmood Hussain</span>
            </h1>
          </motion.div>

          {/* Roles */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-6 max-w-2xl"
          >
            <TypeWriter
              words={[
                'Software Engineer',
                'Systems & Backend Developer',
                'Computer Vision Engineer',
                'Distributed Systems Builder',
                'Problem Solver'
              ]}
              className="text-primary font-semibold"
            />
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-muted-foreground mb-8 max-w-xl leading-relaxed"
          >
            I build end-to-end software systems with a focus on real-time computer
            vision, distributed systems, and backend engineering. My interests lie
            in solving hard engineering problems where performance, correctness,
            and system design matter.
          </motion.p>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex gap-4 mb-10"
          >
            <a
              href="https://github.com/Zia-Mahmood"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
            >
              <Github size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/zia-mahmood-hussain/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
            >
              <Linkedin size={20} />
            </a>
            <a href="mailto:ziamh2003@gmail.com" className="social-icon">
              <Mail size={20} />
            </a>
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="flex flex-wrap gap-4 justify-center lg:justify-start"
          >
            <a href="#projects" className="btn-primary">
              View Projects
              <ArrowDown size={18} className="-rotate-90" />
            </a>
            <div className="relative">
              <button
                onClick={() => setOpen(!open)}
                className="btn-secondary flex items-center gap-2"
              >
                Resume
                <Download size={18} />
              </button>

              {open && (
                <div className="absolute right-0 mt-2 w-56 rounded-xl border border-primary/20 bg-card shadow-xl backdrop-blur-md z-50">
                  {resumeLinks.map((resume) => (
                    <a
                      key={resume.label}
                      href={resume.url}
                      className="block px-4 py-2 text-sm hover:bg-primary/10 transition-colors"
                    >
                      {resume.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        </div>

        {/* Right Column: Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="flex-1 flex justify-center lg:justify-end relative"
        >
          <div className="relative w-64 h-64 sm:w-80 sm:h-80">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-accent/20 rounded-[2rem] rotate-6 scale-105 blur-sm" />

            <motion.div
              whileHover={{ scale: 1.05, rotate: 2 }}
              transition={{ duration: 0.3 }}
              className="relative w-full h-full rounded-[2rem] overflow-hidden border-2 border-primary/30 shadow-2xl bg-card/50 backdrop-blur-sm"
            >
              <img
                src="\Profile-pic.jpeg"
                alt="Zia Mahmood Hussain"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-60" />
            </motion.div>

            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -bottom-6 -right-6 bg-card border border-primary/30 p-4 rounded-xl shadow-xl backdrop-blur-md"
            >
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
                <span className="text-sm font-medium text-foreground">
                  Open to Opportunities
                </span>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="text-muted-foreground"
          >
            <ArrowDown size={24} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
