import { motion } from 'framer-motion';
import { ChatBubbleLeftIcon, HeartIcon, ShareIcon } from '@heroicons/react/24/outline';

export default function Community() {
  return (
    <div className="bg-gray-50">
      {/* Community Feed */}
      <section className="section-padding mt-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl font-bold text-gray-900 mb-6">Community</h1>
            <p className="text-xl text-gray-600">
              Connect, share, and grow with fellow wellness enthusiasts
            </p>
          </motion.div>

          {/* Posts */}
          <div className="space-y-8">
            {posts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-sm p-6"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-gray-200 mr-4" />
                  <div>
                    <h3 className="font-semibold text-gray-900">{post.author}</h3>
                    <p className="text-sm text-gray-500">{post.date}</p>
                  </div>
                </div>
                <p className="text-gray-700 mb-4">{post.content}</p>
                {post.image && (
                  <div className="mb-4">
                    <div className="h-64 bg-gray-200 rounded-lg" />
                  </div>
                )}
                <div className="flex items-center space-x-6 text-gray-500">
                  <button className="flex items-center space-x-2 hover:text-primary-600">
                    <HeartIcon className="h-5 w-5" />
                    <span>{post.likes}</span>
                  </button>
                  <button className="flex items-center space-x-2 hover:text-primary-600">
                    <ChatBubbleLeftIcon className="h-5 w-5" />
                    <span>{post.comments}</span>
                  </button>
                  <button className="flex items-center space-x-2 hover:text-primary-600">
                    <ShareIcon className="h-5 w-5" />
                    <span>Share</span>
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Success Stories</h2>
            <p className="text-gray-600">
              Inspiring journeys from our community members
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {stories.map((story, index) => (
              <motion.div
                key={story.name}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-50 rounded-xl p-6"
              >
                <div className="flex items-center mb-4">
                  <div className="w-16 h-16 rounded-full bg-gray-200 mr-4" />
                  <div>
                    <h3 className="font-semibold text-gray-900">{story.name}</h3>
                    <p className="text-sm text-primary-600">{story.achievement}</p>
                  </div>
                </div>
                <p className="text-gray-700">{story.testimonial}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

const posts = [
  {
    id: 1,
    author: "Jane Smith",
    date: "2 hours ago",
    content: "Just completed my 30-day meditation challenge! Feeling more centered and focused than ever. 🧘‍♀️✨",
    likes: 24,
    comments: 5,
    image: true
  },
  {
    id: 2,
    author: "Mark Johnson",
    date: "5 hours ago",
    content: "Today's spiritual leadership workshop was incredible. Here are my key takeaways...",
    likes: 18,
    comments: 3,
    image: false
  }
];

const stories = [
  {
    name: "Sarah Williams",
    achievement: "Overcame anxiety through mindfulness",
    testimonial: "Zenzara's programs helped me develop a daily meditation practice that transformed my relationship with anxiety."
  },
  {
    name: "David Chen",
    achievement: "Found work-life balance",
    testimonial: "The community support and expert guidance helped me create better boundaries and find true balance in my life."
  },
  {
    name: "Maria Garcia",
    achievement: "Spiritual growth journey",
    testimonial: "Through Zenzara's courses, I've deepened my spiritual practice and found a supportive community."
  },
  {
    name: "James Wilson",
    achievement: "Stress management success",
    testimonial: "The gamified approach made it fun to build healthy habits. I'm now better equipped to handle daily stress."
  }
];