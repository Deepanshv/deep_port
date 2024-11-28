import { motion } from "framer-motion";
import { FaLaptopCode, FaPaintBrush, FaSearch, FaLock } from "react-icons/fa";

const Experience = () => {
  const experienceItems = [
    {
      title: "Web Developer Intern | SRIT JBP",
      date: "June 2024 - October 2024",
      description:
        "Building customized, responsive websites tailored to client requirements using WordPress, improving user experience and ensuring seamless integration of essential features.",
      tasks: [
        {
          text: "Developing dynamic, responsive websites on WordPress.",
          icon: <FaLaptopCode size={24} />,
        },
        {
          text: "Personalizing themes and integrating plugins for enhanced functionality.",
          icon: <FaPaintBrush size={24} />,
        },
        {
          text: "Faster website, better SEO, higher rankings..",
          icon: <FaSearch size={24} />,
        },
        {
          text: "Secure website: Regular updates for performance and protection.",
          icon: <FaLock size={24} />,
        },
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.3 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <motion.section
      id="experience"
      className="py-20 px-8 bg-primary-blue text-white"
      initial="hidden"
      animate="show"
      variants={containerVariants}
    >
      <h2 className="text-4xl font-heading font-bold text-center mb-8 text-cyan-500/75 text-white">
        Experience
      </h2>
      <div className="space-y-10">
        {experienceItems.map((exp, index) => (
          <motion.div key={index} variants={itemVariants}>
            <h3 className="text-2xl font-semibold text-cyan-400">
              {exp.title}
            </h3>
            <p className="text-lg text-accent-green text-cyan-500/75">
              {exp.date}
            </p>
            <p className="mt-4 text-lg text-gray-300">{exp.description}</p>
            <ul className="mt-4 list-disc pl-6 space-y-3">
              {exp.tasks.map((task, idx) => (
                <li key={idx} className="flex items-center text-gray-400">
                  <span className="mr-3 text-cyan-500">{task.icon}</span>
                  {task.text}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Experience;
