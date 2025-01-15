import { motion } from 'framer-motion';
import { DevicePhoneMobileIcon, ArrowDownTrayIcon } from '@heroicons/react/24/outline';

export default function Download() {
  const handleDownload = () => {
    // Using the correct public path for the APK file
    const apkPath = '/zenzara.apk';
    
    // Create a link element and trigger download
    const link = document.createElement('a');
    link.href = apkPath;
    link.setAttribute('download', 'zenzara.apk');
    link.setAttribute('type', 'application/vnd.android.package-archive');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="bg-white">
      <section className="section-padding mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl font-bold text-gray-900 mb-6">
                Download Our Mobile App
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Take your wellness journey with you wherever you go. Access meditation guides,
                track your progress, and connect with our community right from your phone.
              </p>
              <div className="space-y-4">
                <button
                  onClick={handleDownload}
                  className="w-full sm:w-auto btn-primary flex items-center justify-center space-x-2"
                >
                  <ArrowDownTrayIcon className="h-5 w-5" />
                  <span>Download Now</span>
                </button>
              </div>
            </motion.div>

            {/* Right Column - App Preview */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative mx-auto w-full max-w-[300px]">
                <DevicePhoneMobileIcon className="w-full h-auto text-gray-900" />
                <div className="absolute inset-0 bg-primary-100/50 rounded-3xl"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">App Features</h2>
            <p className="text-gray-600">
              Everything you need for your wellness journey in one place
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-sm"
              >
                <div className="text-primary-600 mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

const features = [
  {
    title: "Guided Meditations",
    description: "Access our library of guided meditations anytime, anywhere.",
    icon: "🧘‍♀️"
  },
  {
    title: "Progress Tracking",
    description: "Monitor your wellness journey with detailed insights and statistics.",
    icon: "📊"
  },
  {
    title: "Community Access",
    description: "Connect with like-minded individuals and share your experiences.",
    icon: "🤝"
  }
];