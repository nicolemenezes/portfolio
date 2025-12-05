import { motion } from 'framer-motion';
import { 
  FaHtml5, 
  FaCss3Alt, 
  FaJs, 
  FaJava, 
  FaNodeJs, 
  FaPython, 
  FaGitAlt 
} from 'react-icons/fa';
import { 
  SiMongodb, 
  SiExpress, 
  SiNextdotjs, 
  SiMysql, 
  SiTailwindcss 
} from 'react-icons/si';

const Skills = () => {
  const skills = [
    { name: 'HTML', icon: FaHtml5, color: '#E34F26' },
    { name: 'CSS', icon: FaCss3Alt, color: '#1572B6' },
    { name: 'JavaScript', icon: FaJs, color: '#F7DF1E' },
    { name: 'Java', icon: FaJava, color: '#007396' },
    { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
    { name: 'Node.js', icon: FaNodeJs, color: '#339933' },
    { name: 'Express.js', icon: SiExpress, color: '#000000' },
    { name: 'Next.js', icon: SiNextdotjs, color: '#000000' },
    { name: 'SQL', icon: SiMysql, color: '#4479A1' },
    { name: 'Git/GitHub', icon: FaGitAlt, color: '#F05032' },
    { name: 'Tailwind', icon: SiTailwindcss, color: '#06B6D4' },
    { name: 'Python', icon: FaPython, color: '#3776AB' },
  ];

  // Duplicate skills for seamless loop
  const duplicatedSkills = [...skills, ...skills];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-4">
            Skills & Technologies
          </h2>
          <p className="text-slate-400 text-lg">My technical toolkit</p>
        </motion.div>

        {/* Infinite Scrolling Skills */}
        <div className="relative overflow-hidden py-12">
          {/* Gradient Overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-slate-950 via-blue-950/50 to-transparent z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-slate-950 via-blue-950/50 to-transparent z-10"></div>

          <motion.div
            className="flex space-x-8"
            animate={{
              x: [0, -1800],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: 'loop',
                duration: 36,
                ease: 'linear',
              },
            }}
          >
            {duplicatedSkills.map((skill, index) => {
              const IconComponent = skill.icon;
              return (
                <div
                  key={`${skill.name}-${index}`}
                  className="flex-shrink-0 group"
                >
                  <div className="w-40 h-40 bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700 hover:border-blue-500/50 transition-all duration-300 flex flex-col items-center justify-center space-y-3 hover:scale-110 hover:shadow-lg hover:shadow-blue-500/20">
                    <IconComponent 
                      className="text-6xl group-hover:scale-110 transition-transform duration-300"
                      style={{ color: skill.color }}
                    />
                    <p
                      className="font-semibold text-sm text-center px-2"
                      style={{ color: skill.color }}
                    >
                      {skill.name}
                    </p>
                  </div>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;