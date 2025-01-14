import { motion } from 'framer-motion';
import {
  ChartBarIcon,
  TrophyIcon,
  CalendarIcon,
  BookOpenIcon
} from '@heroicons/react/24/outline';

export default function Dashboard() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white rounded-xl p-6 shadow-sm mb-8"
        >
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Welcome back, Alex!</h1>
          <p className="text-gray-600">Track your progress and continue your wellness journey</p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl p-6 shadow-sm"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-500 mb-1">{stat.name}</p>
                  <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                </div>
                <div className="text-primary-600">
                  {stat.icon}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Progress and Achievements */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Current Progress */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-xl p-6 shadow-sm"
          >
            <h2 className="text-xl font-semibold mb-4">Current Progress</h2>
            <div className="space-y-4">
              {progress.map((item) => (
                <div key={item.name}>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium text-gray-700">{item.name}</span>
                    <span className="text-sm text-gray-500">{item.value}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-primary-600 h-2 rounded-full"
                      style={{ width: `${item.value}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Recent Achievements */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-xl p-6 shadow-sm"
          >
            <h2 className="text-xl font-semibold mb-4">Recent Achievements</h2>
            <div className="space-y-4">
              {achievements.map((achievement) => (
                <div
                  key={achievement.name}
                  className="flex items-center p-3 bg-gray-50 rounded-lg"
                >
                  <div className="p-2 bg-primary-100 rounded-lg mr-4">
                    <TrophyIcon className="h-6 w-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">{achievement.name}</h3>
                    <p className="text-sm text-gray-500">{achievement.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

const stats = [
  {
    name: "Meditation Minutes",
    value: "120",
    icon: <ChartBarIcon className="h-6 w-6" />
  },
  {
    name: "Completed Courses",
    value: "3",
    icon: <BookOpenIcon className="h-6 w-6" />
  },
  {
    name: "Streak Days",
    value: "15",
    icon: <CalendarIcon className="h-6 w-6" />
  },
  {
    name: "Achievement Points",
    value: "850",
    icon: <TrophyIcon className="h-6 w-6" />
  }
];

const progress = [
  { name: "Mindfulness Course", value: 75 },
  { name: "Meditation Goal", value: 60 },
  { name: "Weekly Challenge", value: 90 }
];

const achievements = [
  {
    name: "7-Day Streak Master",
    date: "Achieved today"
  },
  {
    name: "Meditation Novice",
    date: "Achieved 2 days ago"
  },
  {
    name: "Course Champion",
    date: "Achieved last week"
  }
];