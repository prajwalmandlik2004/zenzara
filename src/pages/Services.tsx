import { motion } from 'framer-motion';
import { CheckIcon } from '@heroicons/react/24/outline';

export default function Services() {
  return (
    <div className="bg-white">
      {/* Subscription Plans */}
      <section className="section-padding mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl font-bold text-gray-900 mb-6">Our Services</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the perfect plan to support your wellness journey
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {plans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200"
              >
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">{plan.name}</h3>
                <p className="text-4xl font-bold mb-6">${plan.price}<span className="text-base font-normal text-gray-600">/month</span></p>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center">
                      <CheckIcon className="h-5 w-5 text-primary-600 mr-2" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className="w-full btn-primary">Get Started</button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Online Courses</h2>
            <p className="text-gray-600">
              Expand your knowledge and skills with our expert-led courses
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {courses.map((course, index) => (
              <motion.div
                key={course.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-sm"
              >
                <div className="h-48 bg-gray-200 rounded-lg mb-4" />
                <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
                <p className="text-gray-600 mb-4">{course.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-primary-600 font-semibold">${course.price}</span>
                  <button className="btn-secondary">Learn More</button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

const plans = [
  {
    name: "Basic",
    price: "29",
    features: [
      "Access to meditation library",
      "Basic progress tracking",
      "Community forum access",
      "Monthly group sessions"
    ]
  },
  {
    name: "Premium",
    price: "79",
    features: [
      "Everything in Basic",
      "1-on-1 coaching sessions",
      "Advanced analytics",
      "Priority support"
    ]
  },
  {
    name: "Enterprise",
    price: "199",
    features: [
      "Everything in Premium",
      "Custom wellness programs",
      "Team management",
      "Dedicated account manager"
    ]
  }
];

const courses = [
  {
    title: "Mindfulness Mastery",
    description: "Learn fundamental mindfulness techniques for daily life",
    price: 199
  },
  {
    title: "Stress Management",
    description: "Practical tools for managing stress and anxiety",
    price: 249
  },
  {
    title: "Spiritual Leadership",
    description: "Develop leadership skills through spiritual principles",
    price: 299
  },
  {
    title: "Meditation Fundamentals",
    description: "Master the basics of meditation practice",
    price: 149
  }
];