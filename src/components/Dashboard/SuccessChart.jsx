import { motion } from 'framer-motion'
import { LineChart, Line, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts'
import { FiTrendingUp } from 'react-icons/fi'

const SuccessChart = () => {
  const data = [
    { year: '2019', clients: 120, projects: 280 },
    { year: '2020', clients: 180, projects: 420 },
    { year: '2021', clients: 250, projects: 580 },
    { year: '2022', clients: 320, projects: 750 },
    { year: '2023', clients: 400, projects: 950 },
    { year: '2024', clients: 500, projects: 1200 },
  ]

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.01 }}
      className="p-6 md:p-8 rounded-xl glass-effect card-hover"
    >
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-100 mb-1">
            Growth Over Time
          </h3>
          <p className="text-sm text-slate-600 dark:text-slate-400">
            Our expanding client base and project portfolio
          </p>
        </div>
        <div className="flex items-center gap-2 text-green-500">
          <FiTrendingUp size={24} />
          <span className="font-semibold">+320%</span>
        </div>
      </div>

      <div className="h-64 md:h-80">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
            <defs>
              <linearGradient id="colorClients" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#0ea5e9" stopOpacity={0.3} />
                <stop offset="95%" stopColor="#0ea5e9" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="colorProjects" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#10b981" stopOpacity={0.3} />
                <stop offset="95%" stopColor="#10b981" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" opacity={0.5} />
            <XAxis 
              dataKey="year" 
              stroke="#64748b"
              style={{ fontSize: '12px' }}
            />
            <YAxis 
              stroke="#64748b"
              style={{ fontSize: '12px' }}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: 'rgba(255, 255, 255, 0.95)',
                border: '1px solid #e2e8f0',
                borderRadius: '8px',
                padding: '10px',
              }}
            />
            <Legend />
            <Area
              type="monotone"
              dataKey="clients"
              stroke="#0ea5e9"
              strokeWidth={2}
              fillOpacity={1}
              fill="url(#colorClients)"
              name="Clients"
            />
            <Area
              type="monotone"
              dataKey="projects"
              stroke="#10b981"
              strokeWidth={2}
              fillOpacity={1}
              fill="url(#colorProjects)"
              name="Projects"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  )
}

export default SuccessChart

