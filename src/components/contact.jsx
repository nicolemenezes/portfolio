import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Send } from 'lucide-react';
import { Button } from './ui/button';

const Contact = () => {
  const contactLinks = [
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: 'https://www.linkedin.com/in/nicole-menezes-525481314/', // Replace with your LinkedIn profile URL
      description: 'Connect with me professionally',
      color: 'from-blue-500 to-blue-600',
      hoverColor: 'hover:border-blue-500',
    },
    {
      name: 'GitHub',
      icon: Github,
      url: 'https://github.com/nicolemenezes', // Your GitHub URL
      description: 'Check out my code',
      color: 'from-purple-500 to-purple-600',
      hoverColor: 'hover:border-purple-500',
    },
    {
      name: 'Email',
      icon: Mail,
      url: 'mailto:nicmenezes35@gmail.com', // Replace with your email
      description: 'Drop me a message',
      color: 'from-cyan-500 to-cyan-600',
      hoverColor: 'hover:border-cyan-500',
    },
  ];

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-4">
            Contact
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            I'm always open to discussing new projects, creative ideas, or
            opportunities to be part of your visions.
          </p>
        </motion.div>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {contactLinks.map((contact, index) => (
            <motion.a
              key={contact.name}
              href={contact.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className={`group relative bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700 ${contact.hoverColor} transition-all duration-300 overflow-hidden`}
            >
              {/* Background Gradient */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${contact.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
              ></div>

              <div className="relative p-8 flex flex-col items-center text-center space-y-4">
                <div
                  className={`p-4 bg-gradient-to-br ${contact.color} rounded-xl shadow-lg`}
                >
                  <contact.icon className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-100 mb-1">
                    {contact.name}
                  </h3>
                  <p className="text-slate-400 text-sm">{contact.description}</p>
                </div>
                <Send className="h-5 w-5 text-slate-500 group-hover:text-blue-400 transition-colors duration-300" />
              </div>

              {/* Update instruction */}
              {contact.url.includes('YOUR_') && (
                <div className="absolute bottom-2 left-2 right-2">
                  <p className="text-xs text-slate-600 text-center">
                    
                  </p>
                </div>
              )}
            </motion.a>
          ))}
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center pt-12 border-t border-slate-800"
        >
          <p className="text-slate-400 mb-2">
            Designed & Built by Nicole Menezes
          </p>
          <p className="text-slate-500 text-sm">
            © 2025 All rights reserved
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
