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
          I am a passionate Computer Science undergraduate with a strong drive
          to use technology to create innovative solutions. With skills in Web
          Development, C++, SQL, and Graphic Design, I have hands-on experience
          in building full-stack applications and managing WordPress projects.
          As the head of my college's tech community, I thrive in leadership
          roles and enjoy collaborating with creative minds. I'm always eager to
          take on new challenges, learn new technologies, and contribute to
          dynamic teams where I can make an impact.
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
          My journey in technology began with a curiosity about how things work,
          leading me to study Computer Science. I took on leadership roles,
          including heading my college's tech community, Codeluster, and
          co-founding a web development service. Each experience has helped me
          grow, and I’m excited to keep learning and contributing to new
          projects.
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
            Leading my college's tech community, organizing events, and
            fostering collaboration among creative minds.
          </p>
        </motion.div>

        <motion.div className="space-y-4" variants={itemVariants}>
          <FaCode className="text-5xl text-cyan-400 mx-auto" />
          <h4 className="text-xl font-semibold">Development</h4>
          <p className="text-gray-300">
            Building web applications using modern technologies such as React,
            WordPress, and more.
          </p>
        </motion.div>

        <motion.div className="space-y-4" variants={itemVariants}>
          <FaChalkboardTeacher className="text-5xl text-cyan-400 mx-auto" />
          <h4 className="text-xl font-semibold">Teaching & Mentoring</h4>
          <p className="text-gray-300">
            Sharing my knowledge and experience with peers, mentoring them to
            grow in their technical journeys.
          </p>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default About;
