import { motion } from "framer-motion";

const Achievements = () => {
  return (
    <section id="achievements" className="py-20 px-8 bg-background">
      <h2 className="text-4xl font-heading font-bold text-center text-white mb-12">
        Achievements
      </h2>

      {/* Side-by-Side Achievement Cards */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        {/* Achievement 1 */}
        <motion.div
          className="bg-gradient-to-r from-cyan-500 via-teal-500 to-blue-500 p-8 rounded-lg shadow-lg transform hover:scale-105 hover:shadow-2xl transition duration-500 ease-out flex flex-col justify-center items-center"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <h3 className="text-2xl font-semibold text-white text-center mb-4">
            10th Grade - Block Area Topper
          </h3>
          <p className="text-lg text-gray-200 text-center">
            Secured 1st position in my block area in the 10th-grade exams for
            academic excellence.
          </p>
        </motion.div>

        {/* Achievement 2 */}
        <motion.div
          className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 p-8 rounded-lg shadow-lg transform hover:scale-105 hover:shadow-2xl transition duration-500 ease-out flex flex-col justify-center items-center"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <h3 className="text-2xl font-semibold text-white text-center mb-4">
            College Leadership - Head of Codeluster
          </h3>
          <p className="text-lg text-gray-200 text-center">
            Led my college's tech community, Codeluster, fostering creativity
            and innovation through collaborative tech events.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Achievements;
