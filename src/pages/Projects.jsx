import { motion } from "framer-motion";

const Projects = () => {
  const projects = [
    {
      title: "Interactive Portfolio",
      description:
        "A React-based portfolio website with interactive UI and animations using Tailwind CSS and 3D elements.",
      link: "https://deepport-pz55mah2h-deepanshvs-projects.vercel.app",
    },
    {
      title: "HSR Motors Lead Management",
      description:
        "A web application designed to streamline lead tracking and management for a motor company, replacing their spreadsheet-based system.",
      link: "https://www.figma.com/design/kT3o9aq6Z19XlsXYcpl9b0/HSR-Motors-Assignment?m=auto&t=qHiL3msDd4OogSGT-1",
    },
    {
      title: "WordPress Development Service - Codephine",
      description:
        "Unlock the world of coding excellence with Codephine your go-to destination for top-notch tech services and seamless connectivity anytime, anywhere!",
      link: "https://codephine.com/",
    },
    {
      title: "Crowed funding Website",
      description:
        "Crowdfunding platform facilitating individual contributions and project funding.Implemented a user-friendly design for an enhanced user experience",
      link: "https://github.com/Deepanshv/Funding_p",
    },
  ];

  return (
    <motion.section
      id="projects"
      className="py-20 px-8"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <h2 className="text-4xl font-heading font-bold text-center mb-6 text-white">
        Projects
      </h2>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-gray-800 shadow-lg rounded-lg p-6 hover:scale-105 transition-transform"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <h3 className="text-xl font-semibold text-cyan-400">
              {project.title}
            </h3>
            <p className="text-gray-300 mt-2">{project.description}</p>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 mt-4 block underline hover:text-blue-400"
            >
              View Project
            </a>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Projects;
