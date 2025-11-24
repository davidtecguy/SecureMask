import { motion } from 'framer-motion'
import { FiStar } from 'react-icons/fi'

const TestimonialCard = ({ testimonial, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      whileHover={{ y: -5 }}
      className="p-6 rounded-xl glass-effect card-hover h-full"
    >
      <div className="flex gap-1 mb-4">
        {[...Array(testimonial.rating)].map((_, i) => (
          <FiStar key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
        ))}
      </div>
      <p className="text-slate-700 dark:text-slate-300 mb-6 leading-relaxed italic">
        "{testimonial.content}"
      </p>
      <div className="border-t border-slate-200 dark:border-slate-700 pt-4">
        <div className="font-semibold text-slate-800 dark:text-slate-100">
          {testimonial.name}
        </div>
        <div className="text-sm text-slate-500 dark:text-slate-400">
          {testimonial.role}
        </div>
      </div>
    </motion.div>
  )
}

export default TestimonialCard

