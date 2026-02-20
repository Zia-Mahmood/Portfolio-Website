import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Skills } from '@/components/Skills';
import { Projects } from '@/components/Projects';
import { Experience } from '@/components/Experience';
import { Education } from '@/components/Education';
import { Certifications } from '@/components/Certifications';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import { MouseFollower } from '@/components/MouseFollower';
import { ParticleBackground } from '@/components/ParticleBackground';

const Index = () => {
  const [showAllCertifications, setShowAllCertifications] = useState(false);

  useEffect(() => {
    document.title = 'Zia Mahmood Hussain | Software Engineer & ML Engineer';

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content',
        'Portfolio of Zia Mahmood Hussain, a Software Engineer and M.Tech CSE student at IIIT Hyderabad. Focused on building real-time systems, backend services, and applied machine learning. I enjoy turning complex engineering problems into reliable, end-to-end solutions.'
      );
    }
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300 overflow-x-hidden relative">
      <MouseFollower />
      
      {/* GLOBAL BACKGROUND: Fixed position so it doesn't scroll away */}
      <div className="fixed inset-0 z-0 pointer-events-none">
          <ParticleBackground />
      </div>

      {/* Content needs relative z-index to sit on top of background */}
      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Education />

        {showAllCertifications ? (
          <Certifications />
        ) : (
          <>
            <Certifications limit={6} />
            {/* <div className="text-center pb-12">
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                onClick={() => setShowAllCertifications(true)}
                className="btn-primary"
              >
                View All Certifications
                <ChevronRight size={18} />
              </motion.button>
            </div> */}
          </>
        )}

        <Contact />
      </main>
      <Footer />
    </div>
    </div>
  );
};

export default Index;
