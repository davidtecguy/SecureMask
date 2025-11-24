import { useState } from 'react'
import Header from './components/Header'
import Homepage from './components/Homepage'
import Services from './components/Services'
import Dashboard from './components/Dashboard'
import Contact from './components/Contact'

function App() {
  const [currentSection, setCurrentSection] = useState('home')

  return (
    <div className="min-h-screen">
      <Header currentSection={currentSection} setCurrentSection={setCurrentSection} />
      <main>
        {currentSection === 'home' && <Homepage setCurrentSection={setCurrentSection} />}
        {currentSection === 'services' && <Services setCurrentSection={setCurrentSection} />}
        {currentSection === 'dashboard' && <Dashboard />}
        {currentSection === 'contact' && <Contact />}
      </main>
    </div>
  )
}

export default App
