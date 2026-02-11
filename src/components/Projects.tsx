import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { ExternalLink, Github, ChevronRight } from 'lucide-react';

const categories = [
  '🎯 All Projects',
  '🤖 Computer Vision',
  '🧠 Machine Learning',
  '⚙️ Systems & Compilers',
  '🌐 Distributed Systems',
  '🔗 Blockchain',
  '🛠 Full Stack',
];

const projects = [
  {
    title: 'Autonomous Paper Ball Catcher',
    featured: true,
    description:
      'Autonomous mobile robot that catches a thrown paper ball using multiple stationary RGB cameras. Implements multi-camera calibration, AprilTag-based localization, 3D triangulation, and real-time trajectory prediction in a shared world frame.',
    tags: ['Computer Vision', 'Multi-Camera', 'OpenCV', 'AprilTag', 'Robotics'],
    categories: ['🤖 Computer Vision'],
    github: 'https://github.com/Zia-Mahmood/Autonomous-Paper-Ball-Catcher',
    live: null,
    image: '/projects/project-paper-ball.jpg',
  },
  {
    title: 'Intelligent Badminton Insights',
    description:
      'End-to-end computer vision pipeline for badminton match analysis. Automatically extracts shuttle trajectories, player positions, court geometry, and shot types using detection, tracking, homography, and deep learning models.',
    tags: ['Computer Vision', 'Deep Learning', 'Homography', 'PyTorch'],
    categories: ['🤖 Computer Vision', '🧠 Machine Learning'],
    github: 'https://github.com/Zia-Mahmood/Intelligent-Badminton-Insights',
    live: null,
    image: '/projects/project-badminton.jpg',
  },
  {
    title: 'Semantic Segmentation with FCN & U-Net',
    description:
      'Comparative implementation of FCN and U-Net architectures for multi-class semantic segmentation using PyTorch. Evaluates architectural trade-offs, convergence behavior, and segmentation quality.',
    tags: ['Deep Learning', 'Segmentation', 'PyTorch'],
    categories: ['🤖 Computer Vision', '🧠 Machine Learning'],
    github: 'https://github.com/Zia-Mahmood/Semantic-Segmentation-with-FCN-and-U-Net',
    live: null,
    image: '/projects/project-segmentation.jpg',
  },
  {
    title: 'Peer-to-Peer File Sharing System',
    featured: true,
    description:
      'C++ based BitTorrent-inspired P2P file sharing system supporting multi-threaded piecewise downloads, multi-tracker synchronization, SHA1 integrity checks, and custom peer load-balancing.',
    tags: ['C++', 'Sockets', 'Multithreading', 'Distributed Systems'],
    categories: ['🌐 Distributed Systems'],
    github: 'https://github.com/Zia-Mahmood/p2p-file-sharing-system',
    live: null,
    image: '/projects/project-p2p.png',
  },
  {
    title: 'LLVM Racket Compiler',
    description:
      'Lightweight compiler for a subset of the Racket language, built using C++ and LLVM. Implements lexical analysis, parsing, AST construction, semantic checks, and LLVM IR code generation.',
    tags: ['Compilers', 'LLVM', 'C++'],
    categories: ['⚙️ Systems & Compilers'],
    github: 'https://github.com/Zia-Mahmood/LLVM-Racket-Compiler',
    live: null,
    image: '/projects/project-compiler.png',
  },
  {
    title: 'Requirement Elicitation Tool',
    featured: true,
    description:
      'Chat-based platform for enterprise report requirement elicitation. Uses dynamic meta-models to guide structured conversations and converts unstructured dialogue into validated, machine-readable report specifications.',
    tags: ['Full Stack', 'NLP', 'React', 'Node.js'],
    categories: ['🛠 Full Stack'],
    github: 'https://github.com/Zia-Mahmood/Requirement-Elicitation-Tool',
    live: null,
    image: '/projects/project-requirements.png',
  },
  {
    title: 'GeoBlaze – Smart Vehicle Indicator System',
    description:
      'IoT-based smart vehicle indicator automation system using ESP32 and Google Maps API. Automatically triggers turn indicators based on real-time GPS distance calculations.',
    tags: ['IoT', 'ESP32', 'Android', 'GPS'],
    categories: ['🛠 Full Stack'],
    github: 'https://github.com/Zia-Mahmood/GeoBlaze-Android',
    live: null,
    image: '/projects/project-geoblaze.png',
  },
  {
    title: 'TradeFlow – Blockchain Logistics DApp',
    description:
      'Blockchain-based logistics tracking DApp for recording shipment handoffs and escrow-style guarantees. Focuses on transparency, tamper resistance, and smart contract–driven state transitions.',
    tags: ['Blockchain', 'Smart Contracts', 'Web3'],
    categories: ['🔗 Blockchain', '🛠 Full Stack'],
    github: 'https://github.com/blockchain-logistics/dashboard',
    live: null,
    image: '/projects/project-blockchain.png',
  },
  {
    title: 'Financial NLP Fine-Tuning',
    description:
      'Domain-specific NLP experimentation for financial text. Fine-tunes transformer-based models to study ambiguity resolution, context sensitivity, and error modes in financial language.',
    tags: ['NLP', 'Transformers', 'PyTorch'],
    categories: ['🧠 Machine Learning'],
    github: 'https://github.com/ProtonPratt/AmbiguityAssault',
    live: null,
    image: '/projects/project-nlp.png',
  },
];


