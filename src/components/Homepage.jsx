import { motion } from 'framer-motion'
import { FiShield, FiTrendingUp, FiUsers, FiAward, FiArrowRight } from 'react-icons/fi'
import FloatingCube from './3D/FloatingCube'
import CanvasWrapper from './3D/CanvasWrapper'
import ServiceCard from './Homepage/ServiceCard'
import TestimonialCard from './Homepage/TestimonialCard'

const Homepage = ({ setCurrentSection }) => {
  const services = [
    {
      id: 1,
      title: 'Cybersecurity Consulting',
      description: 'Comprehensive security assessments and strategic planning to protect your digital assets.',
      icon: FiShield,
      color: 'from-blue-500 to-cyan-500',
    },
    {
      id: 2,
      title: 'Business Strategy',
      description: 'Data-driven insights and strategic planning to accelerate your business growth.',
      icon: FiTrendingUp,
      color: 'from-purple-500 to-pink-500',
    },
    {
      id: 3,
      title: 'Digital Transformation',
      description: 'Modernize your operations with cutting-edge technology solutions and best practices.',
      icon: FiUsers,
      color: 'from-orange-500 to-red-500',
    },
    {
      id: 4,
      title: 'Risk Management',
      description: 'Identify and mitigate risks with our comprehensive risk assessment frameworks.',
      icon: FiAward,
      color: 'from-green-500 to-emerald-500',
    },
  ]

  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'CEO, TechCorp',
      content: 'SecureMask transformed our security posture. Their expertise is unmatched.',
      rating: 5,
    },
    {
      id: 2,
      name: 'Michael Chen',
      role: 'CTO, InnovateLabs',
      content: 'The best consulting experience we\'ve had. Professional, efficient, and results-driven.',
      rating: 5,
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      role: 'Director, FinanceHub',
      content: 'Their strategic insights helped us achieve 300% growth in just one year.',
      rating: 5,
    },
  ]

  const stats = [
    { label: 'Happy Clients', value: '500+', icon: FiUsers },
    { label: 'Projects Completed', value: '1200+', icon: FiTrendingUp },
    { label: 'Years of Experience', value: '15+', icon: FiAward },
    { label: 'Success Rate', value: '98%', icon: FiShield },
  ]

  return (
    <div className="w-full min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        {/* 3D Background Element */}
        <div className="absolute inset-0 opacity-20">
          <CanvasWrapper>
            <FloatingCube />
          </CanvasWrapper>
        </div>

        {/* Hero Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center px-4 md:px-8 max-w-5xl mx-auto"
        >
          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-400 bg-clip-text text-transparent"
          >
            SecureMask Consulting
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-xl md:text-2xl text-slate-300 mb-8"
          >
            Elevating businesses through strategic excellence and innovative solutions
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex gap-4 justify-center flex-wrap"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                setCurrentSection('contact')
                window.scrollTo({ top: 0, behavior: 'smooth' })
              }}
              className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2"
            >
              Get Started <FiArrowRight />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                setCurrentSection('services')
                window.scrollTo({ top: 0, behavior: 'smooth' })
              }}
              className="px-8 py-4 glass-effect text-white rounded-lg font-semibold hover:bg-white/20 transition-all duration-300"
            >
              Learn More
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center p-2"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="w-1 h-3 bg-white/70 rounded-full"
            />
          </motion.div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white dark:bg-slate-800">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center card-hover p-6 rounded-xl glass-effect"
                >
                  <Icon className="w-8 h-8 mx-auto mb-3 text-blue-500" />
                  <div className="text-3xl md:text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm md:text-base text-slate-600 dark:text-slate-300">
                    {stat.label}
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-800">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              Our Services
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              Comprehensive consulting solutions tailored to your business needs
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {services.map((service, index) => (
              <ServiceCard key={service.id} service={service} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-b from-white to-slate-50 dark:from-slate-800 dark:to-slate-900">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              Client Testimonials
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300">
              What our clients say about us
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-cyan-500">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-blue-50 mb-8 max-w-2xl mx-auto">
              Let's discuss how SecureMask can help you achieve your goals
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                setCurrentSection('contact')
                window.scrollTo({ top: 0, behavior: 'smooth' })
              }}
              className="px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2 mx-auto"
            >
              Contact Us <FiArrowRight />
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Homepage

