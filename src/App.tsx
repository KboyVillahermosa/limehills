import './App.css'
import './styles/theme.css'
import { NavbarWithChat as Navbar } from './components/Navbar'
import Hero from './components/Hero'
import About from './components/about/About'
import Work from './components/work/Work'

function App() {
  return (
    <div className="app-root">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Work />
      </main>
    </div>
  )
}

export default App
