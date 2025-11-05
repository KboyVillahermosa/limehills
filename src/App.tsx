
import './App.css';
import './styles/theme.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/about/About';
import Work from './components/work/Work';
import Contact from './pages/Contact';
import Footer from './components/footer/Footer';
import Team from './components/team/Team';
import { useState, useEffect } from 'react';
import Loader from './components/Loader';
import Stats from './components/stats/Stats';
import Faq from './components/faq/Faq';
import ClientsSlider from './components/clients/ClientsSlider';
import Project from './components/project/Project';
import Grid from './components/grid/Grind';
import Services from './components/services/Services';

function App() {
  const [loading, setLoading] = useState(true);
  const [pathname, setPathname] = useState(window.location.pathname);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Update pathname on navigation
    const updatePathname = () => setPathname(window.location.pathname);
    updatePathname();
    window.addEventListener('popstate', updatePathname);
    return () => window.removeEventListener('popstate', updatePathname);
  }, []);

  useEffect(() => {
    // Handle hash navigation after page loads
    const handleHashScroll = () => {
      if (window.location.hash) {
        setTimeout(() => {
          const element = document.querySelector(window.location.hash);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 500);
      }
    };

    handleHashScroll();
    window.addEventListener('hashchange', handleHashScroll);
    return () => window.removeEventListener('hashchange', handleHashScroll);
  }, []);

  return (
    <div className="app-root">
      {loading && <Loader />}
      <Navbar />
      {pathname === '/contact' ? (
        <main>
          <Contact />
        </main>
      ) : (
        <main>
          <Hero />
          <ClientsSlider />
          <Stats />
          <About />
          <Project />
          <Team />
          <Grid />
          <Faq /> 
          <Work />
          <Services />
        </main>
      )}
      <Footer />
    </div>
  );
}

export default App
