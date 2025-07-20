import { motion } from "framer-motion";
import { FaUserAlt, FaCode, FaChalkboardTeacher } from "react-icons/fa";

const About = () => {
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
      id="about"
      className="py-20 px-8 bg-gray-900 text-white"
      initial="hidden"
      animate="show"
      variants={containerVariants}
    >
      {/* About Me Section */}
      <h2 className="text-4xl font-heading font-bold text-center mb-8 text-cyan-400">
        About Me
      </h2>
      <div className="max-w-4xl mx-auto">
        <motion.p
          className="text-lg leading-relaxed text-gray-300"
          variants={itemVariants}
        >
          I’m a recent Computer Science Engineering graduate (2025) passionate about building impactful digital experiences. With hands-on skills in Full Stack Development, C++, SQL, and Graphic Design, I’ve developed production-ready applications and led WordPress-based projects. As the head of my college's tech community, I’ve enjoyed leading initiatives, mentoring peers, and collaborating with creative teams. I'm excited to keep learning and contribute to forward-thinking development teams.
        </motion.p>
      </div>

      {/* My Journey Section */}
      <div className="max-w-4xl mx-auto mt-12">
        <motion.h2
          className="text-4xl font-heading font-bold text-center mb-8 text-cyan-400"
          variants={itemVariants}
        >
          My Journey
        </motion.h2>
        <motion.p
          className="text-lg leading-relaxed text-gray-300"
          variants={itemVariants}
        >
          My journey began with a curiosity about how technology powers the world. This led me to pursue Computer Science and take on various leadership roles — including heading Codeluster, my college’s tech community — and co-founding a web development service. Along the way, I’ve built real-world projects, collaborated in hackathons, and completed cloud and AI certifications. I’m excited to grow further in this ever-evolving field.
        </motion.p>
      </div>

      {/* Icons Section */}
      <motion.div
        className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-10 text-center"
        variants={containerVariants}
      >
        <motion.div className="space-y-4" variants={itemVariants}>
          <FaUserAlt className="text-5xl text-cyan-400 mx-auto" />
          <h4 className="text-xl font-semibold">Leadership</h4>
          <p className="text-gray-300">
            Led my college's tech community by organizing events, workshops, and fostering peer collaboration and learning.
          </p>
        </motion.div>

        <motion.div className="space-y-4" variants={itemVariants}>
          <FaCode className="text-5xl text-cyan-400 mx-auto" />
          <h4 className="text-xl font-semibold">Development</h4>
          <p className="text-gray-300">
            Built and deployed modern web applications using React, Node.js, WordPress, and full-stack technologies.
          </p>
        </motion.div>

        <motion.div className="space-y-4" variants={itemVariants}>
          <FaChalkboardTeacher className="text-5xl text-cyan-400 mx-auto" />
          <h4 className="text-xl font-semibold">Teaching & Mentoring</h4>
          <p className="text-gray-300">
            Mentored peers and juniors by sharing technical knowledge, conducting sessions, and supporting project development.
          </p>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default About;
