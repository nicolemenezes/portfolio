import { ExternalLink, Github } from 'lucide-react';
import { Button } from './ui/button';
import { motion } from 'framer-motion';
import { useState } from 'react';

// add imports for local images
import sentimentImg from '../assets/sentiment.png';
import gigcampusImg from '../assets/gigcampus.png';

const Projects = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const projects = [
    {
      id: 1,
      name: 'Sentiment Analyzer',
      description:
        'An intelligent sentiment analysis tool that processes text and determines emotional tone using natural language processing.',
      image: sentimentImg,
      githubUrl: 'https://github.com/nicolemenezes/sentiment-analyzer',
      liveUrl: '', // Add your deployed link here later
      tags: ['Python', 'NLP', 'Machine Learning', 'FastAPI'],
      gradient: 'from-blue-500/20 to-cyan-500/20',
    },
    {
      id: 2,
      name: 'Admin Dashboard',
      description:
        'A comprehensive admin dashboard with data visualization, user management, and analytics for business intelligence.',
      image: 'https://via.placeholder.com/600x400/1e293b/06b6d4?text=Admin+Dashboard', // Replace with actual screenshot
      githubUrl: 'https://github.com/nicolemenezes/admin-dashboard',
      liveUrl: '', // Add your deployed link here later
      tags: ['React', 'Node.js', 'MongoDB', 'Express.js'],
      gradient: 'from-cyan-500/20 to-blue-500/20',
    },
    {
      id: 3,
      name: 'GigCampus',
      description:
        'A platform connecting students with freelance opportunities and gig work tailored for campus communities.',
      image: gigcampusImg,
      githubUrl: 'https://github.com/cyril-giri/BitNBuild-25_Recursion', // Add your GitHub link here later
      liveUrl: 'https://bit-n-build-25-recursion.vercel.app/', // Deployed link
      tags: ['React', 'Next.js', 'MongoDB', 'Tailwind'], // ✅ FIXED: Added tags
      gradient: 'from-purple-500/20 to-blue-500/20',
    },
  ];

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-4">
            Featured Projects
          </h2>
          <p className="text-slate-400 text-lg">
            Building solutions that make a difference
          </p>
        </motion.div>

        <div className="space-y-32">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
              onMouseEnter={() => setHoveredCard(project.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <motion.div
                className={`relative bg-gradient-to-br ${project.gradient} backdrop-blur-sm rounded-3xl border border-slate-700/50 overflow-hidden shadow-2xl`}
                style={{
                  transformStyle: 'preserve-3d',
                  perspective: '1000px',
                }}
                animate={{
                  rotateX: hoveredCard === project.id ? 2 : 0,
                  rotateY: hoveredCard === project.id ? -2 : 0,
                  scale: hoveredCard === project.id ? 1.02 : 1,
                }}
                transition={{ duration: 0.3 }}
              >
                <div className="grid md:grid-cols-2 gap-8 p-8 lg:p-12">
                  {/* Project Image */}
                  <div className="order-2 md:order-1">
                    <div className="relative group">
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
                      <img
                        src={project.image}
                        alt={project.name}
                        className="relative rounded-2xl border border-slate-600/50 w-full h-auto shadow-2xl transform group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  </div>

                  {/* Project Info */}
                  <div className="order-1 md:order-2 flex flex-col justify-center space-y-6">
                    <div>
                      <motion.h3
                        className="text-3xl md:text-4xl font-bold text-slate-100 mb-4"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                      >
                        {project.name}
                      </motion.h3>
                      <motion.p
                        className="text-slate-300 text-lg leading-relaxed"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                      >
                        {project.description}
                      </motion.p>
                    </div>

                    {/* Tags */}
                    <motion.div
                      className="flex flex-wrap gap-2"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5 }}
                    >
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-4 py-2 bg-slate-800/80 backdrop-blur-sm rounded-full text-sm font-medium text-blue-400 border border-blue-500/30"
                        >
                          {tag}
                        </span>
                      ))}
                    </motion.div>

                    {/* Action Buttons */}
                    <motion.div
                      className="flex flex-wrap gap-4"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.6 }}
                    >
                      {project.liveUrl ? (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Button
                            size="lg"
                            className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 border-0 shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 transition-all duration-300"
                          >
                            <ExternalLink className="mr-2 h-5 w-5" />
                            Live Demo
                          </Button>
                        </a>
                      ) : (
                        <Button
                          size="lg"
                          disabled
                          className="bg-slate-700 text-slate-400 cursor-not-allowed"
                        >
                          <ExternalLink className="mr-2 h-5 w-5" />
                          Coming Soon
                        </Button>
                      )}

                      {project.githubUrl ? (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Button
                            size="lg"
                            variant="outline"
                            className="border-slate-600 hover:border-blue-500 hover:bg-blue-500/10 hover:text-blue-400 transition-all duration-300"
                          >
                            <Github className="mr-2 h-5 w-5" />
                            View Code
                          </Button>
                        </a>
                      ) : (
                        <Button
                          size="lg"
                          variant="outline"
                          disabled
                          className="border-slate-700 text-slate-500 cursor-not-allowed"
                        >
                          <Github className="mr-2 h-5 w-5" />
                          Code Coming Soon
                        </Button>
                      )}
                    </motion.div>

                    {/* Instructions for updating links */}
                    {(!project.liveUrl || !project.githubUrl) && (
                      <p className="text-xs text-slate-500 italic">
                        
                      </p>
                    )}
                  </div>
                </div>

                {/* 3D Effect Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-blue-500/5 pointer-events-none"></div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;