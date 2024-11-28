import { motion } from "framer-motion";
import webdev from "../images/webdev.png";
import cpp from "../images/cpp.png";
import canva from "../images/canva.png";
import django from "../images/django.png";
import figma from "../images/figma.png";
import pm from "../images/pm.png";
import python from "../images/python.png";
import react from "../images/react.png";
import tailwind from "../images/tailwind.png";
import wordpress from "../images/wordpress.png";
import sql from "../images/sql.png";
const Skills = () => {
  return (
    <motion.section
      id="skills"
      className="py-20 px-8 bg-background text-gray-300"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5, ease: "easeInOut" }}
    >
      <h2 className="text-4xl font-heading font-bold text-center mb-8 text-white">
        Skills
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {/* Skill Items */}
        <motion.div
          className="flex flex-col items-center"
          whileHover={{ scale: 1.1, y: -10 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <img
            src={webdev}
            alt="Web Development"
            className="w-16 h-16 mb-4 transition duration-300 ease-in-out transform hover:scale-110"
          />
          <p className="text-lg font-semibold text-white hover:text-cyan-400 transition duration-300">
            Web Dev.
          </p>
        </motion.div>

        <motion.div
          className="flex flex-col items-center"
          whileHover={{ scale: 1.1, y: -10 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <img
            src={cpp}
            alt="C++"
            className="w-16 h-16 mb-4 transition duration-300 ease-in-out transform hover:scale-110"
          />
          <p className="text-lg font-semibold text-white hover:text-cyan-400 transition duration-300">
            C++
          </p>
        </motion.div>

        <motion.div
          className="flex flex-col items-center"
          whileHover={{ scale: 1.1, y: -10 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <img
            src={wordpress}
            alt="WordPress"
            className="w-16 h-16 mb-4 transition duration-300 ease-in-out transform hover:scale-110"
          />
          <p className="text-lg font-semibold text-white hover:text-cyan-400 transition duration-300">
            WordPress
          </p>
        </motion.div>

        <motion.div
          className="flex flex-col items-center"
          whileHover={{ scale: 1.1, y: -10 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <img
            src={sql}
            alt="SQL"
            className="w-16 h-16 mb-4 transition duration-300 ease-in-out transform hover:scale-110"
          />
          <p className="text-lg font-semibold text-white hover:text-cyan-400 transition duration-300">
            SQL
          </p>
        </motion.div>

        <motion.div
          className="flex flex-col items-center"
          whileHover={{ scale: 1.1, y: -10 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <img
            src={python}
            alt="Python"
            className="w-16 h-16 mb-4 transition duration-300 ease-in-out transform hover:scale-110"
          />
          <p className="text-lg font-semibold text-white hover:text-cyan-400 transition duration-300">
            Python
          </p>
        </motion.div>

        <motion.div
          className="flex flex-col items-center"
          whileHover={{ scale: 1.1, y: -10 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <img
            src={react}
            alt="React.js"
            className="w-16 h-16 mb-4 transition duration-300 ease-in-out transform hover:scale-110"
          />
          <p className="text-lg font-semibold text-white hover:text-cyan-400 transition duration-300">
            React.js
          </p>
        </motion.div>

        <motion.div
          className="flex flex-col items-center"
          whileHover={{ scale: 1.1, y: -10 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <img
            src={django}
            alt="Django"
            className="w-16 h-16 mb-4 transition duration-300 ease-in-out transform hover:scale-110"
          />
          <p className="text-lg font-semibold text-white hover:text-cyan-400 transition duration-300">
            Django
          </p>
        </motion.div>

        <motion.div
          className="flex flex-col items-center"
          whileHover={{ scale: 1.1, y: -10 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <img
            src={figma}
            alt="Figma"
            className="w-16 h-16 mb-4 transition duration-300 ease-in-out transform hover:scale-110"
          />
          <p className="text-lg font-semibold text-white hover:text-cyan-400 transition duration-300">
            Figma
          </p>
        </motion.div>

        <motion.div
          className="flex flex-col items-center"
          whileHover={{ scale: 1.1, y: -10 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <img
            src={canva}
            alt="Canva"
            className="w-16 h-16 mb-4 transition duration-300 ease-in-out transform hover:scale-110"
          />
          <p className="text-lg font-semibold text-white hover:text-cyan-400 transition duration-300">
            Canva
          </p>
        </motion.div>

        <motion.div
          className="flex flex-col items-center"
          whileHover={{ scale: 1.1, y: -10 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <img
            src={pm}
            alt="Project Management"
            className="w-16 h-16 mb-4 transition duration-300 ease-in-out transform hover:scale-110"
          />
          <p className="text-lg font-semibold text-white hover:text-cyan-400 transition duration-300">
            Project Mgmt.
          </p>
        </motion.div>

        <motion.div
          className="flex flex-col items-center"
          whileHover={{ scale: 1.1, y: -10 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <img
            src={tailwind}
            alt="Tailwind CSS"
            className="w-16 h-16 mb-4 transition duration-300 ease-in-out transform hover:scale-110"
          />
          <p className="text-lg font-semibold text-white hover:text-cyan-400 transition duration-300">
            Tailwind
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Skills;
