import { Github } from 'lucide-react';
import { Button } from './ui/button';
import { motion } from 'framer-motion';
import { CometCard } from './ui/comet-card';

import sentimentImg from '../assets/sentiment.png';
import gigcampusImg from '../assets/gigcampus.png';
import dashboardImg from '../assets/dashboard.png';

const projects = [
  {
    id: 1,
    name: 'Sentiment Analyzer',
    description:
      'An intelligent sentiment analysis tool that processes text and determines emotional tone using natural language processing.',
    image: sentimentImg,
    githubUrl: 'https://github.com/nicolemenezes/sentiment-analyzer',
    tags: ['Python', 'NLP', 'Machine Learning', 'FastAPI'],
  },
  {
    id: 2,
    name: 'Admin Dashboard',
    description:
      'A comprehensive admin dashboard with data visualization, user management, and analytics for business intelligence.',
    image: dashboardImg,
    githubUrl: 'https://github.com/nicolemenezes/admin-dashboard',
    tags: ['React', 'Node.js', 'MongoDB', 'Express.js'],
  },
  {
    id: 3,
    name: 'GigCampus',
    description:
      'A platform connecting students with freelance opportunities and gig work tailored for campus communities.',
    image: gigcampusImg,
    githubUrl: 'https://github.com/cyril-giri/BitNBuild-25_Recursion',
    tags: ['React', 'Supabase'],
  },
];

const Projects = () => {
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
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Featured <span className="text-primary">Projects</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Building solutions that make a difference
          </p>
        </motion.div>

        <div className="space-y-24 md:space-y-32">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="grid md:grid-cols-2 gap-10 lg:gap-16 items-center"
            >
              {/* Comet Card with project image */}
              <div
                className={`flex justify-center ${index % 2 === 1 ? 'md:order-2' : 'md:order-1'}`}
              >
                <CometCard className="w-full max-w-sm sm:max-w-md">
                  <div
                    className="flex w-full cursor-pointer flex-col items-stretch rounded-[16px] border border-border bg-card p-2 md:p-4"
                    style={{ transformStyle: 'preserve-3d' }}
                  >
                    <div className="mx-1 sm:mx-2 flex-1">
                      <div className="relative mt-2 aspect-video w-full">
                        <img
                          loading="lazy"
                          className="absolute inset-0 h-full w-full rounded-[12px] bg-background object-cover object-left-top"
                          alt={project.name}
                          src={project.image}
                          style={{
                            boxShadow: 'rgba(0, 0, 0, 0.15) 0px 5px 12px 0px',
                          }}
                        />
                      </div>
                    </div>
                    <div className="mt-3 flex flex-shrink-0 items-center justify-between px-3 pb-2 font-mono text-foreground">
                      <div className="text-xs sm:text-sm font-semibold truncate">
                        {project.name}
                      </div>
                      <div className="text-xs text-muted-foreground opacity-70 ml-2">
                        #{String(project.id).padStart(2, '0')}
                      </div>
                    </div>
                  </div>
                </CometCard>
              </div>

              {/* Project info */}
              <div
                className={`flex flex-col justify-center space-y-6 ${index % 2 === 1 ? 'md:order-1' : 'md:order-2'}`}
              >
                <div>
                  <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                    {project.name}
                  </h3>
                  <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-4 py-2 bg-card rounded-full text-sm font-medium text-foreground border border-border"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap gap-4">
                  {project.githubUrl ? (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button
                        size="lg"
                        variant="outline"
                        className="border-border text-foreground hover:border-primary hover:bg-primary/10 transition-all duration-300"
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
                      className="border-border text-muted-foreground cursor-not-allowed"
                    >
                      <Github className="mr-2 h-5 w-5" />
                      Code Coming Soon
                    </Button>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
