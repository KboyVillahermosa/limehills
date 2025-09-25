
import './App.css';
import './styles/theme.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/about/About';
import Work from './components/work/Work';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import CareersPage from './pages/CareersPage';
import Footer from './components/footer/Footer';
import Team from './components/team/Team';
import React, { useState, useEffect } from 'react';
import Loader from './components/Loader';
import Stats from './components/stats/Stats';
import Faq from './components/faq/Faq';
import ClientsSlider from './components/clients/ClientsSlider';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="app-root">
      {loading && <Loader />}
      <Navbar />
      {window.location.pathname === '/about' ? (
        <main>
          <AboutPage />
        </main>
      ) : window.location.pathname === '/services' ? (
        <main>
          <ServicesPage />
        </main>
      ) : window.location.pathname === '/careers' ? (
        <main>
          <CareersPage />
        </main>
      ) : (
        <main>
          <Hero />
          <ClientsSlider />
          <Stats />
          <About />
          <Team />
          <Faq /> 
          <Work />
        </main>
      )}
      <Footer />
    </div>
  );
}

export default App
