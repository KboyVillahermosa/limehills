import './App.css'
import './styles/theme.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/about/About'
import Work from './components/work/Work'
import AboutPage from './pages/AboutPage'
import ServicesPage from './pages/ServicesPage'
import CareersPage from './pages/CareersPage'
import Footer from './components/footer/Footer'
import Team from './components/team/Team'

function App() {
  return (
    <div className="app-root">
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
          <About />
          <Team />
          <Work />
        </main>
      )}
      <Footer />
    </div>
  )
}

export default App
