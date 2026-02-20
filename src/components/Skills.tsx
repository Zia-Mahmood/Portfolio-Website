import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useLayoutEffect, useRef, useState } from 'react';

type SkillCategory =
  | 'Programming Languages'
  | 'Frontend & Web'
  | 'AI/ML Libraries'
  | 'AI/ML Concepts'
  | 'Databases & Cloud'
  | 'Tools'
  | 'Blockchain';

interface Skill {
  name: string;
  category: SkillCategory;
  icon?: string; // path to icon (you will add)
}

const skillCategories: SkillCategory[] = [
  'Programming Languages',
  'Frontend & Web',
  'AI/ML Libraries',
  'AI/ML Concepts',
  'Databases & Cloud',
  'Tools',
  'Blockchain',
];

const skills: Skill[] = [
  // Programming Languages
  { name: 'Python', category: 'Programming Languages', icon:'/icons/python.svg' },
  { name: 'Java', category: 'Programming Languages', icon:'/icons/java.svg' },
  { name: 'C', category: 'Programming Languages', icon:'/icons/c.svg' },
  { name: 'C++', category: 'Programming Languages', icon:'/icons/cpp.svg' },
  { name: 'C#', category: 'Programming Languages', icon:'/icons/csharp.svg' },
  { name: 'JavaScript', category: 'Programming Languages', icon:'/icons/js.svg' },
  { name: 'TypeScript', category: 'Programming Languages', icon:'/icons/ts.svg' },
  { name: 'R', category: 'Programming Languages', icon:'/icons/r.svg' },

  // Frontend & Web
  { name: 'React', category: 'Frontend & Web', icon:'/icons/react.svg' },
  { name: 'Node.js', category: 'Frontend & Web', icon:'/icons/node.svg' },
  { name: 'HTML', category: 'Frontend & Web', icon:'/icons/html.svg' },
  { name: 'CSS', category: 'Frontend & Web', icon:'/icons/css.svg' },
  { name: 'Tailwind CSS', category: 'Frontend & Web', icon:'/icons/tcss.svg' },
  { name: 'Next.js', category: 'Frontend & Web', icon:'/icons/next.svg' },

  // AI/ML Libraries
  { name: 'PyTorch', category: 'AI/ML Libraries', icon:'/icons/pytorch.svg' },
  { name: 'NumPy', category: 'AI/ML Libraries', icon:'/icons/numpy.svg' },
  { name: 'Pandas', category: 'AI/ML Libraries', icon:'/icons/pandas.svg' },
  { name: 'OpenCV', category: 'AI/ML Libraries', icon:'/icons/opencv.svg' },
  { name: 'Scikit-learn', category: 'AI/ML Libraries', icon:'/icons/scikit-learn.svg' },
  { name: 'Gemini API', category: 'AI/ML Libraries', icon:'/icons/gemini.svg' },
  { name: 'OpenAI APIs', category: 'AI/ML Libraries', icon:'/icons/openai.svg' },

  // AI/ML Concepts
  { name: 'Supervised Learning', category: 'AI/ML Concepts', icon:'/icons/supervised.svg' },
  { name: 'Unsupervised Learning', category: 'AI/ML Concepts', icon:'/icons/unsupervised.svg' },
  { name: 'Computer Vision', category: 'AI/ML Concepts', icon:'/icons/cv.svg' },
  { name: 'Natural Language Processing', category: 'AI/ML Concepts', icon:'/icons/nlp.svg' },

  // Databases & Cloud
  { name: 'MongoDB', category: 'Databases & Cloud', icon:'/icons/mongodb.svg' },
  { name: 'MySQL', category: 'Databases & Cloud', icon:'/icons/mysql.svg' },
  { name: 'SSRS', category: 'Databases & Cloud', icon:'/icons/ssrs.svg' },
  { name: 'Firebase', category: 'Databases & Cloud', icon:'/icons/firebase.svg' },
  { name: 'AWS', category: 'Databases & Cloud', icon:'/icons/aws.svg' },

  // Tools
  { name: 'Git', category: 'Tools', icon:'/icons/git.svg' },
  { name: 'GitHub', category: 'Tools', icon:'/icons/github.svg' },
  { name: 'Linux', category: 'Tools', icon:'/icons/linux.svg' },
  { name: 'Jupyter', category: 'Tools', icon:'/icons/jupyter.svg' },
  { name: 'VS Code', category: 'Tools', icon:'/icons/vscode.svg' },
  { name: 'Docker', category: 'Tools', icon:'/icons/docker.svg' },
  { name: 'FastAPI', category: 'Tools', icon:'/icons/fastapi.svg' },
  { name: 'Flask', category: 'Tools', icon:'/icons/flask.svg' },

  // Blockchain
  { name: 'Solidity', category: 'Blockchain', icon:'/icons/solidity.svg' },
  { name: 'Ethereum', category: 'Blockchain', icon:'/icons/eth.svg' },
  { name: 'Smart Contracts', category: 'Blockchain', icon:'/icons/smart-contract.svg' },
  { name: 'Web3.js', category: 'Blockchain', icon:'/icons/web3.svg' },
];

