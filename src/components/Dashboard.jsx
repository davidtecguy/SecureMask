import { motion } from 'framer-motion'
import { FiTrendingUp, FiUsers, FiAward, FiCheckCircle, FiGlobe, FiTarget, FiShield, FiZap } from 'react-icons/fi'
import StatsCard from './Dashboard/StatsCard'
import SuccessChart from './Dashboard/SuccessChart'
import CaseStudyCard from './Dashboard/CaseStudyCard'
import AchievementFeed from './Dashboard/AchievementFeed'

const Dashboard = () => {
  const achievements = [
    {
      id: 1,
      title: 'Clients Served Worldwide',
      value: '500+',
      description: 'Successful partnerships across the globe',
      icon: FiUsers,
      color: 'from-blue-500 to-cyan-500',
    },
    {
      id: 2,
      title: 'Projects Delivered',
      value: '1,200+',
      description: 'Excellence in every engagement',
      icon: FiCheckCircle,
      color: 'from-green-500 to-emerald-500',
    },
    {
      id: 3,
      title: 'Years of Excellence',
      value: '15+',
      description: 'Trusted industry leader',
      icon: FiAward,
      color: 'from-purple-500 to-pink-500',
    },
    {
      id: 4,
      title: 'Success Rate',
      value: '98%',
      description: 'Client satisfaction guaranteed',
      icon: FiTrendingUp,
      color: 'from-orange-500 to-red-500',
    },
  ]

  const caseStudies = [
    {
      id: 1,
      title: 'Enterprise Security Transformation',
      client: 'Fortune 500 Tech Company',
      description: 'Comprehensive cybersecurity overhaul resulting in 99.9% threat prevention and zero security incidents for 18 months.',
      results: [
        '99.9% threat prevention rate',
        'Zero security incidents',
        '50% reduction in security costs',
        'ISO 27001 certification achieved'
      ],
      category: 'Cybersecurity',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      id: 2,
      title: 'Digital Innovation Strategy',
      client: 'Global Financial Institution',
      description: 'Strategic digital transformation that increased operational efficiency by 300% and customer satisfaction by 45%.',
      results: [
        '300% efficiency increase',
        '45% customer satisfaction boost',
        '$50M cost savings',
        'Industry-leading innovation'
      ],
      category: 'Digital Transformation',
      color: 'from-purple-500 to-pink-500',
    },
    {
      id: 3,
      title: 'Risk Management Framework',
      client: 'Leading Healthcare Provider',
      description: 'Implemented comprehensive risk assessment framework reducing operational risks by 75% and ensuring regulatory compliance.',
      results: [
        '75% risk reduction',
        '100% regulatory compliance',
        'Streamlined operations',
        'Enhanced patient safety'
      ],
      category: 'Risk Management',
      color: 'from-green-500 to-emerald-500',
    },
    {
      id: 4,
      title: 'Business Growth Strategy',
      client: 'Mid-Size Manufacturing Company',
      description: 'Strategic business planning that resulted in 250% revenue growth and expansion into 3 new markets within 2 years.',
      results: [
        '250% revenue growth',
        '3 new market expansions',
        'Market leadership position',
        'Sustainable growth model'
      ],
      category: 'Business Strategy',
      color: 'from-orange-500 to-red-500',
    },
  ]

  const milestones = [
    {
      id: 1,
      year: '2024',
      title: 'Global Expansion',
      description: 'Opened offices in 5 new countries, serving clients across 40+ nations',
      icon: FiGlobe,
      color: 'text-blue-500',
    },
    {
      id: 2,
      year: '2023',
      title: 'Industry Recognition',
      description: 'Awarded "Best Consulting Firm" by International Business Awards',
      icon: FiAward,
      color: 'text-yellow-500',
    },
    {
      id: 3,
      year: '2022',
      title: 'Innovation Milestone',
      description: 'Launched AI-powered consulting platform, revolutionizing client engagement',
      icon: FiZap,
      color: 'text-purple-500',
    },
    {
      id: 4,
      year: '2021',
      title: 'Sustainability Initiative',
      description: 'Achieved carbon-neutral operations and helped 100+ clients go green',
      icon: FiTarget,
      color: 'text-green-500',
    },
  ]

  const services = [
    {
      icon: FiShield,
      title: 'Security Excellence',
      description: 'World-class cybersecurity solutions',
    },
    {
      icon: FiTarget,
      title: 'Strategic Planning',
      description: 'Data-driven business strategies',
    },
    {
      icon: FiZap,
      title: 'Innovation',
      description: 'Cutting-edge technology solutions',
    },
    {
      icon: FiAward,
      title: 'Quality Assurance',
      description: 'Guaranteed results and satisfaction',
    },
  ]

  return (
    <div className="w-full min-h-screen">
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
              Proven Results, Trusted Excellence
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-3xl mx-auto">
              Discover how SecureMask has transformed businesses worldwide with innovative consulting solutions
            </p>
          </motion.div>
        </div>
      </section>

      {/* Achievement Stats */}
      <section className="py-16 bg-white dark:bg-slate-800 -mt-12 relative z-20">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {achievements.map((achievement, index) => (
              <StatsCard key={achievement.id} stat={achievement} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Success Chart */}
      <section className="py-20 bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-800">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              Our Track Record
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              Consistent growth and client success over the years
            </p>
          </motion.div>
          <SuccessChart />
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 bg-white dark:bg-slate-800">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              Success Stories
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              Real results from real partnerships
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {caseStudies.map((study, index) => (
              <CaseStudyCard key={study.id} study={study} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Milestones Timeline */}
      <section className="py-20 bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-800">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              Our Journey
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300">
              Milestones that shaped our legacy
            </p>
          </motion.div>

          <AchievementFeed milestones={milestones} />
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white dark:bg-slate-800">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              Why Choose SecureMask?
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              Experience the difference of working with industry leaders
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                  className="p-8 rounded-xl glass-effect card-hover text-center"
                >
                  <div className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-slate-800 dark:text-slate-100">
                    {service.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300">
                    {service.description}
                  </p>
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
              Ready to Write Your Success Story?
            </h2>
            <p className="text-xl text-blue-50 mb-8 max-w-2xl mx-auto">
              Join hundreds of successful companies that trust SecureMask for their transformation journey
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 inline-flex items-center gap-2"
            >
              Start Your Journey
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Dashboard
