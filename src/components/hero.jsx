import { useState } from 'react';
import { Github, Linkedin, Mail, FileText } from 'lucide-react';
import { Button } from './ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog';
import { motion } from 'framer-motion';
import profileImg from '../assets/profile.png'; // <-- add this import

const Hero = () => {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  // Replace with your actual resume PDF URL
  const resumeURL = 'https://customer-assets.emergentagent.com/job_nicole-webdev-hub/artifacts/4750c4ia_Nicole%20Menezes_Resume%20%282%29.pdf';

  const socialLinks = [
    {
      name: 'GitHub',
      icon: Github,
      url: 'https://github.com/nicolemenezes', // Your GitHub URL
      color: 'hover:text-purple-400',
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: 'https://www.linkedin.com/in/nicole-menezes-525481314/', // Replace with your LinkedIn profile URL
      color: 'hover:text-blue-400',
    },
    {
      name: 'Email',
      icon: Mail,
      url: 'mailto:nicmenezes35@gmail.com', // Replace with your email
      color: 'hover:text-cyan-400',
    },
  ];

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16"
    >
      <div className="max-w-6xl w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div>
              <motion.h1
                className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <span className="text-slate-200">Hi, I'm</span>
                <br />
                <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  Nicole Menezes
                </span>
              </motion.h1>

              <motion.h2
                className="text-2xl md:text-3xl text-slate-300 font-medium mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                I'm an Engineering Student
              </motion.h2>

              <motion.p
                className="text-lg text-slate-400 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
               I like crafting elegant web solutions and
                transforming ideas into interactive digital experiences.
                <br />

                Feel free to explore my portfolio and I'd love to connect!
              </motion.p>
            </div>

            {/* Resume Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              <Dialog open={isResumeOpen} onOpenChange={setIsResumeOpen}>
                <DialogTrigger asChild>
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white border-0 shadow-lg shadow-blue-500/30 transition-all duration-300 hover:shadow-blue-500/50 hover:scale-105"
                  >
                    <FileText className="mr-2 h-5 w-5" />
                    View Resume
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-4xl h-[80vh] bg-slate-900 border-blue-500/20">
                  <DialogHeader>
                    <DialogTitle className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                      Nicole's Resume
                    </DialogTitle>
                  </DialogHeader>
                  <div className="flex flex-col h-full">
                    <iframe
                      src={resumeURL}
                      className="w-full flex-1 rounded-lg border border-blue-500/20"
                      title="Resume"
                    />
                    <div className="mt-4">
                      <a
                        href={resumeURL}
                        download="Nicole_Menezes_Resume.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button className="w-full bg-blue-600 hover:bg-blue-500">
                          Download Resume
                        </Button>
                      </a>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            </motion.div>

            {/* Social Links */}
            <motion.div
              className="flex items-center space-x-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
            >
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-3 bg-slate-800/50 rounded-full border border-slate-700 hover:border-blue-500/50 transition-all duration-300 hover:scale-110 ${social.color}`}
                  aria-label={social.name}
                >
                  <social.icon className="h-6 w-6" />
                </a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Content - Photo Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex justify-center"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full blur-3xl opacity-30 animate-pulse"></div>
              <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full bg-gradient-to-br from-slate-800 to-slate-900 border-4 border-blue-500/30 shadow-2xl shadow-blue-500/20 flex items-center justify-center overflow-hidden">
                {/* actual photo */}
                <img
                  src={profileImg}
                  alt="Nicole Menezes"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
