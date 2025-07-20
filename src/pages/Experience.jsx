import { motion } from "framer-motion";
import { FaLaptopCode, FaPaintBrush, FaSearch, FaLock } from "react-icons/fa";

const Experience = () => {
  const experienceItems = [
    {
      title: "Full Stack Developer Intern | Levent Analytics",
      date: "July 2025 – Present",
      description:
        "Building scalable full-stack features using React.js, Node.js, and Firebase. Enhancing user experience and working closely with the analytics team to develop real-time dashboards.",
      tasks: [
        {
          text: "Developed reusable React components styled with Tailwind CSS.",
          icon: <FaLaptopCode size={24} />,
        },
        {
          text: "Integrated Firebase for authentication and data management.",
          icon: <FaLock size={24} />,
        },
        {
          text: "Collaborated on real-time dashboards for analytics insights.",
          icon: <FaSearch size={24} />,
        },
      ],
    },
    {
      title: "Web Developer Intern | Shri Ram Institute of Technology, Jabalpur",
      date: "June 2024 – October 2024",
      description:
        "Designed and developed WordPress websites for college events and tech fests. Focused on responsiveness, SEO, and user-friendly interfaces.",
      tasks: [
        {
          text: "Created responsive event websites using Elementor and WordPress.",
          icon: <FaPaintBrush size={24} />,
        },
        {
          text: "Integrated essential plugins and optimized content structure.",
          icon: <FaSearch size={24} />,
        },
        {
          text: "Maintained security and performance through regular updates.",
          icon: <FaLock size={24} />,
        },
      ],
    },
    {
      title: "Tulip Intern | Swachh Bharat Mitra Program, Jabalpur Smart City",
      date: "Feb 2024 – April 2024",
      description:
        "Assisted in digital reporting, data visualization, and tech-based awareness campaigns for the Jabalpur Smart City under the Swachh Bharat Mission.",
      tasks: [
        {
          text: "Conducted surveys and compiled sanitation feedback reports digitally.",
          icon: <FaLaptopCode size={24} />,
        },
        {
          text: "Designed public awareness materials to support campaign outreach.",
          icon: <FaPaintBrush size={24} />,
        },
        {
          text: "Contributed to Smart City documentation and performance metrics.",
          icon: <FaSearch size={24} />,
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
      className="py-20 px-8 bg-gray-900 text-white"
      initial="hidden"
      animate="show"
      variants={containerVariants}
    >
      <h2 className="text-4xl font-heading font-bold text-center mb-12 text-cyan-400">
        Experience
      </h2>
      <div className="space-y-10 max-w-4xl mx-auto">
        {experienceItems.map((exp, index) => (
          <motion.div key={index} variants={itemVariants}>
            <h3 className="text-2xl font-semibold text-cyan-300">
              {exp.title}
            </h3>
            <p className="text-md text-gray-400 italic">{exp.date}</p>
            <p className="mt-4 text-lg text-gray-300">{exp.description}</p>
            <ul className="mt-4 list-disc pl-6 space-y-3">
              {exp.tasks.map((task, idx) => (
                <li key={idx} className="flex items-center text-gray-400">
                  <span className="mr-3 text-cyan-400">{task.icon}</span>
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
