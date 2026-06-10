import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-100 mb-4">
            Contact
          </h2>
          <p className="text-slate-400 text-lg mx-auto max-w-xl">
            Let's build something great together.
          </p>
        </motion.div>

        {/* Contact Links Container */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-zinc-900 rounded-2xl p-8 space-y-4"
        >
          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/nicole-menezes-525481314/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 p-4 rounded-lg bg-[#1E1E1E] hover:bg-[#004D61]/20 transition-all duration-300 group"
          >
            <div className="p-2 bg-[#2A2A2A] rounded-lg group-hover:bg-[#004D61] transition-colors duration-300">
              <Linkedin className="h-6 w-6 text-white" />
            </div>
            <span className="text-[#F0F0F0]/80 text-lg font-medium group-hover:text-[#F0F0F0] transition-colors">
              LinkedIn
            </span>
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/nicolemenezes"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 p-4 rounded-lg bg-[#1E1E1E] hover:bg-[#004D61]/20 transition-all duration-300 group"
          >
            <div className="p-2 bg-[#2A2A2A] rounded-lg group-hover:bg-[#004D61] transition-colors duration-300">
              <Github className="h-6 w-6 text-white" />
            </div>
            <span className="text-[#F0F0F0]/80 text-lg font-medium group-hover:text-[#F0F0F0] transition-colors">
              GitHub
            </span>
          </a>

          {/* Email */}
          <div className="pt-4 border-t border-zinc-800">
            <p className="text-gray-400 text-sm mb-2">Or email:</p>
            <a
              href="mailto:nicmenezes35@gmail.com"
              className="flex items-center gap-3 text-blue-400 hover:text-blue-300 transition-colors text-lg font-medium"
            >
              <div className="p-1 bg-zinc-700 rounded-md">
                <Mail className="h-5 w-5 text-white" />
              </div>
              nicmenezes35@gmail.com
            </a>
          </div>
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center pt-12"
        >
          <p className="text-gray-400 mb-2">Designed & Built by Nicole Menezes</p>
          <p className="text-gray-500 text-sm">© 2025 All rights reserved</p>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;