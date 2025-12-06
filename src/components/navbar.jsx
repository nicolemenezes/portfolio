import { useState, useEffect } from 'react';
import { useTheme } from './themeprovider';

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isOpen, setIsOpen] = useState(false);
  const { theme } = useTheme();

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'experience', label: 'Experience' },
    { id: 'certifications', label: 'Certifications' },
    { id: 'contact', label: 'Contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 120;

      sections.forEach((section, index) => {
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;

          if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            setActiveSection(navItems[index].id);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav
      className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[92%] max-w-4xl"
      aria-label="Primary"
    >
      <div
        className="relative backdrop-blur-md rounded-full px-4 md:px-6 py-3 shadow-2xl border"
        style={{
          backgroundColor: theme === 'dark' ? 'rgba(42, 42, 42, 0.9)' : 'rgba(255, 255, 255, 0.9)',
          borderColor: theme === 'dark' ? 'rgba(58, 58, 58, 0.8)' : 'rgba(203, 213, 225, 0.8)',
        }}
      >
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center justify-center gap-6">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`text-sm font-medium transition-all duration-300 ${
                activeSection === item.id
                  ? 'text-[#004D61] scale-110'
                  : theme === 'dark'
                  ? 'text-[#F0F0F0] hover:text-[#004D61]'
                  : 'text-slate-700 hover:text-[#004D61]'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden flex items-center justify-between w-full">
          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen((s) => !s)}
            aria-expanded={isOpen}
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            className="p-2 rounded-full focus:outline-none focus:ring-2 focus:ring-[#004D61] transition-colors"
            style={{
              backgroundColor: theme === 'dark' ? 'rgba(58, 58, 58, 0.5)' : 'rgba(226, 232, 240, 0.5)'
            }}
          >
            {!isOpen ? (
              <svg 
                className="w-6 h-6" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor"
                style={{ color: theme === 'dark' ? '#F0F0F0' : '#1A1A1A' }}
              >
                <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M4 7h16M4 12h16M4 17h16" />
              </svg>
            ) : (
              <svg 
                className="w-6 h-6" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor"
                style={{ color: theme === 'dark' ? '#F0F0F0' : '#1A1A1A' }}
              >
                <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            )}
          </button>

          {/* Portfolio Title */}
          <span 
            className="text-sm font-semibold"
            style={{ color: theme === 'dark' ? '#F0F0F0' : '#1A1A1A' }}
          >
            Nicole Menezes
          </span>

          {/* Empty space for alignment */}
          <div className="w-10"></div>
        </div>

        {/* Mobile Dropdown Menu */}
        {isOpen && (
          <div
            className="absolute top-full left-0 right-0 mt-2 rounded-2xl shadow-2xl border overflow-hidden md:hidden"
            style={{
              backgroundColor: theme === 'dark' ? 'rgba(42, 42, 42, 0.98)' : 'rgba(255,255,255,0.98)',
              borderColor: theme === 'dark' ? 'rgba(58, 58, 58, 0.8)' : 'rgba(203, 213, 225, 0.8)',
            }}
          >
            <div className="flex flex-col py-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`w-full text-left px-6 py-3 text-sm font-medium transition-all duration-200 ${
                    activeSection === item.id
                      ? 'bg-[#004D61]/20 text-[#004D61] border-l-4 border-[#004D61]'
                      : theme === 'dark'
                      ? 'text-[#F0F0F0] hover:bg-[#004D61]/10'
                      : 'text-slate-700 hover:bg-[#004D61]/10'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;