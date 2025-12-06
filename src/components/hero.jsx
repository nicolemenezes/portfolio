import { Github, Linkedin, Mail, FileDown } from 'lucide-react';
import { motion } from 'framer-motion';
import profileImage from '../assets/profile.png';

const Hero = () => {
  const handleResumeView = () => {
    window.open('/path-to-your-resume.pdf', '_blank');
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 pt-20">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <h1 className="text-5xl md:text-7xl font-bold text-[#F0F0F0]">
            Hi, I'm <span className="bg-gradient-to-r from-[#004D61] to-[#3E5841] bg-clip-text text-transparent">Nicole Menezes</span>
          </h1>
          
          <h2 className="text-3xl md:text-4xl font-semibold text-[#F0F0F0]/90">
            I'm an Engineering Student
          </h2>
          
          <p className="text-lg text-[#F0F0F0]/70 leading-relaxed">
            I like crafting elegant web solutions and transforming ideas into interactive digital experiences. 
            <br />
            Feel free to explore my portfolio and I'd love to connect!
          </p>

          {/* Resume Button */}
          <button
            onClick={handleResumeView}
            className="group flex items-center gap-2 bg-[#004D61] hover:bg-[#006B85] text-[#F0F0F0] px-8 py-3 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
          >
            <FileDown className="h-5 w-6 group-hover:animate-bounce" />
            View Resume
          </button>

          {/* Social Links */}
          <div className="flex gap-4 pt-4">
            <a
              href="https://github.com/nicolemenezes"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-lg bg-[#2A2A2A] hover:bg-[#3E5841] transition-all duration-300 hover:scale-110"
            >
              <Github className="h-6 w-6 text-[#F0F0F0]" />
            </a>
            <a
              href="https://www.linkedin.com/in/nicole-menezes-525481314/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-lg bg-[#2A2A2A] hover:bg-[#004D61] transition-all duration-300 hover:scale-110"
            >
              <Linkedin className="h-6 w-6 text-[#F0F0F0]" />
            </a>
            <a
              href="mailto:nicmenezes35@gmail.com"
              className="p-3 rounded-lg bg-[#2A2A2A] hover:bg-[#922659] transition-all duration-300 hover:scale-110"
            >
              <Mail className="h-6 w-6 text-[#F0F0F0]" />
            </a>
          </div>
        </motion.div>

        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-[#004D61] to-[#3E5841] rounded-full blur-2xl opacity-20 animate-pulse"></div>
            <img
              src={profileImage}
              alt="Nicole Menezes"
              className="relative w-64 h-64 md:w-80 md:h-80 rounded-full object-cover border-4 border-[#004D61]/30 shadow-2xl"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;