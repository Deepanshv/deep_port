import { motion } from "framer-motion";
import bgkk from "../images/herobg.png";

const Hero = () => {
  const bgImg = bgkk ? `url(${bgkk})` : null;

  // Animation variants for smooth transitions
  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } },
  };

  return (
    <motion.section
      className="relative w-full h-screen bg-cover bg-center text-white flex items-center justify-center"
      style={{
        backgroundImage: bgImg,
      }}
      initial={{ opacity: 0, scale: 1.1 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.5, ease: "easeOut" }}
    >
      {/* Gradient overlay to enhance background visibility */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Text and content */}
      <div className="text-center p-8 relative z-10">
        {/* Main Heading with hover effect */}
        <motion.h1
          className="text-5xl font-bold leading-tight mb-4 hover:text-cyan-400 transition duration-300 ease-in-out"
          variants={textVariants}
          initial="hidden"
          animate="visible"
          whileHover={{ scale: 1.05, color: "#00F5D4" }} // Subtle scaling and color change
        >
          {bgImg ? "Hello, I'm Deepansh Vishwakarma" : "Loading..."}
        </motion.h1>

        {/* Subheading with animation */}
        <motion.p
          className="text-xl mb-6"
          variants={textVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.3 }}
        >
          {bgImg
            ? "Passionate about building innovative solutions. Let's create something amazing together."
            : "Please wait while the image is loading..."}
        </motion.p>

        {/* Call-to-action button with glowing effect */}
        {bgImg && (
          <motion.a
            href="#about"
            className="bg-accent-green py-3 px-6 rounded-full text-xl font-semibold text-cyan-600/75 hover:bg-accent-dark transition-all duration-300 transform hover:scale-110 shadow-lg hover:shadow-2xl"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            Learn More About Me
          </motion.a>
        )}
      </div>

      {/* Parallax-like effect on background */}
      <motion.div
        className="absolute inset-0"
        style={{
          backgroundImage: bgImg,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        animate={{ scale: 1.05 }}
        transition={{
          duration: 2,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "reverse",
        }}
      ></motion.div>
    </motion.section>
  );
};

export default Hero;