const SkillItem = ({ skill, activeCategory }: { skill: any, activeCategory: any }) => {
  const isActive = activeCategory === null || skill.category === activeCategory;
  return (
    <span
      className={`px-4 py-2 rounded-full text-sm border whitespace-nowrap transition-colors
        ${isActive
          ? "bg-primary/10 border-primary text-primary"
          : "bg-secondary/40 border-border/40 text-muted-foreground opacity-40"
        }
      `}
    >
      {skill.name}
    </span>
  );
};

export const Skills = () => {
  const [activeCategory, setActiveCategory] = useState<SkillCategory | null>(null);
  const marqueeRef = useRef<HTMLDivElement | null>(null);
  const [rowWidth, setRowWidth] = useState(0);

  useLayoutEffect(() => {
    if (marqueeRef.current) {
      setRowWidth(marqueeRef.current.scrollWidth / 2);
    }
  }, []);

  const visibleSkills = activeCategory
    ? skills.filter(s => s.category === activeCategory)
    : [];

  return (
    <section id="skills" className="py-24 relative">
      <div className="section-container">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">
            Technologies & <span className="gradient-text">Tools</span>
          </h2>
          <p className="text-muted-foreground">
            Skills used across systems, machine learning, and full-stack projects
          </p>
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          <button
            onClick={() => setActiveCategory(null)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition
              ${activeCategory === null
                ? 'bg-primary text-primary-foreground'
                : 'bg-secondary/60 text-muted-foreground hover:bg-secondary'}
            `}
          >
            All Skills
          </button>

          {skillCategories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition
                ${activeCategory === cat
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-secondary/60 text-muted-foreground hover:bg-secondary'}
              `}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Category Cards OR Skill Grid */}
        {activeCategory === null ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {skillCategories.map(cat => (
              <div key={cat} className="glass-card p-6">
                <h3 className="font-semibold mb-3 text-primary">{cat}</h3>
                <div className="flex flex-wrap gap-2">
                  {skills
                    .filter(s => s.category === cat)
                    .slice(0, 6)
                    .map(s => (
                      <span key={s.name} className="skill-badge">
                        {s.name}
                      </span>
                    ))}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 mb-16">
            {visibleSkills.map(skill => (
              <div
                key={skill.name}
                className="glass-card p-4 flex flex-col items-center justify-center text-center hover:border-primary/40 transition"
              >
                {skill.icon ? (
                  <div className="w-10 h-10 mb-3 flex items-center justify-center">
                    <img
                      src={skill.icon}
                      alt={skill.name}
                      className="w-8 h-8 object-contain"
                      loading="lazy"
                    />
                  </div>
                ) : (
                  <div className="w-10 h-10 mb-3 rounded-full bg-primary/10 flex items-center justify-center text-xs text-primary font-semibold">
                    {/* Fallback: first letter */}
                    {skill.name[0]}
                  </div>
                )}

                <span className="text-sm font-medium">{skill.name}</span>
              </div>
            ))}
          </div>
        )}
        {/* Infinite Skill Scroller */}
        <div className="relative mt-8 space-y-4 overflow-hidden">

          {/* Fade masks */}
          <div className="pointer-events-none absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-background to-transparent z-10" />
          <div className="pointer-events-none absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-background to-transparent z-10" />

          {/* Row 1 (Left) */}
          <div className="flex">
            {/* Set 1: Starts at 0, moves left */}
            <motion.div
              initial={{ x: 0 }}
              animate={{ x: "-100%" }}
              transition={{ duration: 90, repeat: Infinity, ease: "linear" }}
              className="flex flex-shrink-0 gap-6 pr-6"
            >
              {skills.map((skill) => (
                <SkillItem key={skill.name} skill={skill} activeCategory={activeCategory} />
              ))}
            </motion.div>

            {/* Set 2: Starts to the right of Set 1, follows it left */}
            <motion.div
              initial={{ x: 0 }}
              animate={{ x: "-100%" }}
              transition={{ duration: 90, repeat: Infinity, ease: "linear" }}
              className="flex flex-shrink-0 gap-6 pr-6"
            >
              {skills.map((skill) => (
                <SkillItem key={`${skill.name}-copy`} skill={skill} activeCategory={activeCategory} />
              ))}
            </motion.div>
          </div>

          {/* Row 2 (Right) - Reverse Logic */}
          <div className="flex">
            {/* Set 1: Starts at -100%, moves right to 0 */}
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: "0%" }}
              transition={{ duration: 90, repeat: Infinity, ease: "linear" }}
              className="flex flex-shrink-0 gap-6 pr-6"
            >
              {skills.map((skill) => (
                <SkillItem key={skill.name} skill={skill} activeCategory={activeCategory} />
              ))}
            </motion.div>

            {/* Set 2 */}
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: "0%" }}
              transition={{ duration: 90, repeat: Infinity, ease: "linear" }}
              className="flex flex-shrink-0 gap-6 pr-6"
            >
              {skills.map((skill) => (
                <SkillItem key={`${skill.name}-copy`} skill={skill} activeCategory={activeCategory} />
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};