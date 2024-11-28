import { motion } from "framer-motion";
import linkedin from "../images/linkedin.png";
import github from "../images/github.png";
import instagram from "../images/instagram.png";
import gmail from "../images/gmail.png";

const Footer = () => {
  return (
    <motion.footer
      className="py-16 px-8 bg-gradient-to-t from-blue-900 to-transparent text-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>{" "}
      {/* Background Blur Effect */}
      <div className="relative z-10 text-center space-y-6">
        <p className="text-2xl font-semibold">Let's Connect!</p>
        <div className="flex justify-center space-x-8">
          <a
            href="https://www.linkedin.com/in/deepansh-vishwakarma-6b0337235/"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center"
          >
            <img
              src={linkedin}
              alt="LinkedIn"
              className="w-10 h-10 mb-2 transition-transform duration-300 group-hover:scale-125 group-hover:text-blue-400"
            />
            <span className="text-lg group-hover:text-blue-400">LinkedIn</span>
          </a>
          <a
            href="https://github.com/Deepanshv"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center"
          >
            <img
              src={github}
              alt="GitHub"
              className="w-10 h-10 mb-2 transition-transform duration-300 group-hover:scale-125 group-hover:text-gray-300"
            />
            <span className="text-lg group-hover:text-gray-300">GitHub</span>
          </a>
          <a
            href="https://www.instagram.com/deep_deepansh_vishwakarma/"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center"
          >
            <img
              src={instagram}
              alt="Instagram"
              className="w-10 h-10 mb-2 transition-transform duration-300 group-hover:scale-125 group-hover:text-gray-300"
            />
            <span className="text-lg group-hover:text-gray-300">Instagram</span>
          </a>
          <a
            href="mailto:deepanshvishwakarma123@gmail.com?subject=Hello&body=Hi%20Deepansh,%20I%20hope%20this%20email%20finds%20you%20well."
            className="group flex flex-col items-center"
          >
            <img
              src={gmail}
              alt="Gmail"
              className="w-10 h-10 mb-2 transition-transform duration-300 group-hover:scale-125"
            />
            <span className="text-lg group-hover:text-red-400">Gmail</span>
          </a>
        </div>
        <p className="mt-8 text-sm opacity-80">
          © 2024 Deepansh Vishwakarma. All Rights Reserved.
        </p>
      </div>
    </motion.footer>
  );
};

export default Footer;
