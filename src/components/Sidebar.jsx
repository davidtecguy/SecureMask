import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiHome, FiBarChart2, FiMenu, FiX } from 'react-icons/fi'

const Sidebar = ({ currentSection, setCurrentSection, sidebarOpen, setSidebarOpen }) => {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
      if (window.innerWidth >= 768) {
        setSidebarOpen(true)
      } else {
        setSidebarOpen(false)
      }
    }

    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [setSidebarOpen])

  const menuItems = [
    { id: 'home', label: 'Home', icon: FiHome },
    { id: 'dashboard', label: 'Success Stories', icon: FiBarChart2 },
  ]

  const shouldShowSidebar = sidebarOpen || !isMobile

  return (
    <>
      {/* Mobile menu button */}
      {isMobile && (
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="fixed top-4 left-4 z-50 p-2 rounded-lg bg-white/80 dark:bg-slate-800/80 backdrop-blur-md shadow-lg"
        >
          {sidebarOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      )}

      {/* Sidebar */}
      <AnimatePresence>
        {shouldShowSidebar && (
          <motion.aside
            initial={{ x: -300 }}
            animate={{ x: 0 }}
            exit={{ x: -300 }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed left-0 top-0 h-full w-64 bg-gradient-to-b from-slate-800 to-slate-900 text-white z-40 shadow-2xl"
          >
            <div className="p-6 border-b border-slate-700">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                SecureMask
              </h1>
              <p className="text-sm text-slate-400 mt-1">Consulting Excellence</p>
            </div>

            <nav className="p-4 space-y-2">
              {menuItems.map((item) => {
                const Icon = item.icon
                const isActive = currentSection === item.id

                return (
                  <motion.button
                    key={item.id}
                    onClick={() => {
                      setCurrentSection(item.id)
                      if (isMobile) setSidebarOpen(false)
                    }}
                    whileHover={{ x: 5 }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-300 ${
                      isActive
                        ? 'bg-gradient-to-r from-blue-600 to-cyan-500 shadow-lg'
                        : 'hover:bg-slate-700/50'
                    }`}
                  >
                    <Icon size={20} />
                    <span className="font-medium">{item.label}</span>
                  </motion.button>
                )
              })}
            </nav>

            <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-slate-700">
              <p className="text-xs text-slate-500 text-center">
                © 2024 SecureMask. All rights reserved.
              </p>
            </div>
          </motion.aside>
        )}
      </AnimatePresence>
    </>
  )
}

export default Sidebar

