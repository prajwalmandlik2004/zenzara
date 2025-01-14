import { motion } from 'framer-motion';

export default function About() {
  return (
    <div className="bg-white">
      {/* Vision Section */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl font-bold text-gray-900 mb-6">Our Vision</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              At Zenzara, we envision a world where technology and spirituality converge to create
              transformative wellness experiences that empower individuals to lead balanced,
              fulfilling lives.
            </p>
          </motion.div>

          {/* Mission Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-primary-50 p-8 rounded-xl"
            >
              <h3 className="text-2xl font-semibold text-primary-900 mb-4">Our Mission</h3>
              <p className="text-gray-700">
                To provide accessible, innovative wellness solutions that combine ancient wisdom
                with modern technology, fostering personal growth and community connection.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-secondary-50 p-8 rounded-xl"
            >
              <h3 className="text-2xl font-semibold text-secondary-900 mb-4">Our Approach</h3>
              <p className="text-gray-700">
                We believe in holistic wellness that addresses mind, body, and spirit through
                gamified experiences, expert guidance, and community support.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Team</h2>
            <p className="text-gray-600">
              Meet the passionate individuals behind Zenzara
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-sm text-center"
              >
                <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-gray-200" />
                <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                <p className="text-primary-600 mb-2">{member.role}</p>
                <p className="text-gray-600">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

const team = [
  {
    name: "Sarah Johnson",
    role: "Founder & CEO",
    bio: "Wellness expert with 15+ years of experience in mindfulness and technology."
  },
  {
    name: "Michael Chen",
    role: "Head of Technology",
    bio: "Tech innovator passionate about creating meaningful digital experiences."
  },
  {
    name: "Dr. Emily Patel",
    role: "Wellness Director",
    bio: "Clinical psychologist specializing in stress management and meditation."
  }
];