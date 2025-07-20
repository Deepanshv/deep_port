import { motion } from "framer-motion";
import { FaGraduationCap, FaSchool, FaUniversity } from "react-icons/fa";

const Education = () => {
  const educationData = [
    {
      institution: "Shri Ram Institute of Technology, Jabalpur",
      degree: "B.Tech in Computer Science",
      duration: "2021 - 2025",
      description:
        "Pursuing a degree in Computer Science with a current CGPA of 7.86. Active participant in coding competitions and the Head of the Codeluster tech community.",
      icon: <FaUniversity size={30} />,
    },
    {
      institution: "Senior Secondary School",
      degree: "Higher Secondary Education",
      duration: "2020 - 2021",
      description:
        "Top-performing student in Science stream with a focus on Mathematics and Computer Science. Scored 94.2% in Class 12th.",
      icon: <FaSchool size={30} />,
    },
    {
      institution: "Secondary School",
      degree: "High School Education",
      duration: "2018 - 2019",
      description:
        "Excelled in Science and Mathematics with outstanding academic performance. Scored 94% in Class 10th.",
      icon: <FaSchool size={30} />,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <motion.section
      id="education"
      className="py-20 px-8 bg-gray-900 text-gray-300"
      initial="hidden"
      animate="show"
      variants={containerVariants}
    >
      <h2 className="text-4xl font-heading font-bold text-center mb-12 text-cyan-500/75">
        Education
      </h2>
      <div className="space-y-12 max-w-4xl mx-auto">
        {educationData.map((edu, index) => (
          <motion.div
            key={index}
            className="flex items-start space-x-6"
            variants={itemVariants}
          >
            <div className="flex-shrink-0 text-cyan-500">{edu.icon}</div>

            <div>
              <h3 className="text-xl font-semibold text-cyan-400">
                {edu.institution}
              </h3>
              <p className="text-lg mt-1 text-gray-300">
                <span className="font-semibold">{edu.degree}</span> — {edu.duration}
              </p>
              <p className="text-gray-400 mt-3">{edu.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Education;
