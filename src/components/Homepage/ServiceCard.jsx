import { motion } from 'framer-motion'
import { useRef } from 'react'
import CanvasWrapper from '../3D/CanvasWrapper'

const ServiceCard = ({ service, index }) => {
  const Icon = service.icon
  const cardRef = useRef(null)

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      whileHover={{ y: -10 }}
      className="relative group"
    >
      <div className="h-full p-6 rounded-xl glass-effect card-hover overflow-hidden">
        {/* 3D Background Element */}
        <div className="absolute top-0 right-0 w-32 h-32 opacity-10 group-hover:opacity-20 transition-opacity duration-300 pointer-events-none">
          <CanvasWrapper>
            <mesh rotation={[0.5, 0.5, 0]}>
              <boxGeometry args={[1, 1, 1]} />
              <meshStandardMaterial color="#0ea5e9" />
            </mesh>
          </CanvasWrapper>
        </div>

        {/* Content */}
        <div className="relative z-10">
          <div className={`w-14 h-14 rounded-lg bg-gradient-to-r ${service.color} flex items-center justify-center mb-4 shadow-lg`}>
            <Icon className="w-7 h-7 text-white" />
          </div>
          <h3 className="text-xl font-bold mb-3 text-slate-800 dark:text-slate-100">
            {service.title}
          </h3>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
            {service.description}
          </p>
        </div>
      </div>
    </motion.div>
  )
}

export default ServiceCard

