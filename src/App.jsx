import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'

// ແກ້ໄຂ Path ໃຫ້ຖືກຕ້ອງຕາມໂຄງສ້າງໄຟລ໌ແທ້
import Navbar from './Navbar'; 
import Hero from './Hero';
import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import ContactForm from './ContactForm';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="portfolio-app">
      <Navbar />
      
      <main>
        {/* ສ່ວນປະກອບຂອງ Portfolio */}
        <Hero />
        <About />
        <Skills />
        <Projects />
        
        {/* ສ່ວນ Default ຂອງ Vite (ຖ້າຢາກເກັບໄວ້ໃຫ້ສະແດງລຸ່ມສຸດ) */}
        <section id="center">
          <div className="hero">
            <img src={heroImg} className="base" width="170" height="179" alt="" />
            <img src={reactLogo} className="framework" alt="React logo" />
            <img src={viteLogo} className="vite" alt="Vite logo" />
          </div>
          <div>
            <h1>Get started</h1>
            <p>
              Edit <code>src/App.jsx</code> and save to test <code>HMR</code>
            </p>
          </div>
          <button
            className="counter"
            onClick={() => setCount((count) => count + 1)}
          >
            Count is {count}
          </button>
        </section>

        {/* ຟອມສົ່ງ EmailJS ໄວ້ບ່ອນດຽວ */}
        <ContactForm /> 
      </main>

      <footer>
        <p>© 2026 Anna Portfolio. All rights reserved.</p>
      </footer>
      
      <div className="ticks"></div>
      <section id="spacer"></section>
    </div>
  )
}

export default App