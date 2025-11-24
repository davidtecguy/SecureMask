import { motion } from 'framer-motion'

const StatsCard = ({ stat, index }) => {
  const Icon = stat.icon

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      whileHover={{ y: -5, scale: 1.02 }}
      className="p-6 rounded-xl glass-effect card-hover text-center"
    >
      <div className={`w-16 h-16 rounded-lg bg-gradient-to-r ${stat.color} flex items-center justify-center shadow-lg mx-auto mb-4`}>
        <Icon className="w-8 h-8 text-white" />
      </div>
      <h3 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-slate-100 mb-2">
        {stat.value}
      </h3>
      <p className="text-lg font-semibold text-slate-700 dark:text-slate-300 mb-2">
        {stat.title}
      </p>
      <p className="text-sm text-slate-600 dark:text-slate-400">
        {stat.description}
      </p>
    </motion.div>
  )
}

export default StatsCard

