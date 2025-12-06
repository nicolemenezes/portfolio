import { motion } from 'framer-motion';
import { Calendar } from 'lucide-react';
import expImg from '../assets/expirences.png';
import { CardContainer, CardBody, CardItem } from './ui/3d-card';

const Experience = () => {
  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#F0F0F0] mb-4">
            Experience
          </h2>
          <p className="text-[#F0F0F0]/70 text-lg">Leadership & contributions</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <CardContainer className="w-full">
            <CardBody className="bg-gradient-to-br from-red-500/10 via-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-3xl border border-slate-700/50 p-8 md:p-12 shadow-2xl hover:shadow-red-500/20 transition-all duration-300">
              <div className="grid md:grid-cols-[200px_1fr] gap-8 items-center">
                {/* TEDx Logo */}
                <CardItem translateZ={75}>
                  <motion.div
                    className="flex justify-center md:justify-start"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <img
                      src={expImg}
                      alt="Experience"
                      className="w-40 h-40 object-cover rounded-2xl border-2 border-red-500/30 shadow-lg shadow-red-500/20"
                    />
                  </motion.div>
                </CardItem>

                {/* Experience Details */}
                <div className="space-y-4">
                  <CardItem translateZ={50}>
                    <div>
                      <h3 className="text-3xl md:text-4xl font-bold text-slate-100 mb-2">
                        PR Manager (TEDxCRCE)
                      </h3>
                      <div className="flex items-center space-x-2 text-slate-400 mb-4">
                        <Calendar className="h-5 w-5 text-red-400" />
                        <span className="text-lg font-medium">2024 - 2025</span>
                      </div>
                    </div>
                  </CardItem>

                  <CardItem translateZ={60}>
                    <p className="text-slate-300 text-lg leading-relaxed">
                      Led public relations initiatives for TEDxCRCE, managing event
                      promotions, stakeholder communications, and building strategic
                      partnerships to amplify the reach of ideas worth spreading.
                    </p>
                  </CardItem>

                  <CardItem translateZ={40}>
                    <div className="flex flex-wrap gap-2 pt-2">
                      <span className="px-4 py-2 bg-red-500/10 backdrop-blur-sm rounded-full text-sm font-medium text-red-400 border border-red-500/30">
                        Public Relations
                      </span>
                      <span className="px-4 py-2 bg-red-500/10 backdrop-blur-sm rounded-full text-sm font-medium text-red-400 border border-red-500/30">
                        Event Management
                      </span>
                      <span className="px-4 py-2 bg-red-500/10 backdrop-blur-sm rounded-full text-sm font-medium text-red-400 border border-red-500/30">
                        Leadership
                      </span>
                    </div>
                  </CardItem>
                </div>
              </div>
            </CardBody>
          </CardContainer>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;