export const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [showAll, setShowAll] = useState(false);
  const [activeCategory, setActiveCategory] = useState('🎯 All Projects');

  const sortedProjects = [...projects].sort((a, b) => {
    if (a.featured && !b.featured) return -1;
    if (!a.featured && b.featured) return 1;
    return 0;
  });


  const filteredProjects = sortedProjects.filter(
    project =>
      activeCategory === '🎯 All Projects' ||
      project.categories.includes(activeCategory)
  );

  const displayedProjects = showAll ? filteredProjects : filteredProjects.slice(0, 6);

  return (
    <section id="projects" className="py-24 relative" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">
            Engineering <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A selection of projects spanning computer vision, distributed systems, compilers, and applied machine learning
          </p>
        </motion.div>

        {/* Category Filter Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => {
                setActiveCategory(category);
                setShowAll(false); // Reset show all when changing category
              }}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${activeCategory === category
                ? 'bg-primary text-primary-foreground shadow-lg shadow-primary/25 scale-105'
                : 'bg-secondary/50 text-muted-foreground hover:bg-secondary hover:text-foreground'
                }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex flex-col bg-card rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-border group min-h-[500px]"
              style={{ boxShadow: '0 8px 32px 0 hsl(var(--card) / 0.16)' }}
            >
              <div className="relative w-full aspect-[4/2.2] bg-secondary overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                {project.featured && (
                  <div className="absolute top-3 left-3 px-3 py-1 text-xs font-semibold rounded-full 
                  bg-primary text-primary-foreground shadow-md">
                    Featured
                  </div>
                )}
              </div>
              <div className="flex flex-col flex-1 px-6 pt-6 pb-7">
                <h3 className="font-display font-bold text-xl lg:text-2xl mb-2 group-hover:text-primary transition-colors line-clamp-2">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4 leading-normal line-clamp-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4 mt-auto">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
                  >
                    <Github size={18} />
                    View Code
                  </a>
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:text-accent/80 transition-colors"
                    >
                      <ExternalLink size={18} />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Show More Button */}
        {filteredProjects.length > 6 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="text-center mt-16"
          >
            <button
              onClick={() => setShowAll(!showAll)}
              className="btn-secondary"
            >
              {showAll ? 'Show Less' : 'View All Projects'}
              <ChevronRight size={18} className={`transition-transform ${showAll ? 'rotate-90' : ''}`} />
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
};
