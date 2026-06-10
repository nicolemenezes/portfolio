import { motion } from 'framer-motion';
import { Award, ExternalLink } from 'lucide-react';
import { Carousel, CarouselItem } from './ui/carousel';

// local certificate images
import cert24 from '../assets/24.png';
import awsImg from '../assets/aws.png';
import bnbFinals from '../assets/bnb finals.png';
import isroImg from '../assets/isro.png';
import reactImg from '../assets/react.png';
import sihImg from '../assets/sih.png';

const Certifications = () => {
  const certifications = [
    {
      title: 'BitNBuild Hackathon Participant-2024',
      image: cert24,
      link: '#',
    },
    {
      title: 'Advanced React By Meta',
      image: reactImg,
      link: '#',
    },
    {
      title: 'AWS Cloud Architecting',
      image: awsImg,
      link: '#',
    },
    {
      title: 'Python And Machine Learning(ISRO)',
      image: isroImg,
      link: '#',
    },
    {
      title: 'BitNBuild Finalist 2025',
      image: bnbFinals,
      link: '#',
    },
    {
      title: 'Smart India Hackathon(Participant)',
      image: sihImg,
      link: '#',
    },
  ];

  return (
    <section id="certifications" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <h2 className="text-4xl md:text-5xl font-bold text-[#F0F0F0]">
              Certifications
            </h2>
          </div>
          <p className="text-[#F0F0F0]/70 text-lg">
            Continuous learning and professional development
          </p>
        </motion.div>

        {/* Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Carousel className="w-full max-w-6xl mx-auto">
            {certifications.map((cert, index) => (
              <CarouselItem key={index}>
                <div className="p-4">
                  <div className="group relative bg-[#2A2A2A] backdrop-blur-sm rounded-2xl border border-[#3A3A3A] overflow-hidden hover:border-[#004D61] transition-all duration-300 hover:shadow-2xl hover:shadow-[#004D61]/20 hover:scale-105">
                    {/* Certificate Image */}
                    <div className="relative aspect-[4/3] overflow-hidden bg-slate-900">
                      <img
                        src={cert.image}
                        alt={cert.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      {/* Overlay on hover */}
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                        {cert.link && cert.link !== '#' && (
                          <a
                            href={cert.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-4 py-2 bg-yellow-500 hover:bg-yellow-600 text-slate-900 rounded-full font-semibold transition-colors"
                          >
                            <ExternalLink className="h-4 w-4" />
                          </a>
                        )}
                      </div>
                    </div>

                    {/* Certificate Info */}
                    <div className="p-6 space-y-3">
                      <h3 className="text-xl font-bold text-slate-100 line-clamp-2 group-hover:text-yellow-400 transition-colors">
                        {cert.title}
                      </h3>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-slate-400 font-medium">
                          {cert.issuer}
                        </span>
                        <span className="text-slate-500">{cert.date}</span>
                      </div>

                      {/* Badge */}
                      <div className="pt-2">
                        <span className="inline-flex items-center gap-1 px-3 py-1 bg-yellow-500/10 border border-yellow-500/30 rounded-full text-xs font-medium text-yellow-400">
                          <Award className="h-3 w-3" />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </Carousel>
        </motion.div>

        {/* Certificate Count removed */}
      </div>
    </section>
  );
};

export default Certifications;