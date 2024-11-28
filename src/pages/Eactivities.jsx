import { motion } from "framer-motion";

const Eactivities = () => {
  return (
    <motion.section
      id="extracurricular"
      className="py-20 px-8 bg-black text-white relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h2 className="text-4xl font-heading font-bold text-center mb-12">
        Extracurricular Activities
      </h2>

      {/* Activities Wrapper */}
      <div className="relative grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
        {/* Decorative Blurs */}
        <div className="absolute -top-10 -left-10 w-40 h-40 bg-cyan-500 opacity-20 rounded-full filter blur-3xl" />
        <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-pink-500 opacity-20 rounded-full filter blur-3xl" />

        {/* Activity Cards */}
        {[
          {
            title: "Codeluster Community Leader",
            description:
              "As Head of Codeluster, I cultivated an innovative environment for tech enthusiasts by organizing hackathons, workshops, and collaborative events.",
            gradient: "from-cyan-500 to-blue-500",
            delay: 0.2,
          },
          {
            title: "Entrepreneurship Awareness Drive",
            description:
              "Organized a drive promoting entrepreneurship in collaboration with IIT Kharagpur, inspiring students to explore business opportunities.",
            gradient: "from-purple-500 to-pink-500",
            delay: 0.4,
          },
          {
            title: "Techfest Aavhaan 2024 Coordinator",
            description:
              "Supported Techfest Aavhaan 2024, a premier student-run technology festival, as a student coordinator for Shri Ram Group, Jabalpur.",
            gradient: "from-green-500 to-yellow-500",
            delay: 0.6,
          },
          {
            title: "Published Research Paper",
            description:
              "Published a paper on a multilingual fake news detection model, leveraging NLP techniques to achieve exceptional accuracy.",
            gradient: "from-indigo-500 to-purple-500",
            delay: 0.8,
          },
        ].map((activity, index) => (
          <motion.div
            key={index}
            className="relative bg-gray-900 bg-opacity-90 p-6 rounded-xl shadow-lg hover:shadow-2xl transform hover:scale-105 hover:rotate-1 transition-all duration-500 ease-out group"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: activity.delay }}
          >
            {/* Gradient Top Border */}
            <div
              className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${activity.gradient} rounded-t-xl`}
            />
            {/* Card Content */}
            <h3 className="text-2xl font-semibold mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-purple-500 group-hover:bg-clip-text transition-colors duration-500">
              {activity.title}
            </h3>
            <p className="text-lg text-gray-300 group-hover:text-gray-200 transition-colors duration-500">
              {activity.description}
            </p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Eactivities;
