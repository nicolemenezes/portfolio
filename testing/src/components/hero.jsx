import { Download, ArrowDown } from 'lucide-react';
import { IconBrandGithub, IconBrandLinkedin, IconMail } from '@tabler/icons-react';
import { motion } from 'framer-motion';
import { Button } from './ui/button';
import { FloatingDock } from './ui/floating-dock';
import resumePdf from '../assets/Nicole Menezes_Resume (2).pdf';

const socialLinks = [
  {
    title: 'GitHub',
    icon: <IconBrandGithub className="h-full w-full text-[#ECDFCC]" />,
    href: 'https://github.com/nicolemenezes',
  },
  {
    title: 'LinkedIn',
    icon: <IconBrandLinkedin className="h-full w-full text-[#ECDFCC]" />,
    href: 'https://linkedin.com/in/nicole-menezes-525481314/', // update this
  },
  {
    title: 'Email',
    icon: <IconMail className="h-full w-full text-[#ECDFCC]" />,
    href: 'mailto:nicmenezes35@gmail.com',
  },
];

const Hero = () => {
  const handleResumeView = () => {
    window.open(resumePdf, '_blank');
  };

  const scrollToNext = () => {
    document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden px-4">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="container">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
          >
            Hi, I'm <span className="gradient-text">Nicole Menezes</span>
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-xl sm:text-2xl md:text-3xl font-semibold mb-6 text-foreground/80"
          >
            I'm an Engineering Student
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-base md:text-lg text-muted-foreground mb-8 leading-relaxed max-w-xl mx-auto"
          >
            I like crafting elegant web solutions and transforming ideas into interactive digital experiences.
            Feel free to explore my portfolio and I'd love to connect!
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap gap-4 justify-center mb-10"
          >
            <Button size="lg" onClick={handleResumeView} className="gap-2">
              <Download className="h-5 w-5" />
              View Resume
            </Button>
            <Button size="lg" variant="outline" onClick={scrollToNext} className="gap-2">
              View My Work
              <ArrowDown className="h-5 w-5" />
            </Button>
          </motion.div>

          {/* Floating Dock replaces the 3 icon buttons */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="flex justify-center"
          >
            <FloatingDock items={socialLinks} />
          </motion.div>
        </div>
      </div>

      <motion.button
        onClick={scrollToNext}
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.6, repeat: Infinity, repeatType: 'reverse' }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 p-2 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-all"
        aria-label="Scroll to next section"
      >
        <ArrowDown className="h-6 w-6" />
      </motion.button>
    </section>
  );
};

export default Hero;