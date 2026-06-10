import { ThemeProvider } from './components/themeprovider';
import Navbar from './components/navbar';
import Hero from './components/hero';
import Skills from './components/skills';
import Projects from './components/projects';
import Experience from './components/experience';
import Certifications from './components/certifications';
import Contact from './components/contact';
import './App.css';

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="portfolio-theme">
      <div className="min-h-screen transition-colors duration-300">
        <Navbar />
        <main>
          <Hero />
          <Skills />
          <Projects />
          <Experience />
          <Certifications />
          <Contact />
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;