import { motion } from 'framer-motion'
import { FiCheckCircle, FiTrendingUp } from 'react-icons/fi'

const CaseStudyCard = ({ study, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      whileHover={{ y: -10 }}
      className="relative overflow-hidden rounded-xl glass-effect card-hover group"
    >
      {/* Gradient Background */}
      <div className={`absolute inset-0 bg-gradient-to-br ${study.color} opacity-5 group-hover:opacity-10 transition-opacity duration-300`}></div>
      
      <div className="relative p-6 md:p-8">
        {/* Category Badge */}
        <div className="inline-block px-4 py-2 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 text-sm font-semibold mb-4">
          {study.category}
        </div>

        <h3 className="text-2xl md:text-3xl font-bold mb-2 text-slate-800 dark:text-slate-100">
          {study.title}
        </h3>
        <p className="text-slate-600 dark:text-slate-400 mb-1 font-medium">
          {study.client}
        </p>
        <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
          {study.description}
        </p>

        {/* Results */}
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-sm font-semibold text-slate-700 dark:text-slate-300 mb-3">
            <FiTrendingUp className="text-green-500" />
            <span>Key Results:</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {study.results.map((result, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 + idx * 0.05 }}
                className="flex items-start gap-2"
              >
                <FiCheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-slate-600 dark:text-slate-300">
                  {result}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default CaseStudyCard

