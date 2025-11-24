import { motion } from 'framer-motion'
import { FiShield, FiTrendingUp, FiUsers, FiAward, FiCheckCircle, FiArrowRight, FiCode, FiLock, FiTarget, FiZap } from 'react-icons/fi'
import CanvasWrapper from './3D/CanvasWrapper'

const Services = ({ setCurrentSection }) => {
  const services = [
    {
      id: 1,
      title: 'Cybersecurity Consulting',
      description: 'Comprehensive security assessments and strategic planning to protect your digital assets. We identify vulnerabilities, implement robust security frameworks, and ensure compliance with industry standards.',
      icon: FiShield,
      color: 'from-blue-500 to-cyan-500',
      features: [
        'Security audits and assessments',
        'Penetration testing',
        'Compliance consulting',
        'Incident response planning',
        'Security training programs'
      ],
    },
    {
      id: 2,
      title: 'Business Strategy',
      description: 'Data-driven insights and strategic planning to accelerate your business growth. We help you make informed decisions, optimize operations, and achieve sustainable competitive advantage.',
      icon: FiTrendingUp,
      color: 'from-purple-500 to-pink-500',
      features: [
        'Strategic planning and analysis',
        'Market research and insights',
        'Business model optimization',
        'Competitive analysis',
        'Growth strategy development'
      ],
    },
    {
      id: 3,
      title: 'Digital Transformation',
      description: 'Modernize your operations with cutting-edge technology solutions and best practices. We guide you through digital transformation to improve efficiency, customer experience, and innovation.',
      icon: FiUsers,
      color: 'from-orange-500 to-red-500',
      features: [
        'Technology roadmap development',
        'Cloud migration services',
        'Process automation',
        'Digital infrastructure design',
        'Change management'
      ],
    },
    {
      id: 4,
      title: 'Risk Management',
      description: 'Identify and mitigate risks with our comprehensive risk assessment frameworks. We help you build resilient operations and protect your business from potential threats.',
      icon: FiAward,
      color: 'from-green-500 to-emerald-500',
      features: [
        'Risk assessment and analysis',
        'Risk mitigation strategies',
        'Business continuity planning',
        'Regulatory compliance',
        'Vendor risk management'
      ],
    },
    {
      id: 5,
      title: 'IT Consulting',
      description: 'Expert technology consulting to align your IT infrastructure with business goals. We optimize your technology investments and ensure seamless operations.',
      icon: FiCode,
      color: 'from-indigo-500 to-purple-500',
      features: [
        'IT infrastructure assessment',
        'System architecture design',
        'Technology stack selection',
        'Performance optimization',
        'IT governance and best practices'
      ],
    },
    {
      id: 6,
      title: 'Compliance & Governance',
      description: 'Ensure your organization meets regulatory requirements and industry standards. We help you navigate complex compliance landscapes with confidence.',
      icon: FiLock,
      color: 'from-red-500 to-pink-500',
      features: [
        'Regulatory compliance audits',
        'Policy development',
        'Governance frameworks',
        'Compliance monitoring',
        'Audit preparation'
      ],
    },
    {
      id: 7,
      title: 'Performance Optimization',
      description: 'Maximize your business performance through data-driven insights and optimization strategies. We identify bottlenecks and implement solutions for improved efficiency.',
      icon: FiTarget,
      color: 'from-yellow-500 to-orange-500',
      features: [
        'Performance analysis',
        'Process optimization',
        'Resource allocation',
        'KPI development',
        'Continuous improvement programs'
      ],
    },
    {
      id: 8,
      title: 'Innovation Consulting',
      description: 'Drive innovation and stay ahead of the competition with our cutting-edge consulting services. We help you identify opportunities and implement innovative solutions.',
      icon: FiZap,
      color: 'from-cyan-500 to-blue-500',
      features: [
        'Innovation strategy',
        'Emerging technology evaluation',
        'R&D planning',
        'Product development consulting',
        'Innovation culture building'
      ],
    },
  ]

  return (
    <div className="w-full min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 md:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-400 bg-clip-text text-transparent">
              Our Services
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-3xl mx-auto">
              Comprehensive consulting solutions designed to transform your business and drive sustainable growth
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-800">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              Explore our comprehensive range of consulting services tailored to meet your unique business needs
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
              <motion.div
                key={service.id}
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
                    <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4 text-sm">
                      {service.description}
                    </p>
                    <ul className="space-y-2">
                      {service.features.slice(0, 3).map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-400">
                          <FiCheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
              )
            })}
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
              Ready to Get Started?
            </h2>
            <p className="text-xl text-blue-50 mb-8 max-w-2xl mx-auto">
              Let's discuss how our services can help transform your business
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                setCurrentSection('contact')
                window.scrollTo({ top: 0, behavior: 'smooth' })
              }}
              className="px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 inline-flex items-center gap-2"
            >
              Contact Us <FiArrowRight />
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Services

