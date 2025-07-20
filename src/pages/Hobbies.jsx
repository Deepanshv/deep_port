import { motion } from "framer-motion";

const Hobbies = () => {
  return (
    <motion.section
      id="hobbies"
      className="py-20 px-8 bg-black text-white relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h2 className="text-4xl font-heading font-bold text-center mb-12">
        Hobbies
      </h2>

      {/* Cards Wrapper */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {/* Photography Card */}
        <motion.div
          className="hobby-card relative p-6 rounded-lg bg-gradient-to-b from-gray-800 to-black border border-transparent hover:border-cyan-500 hover:shadow-lg hover:scale-105 transition-all duration-500"
          whileHover={{ y: -10 }}
        >
          <h3 className="text-2xl font-bold mb-4 text-gradient bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">
            Photography
          </h3>
          <p className="text-lg text-gray-400">
            Capturing moments and stories through creative perspectives.
          </p>
        </motion.div>

        {/* Traveling Card */}
        <motion.div
          className="hobby-card relative p-6 rounded-lg bg-gradient-to-b from-gray-800 to-black border border-transparent hover:border-green-500 hover:shadow-lg hover:scale-105 transition-all duration-500"
          whileHover={{ y: -10 }}
        >
          <h3 className="text-2xl font-bold mb-4 text-gradient bg-gradient-to-r from-green-400 to-teal-500 bg-clip-text text-transparent">
            Traveling & Exploring
          </h3>
          <p className="text-lg text-gray-400">
            Discovering new places, cultures, and hidden gems.
          </p>
        </motion.div>

        {/* Cooking Card */}
        <motion.div
          className="hobby-card relative p-6 rounded-lg bg-gradient-to-b from-gray-800 to-black border border-transparent hover:border-red-500 hover:shadow-lg hover:scale-105 transition-all duration-500"
          whileHover={{ y: -10 }}
        >
          <h3 className="text-2xl font-bold mb-4 text-gradient bg-gradient-to-r from-red-500 to-yellow-500 bg-clip-text text-transparent">
            Cooking
          </h3>
          <p className="text-lg text-gray-400">
            Experimenting with flavors to create delightful dishes.
          </p>
        </motion.div>

        {/* AI Tools Card */}
        <motion.div
          className="hobby-card relative p-6 rounded-lg bg-gradient-to-b from-gray-800 to-black border border-transparent hover:border-purple-500 hover:shadow-lg hover:scale-105 transition-all duration-500"
          whileHover={{ y: -10 }}
        >
          <h3 className="text-2xl font-bold mb-4 text-gradient bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
            Exploring AI Tools
          </h3>
          <p className="text-lg text-gray-400">
            Staying updated with the latest AI technologies and experimenting with tools like ChatGPT, Midjourney, and more.
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Hobbies;
