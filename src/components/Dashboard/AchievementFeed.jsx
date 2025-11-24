import { motion } from 'framer-motion'

const AchievementFeed = ({ milestones }) => {
  return (
    <div className="relative">
      {/* Timeline Line */}
      <div className="hidden md:block absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-cyan-500 to-blue-500"></div>

      <div className="space-y-12">
        {milestones.map((milestone, index) => {
          const Icon = milestone.icon
          const isEven = index % 2 === 0

          return (
            <motion.div
              key={milestone.id}
              initial={{ opacity: 0, x: isEven ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="relative"
            >
              {/* Timeline Dot */}
              <div className="hidden md:block absolute left-6 w-5 h-5 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 border-4 border-white dark:border-slate-900 z-10"></div>

              {/* Content Card */}
              <div className={`md:ml-20 p-6 md:p-8 rounded-xl glass-effect card-hover ${
                isEven ? 'md:mr-0' : 'md:mr-0'
              }`}>
                <div className="flex items-start gap-4">
                  <div className={`w-14 h-14 rounded-lg ${milestone.color} bg-opacity-10 flex items-center justify-center flex-shrink-0`}>
                    <Icon className={milestone.color} size={28} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                        {milestone.year}
                      </span>
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-slate-800 dark:text-slate-100 mb-2">
                      {milestone.title}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                      {milestone.description}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}

export default AchievementFeed

