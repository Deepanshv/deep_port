import React from "react";
import Hero from "./pages/Hero";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Experience from "./pages/Experience";
import Achievements from "./pages/Achievements";
import Eactivities from "./pages/Eactivities";
import Education from "./pages/Education";
import Hobbies from "./pages/Hobbies";
import Projects from "./pages/Projects";
import Footer from "./components/Footer";
import "./App.css";
import "./index.css";
import "./styles/tailwind.css";
import "./styles/customstyle.css";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Main Content */}
      <main className="flex-grow">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Achievements />
        <Eactivities />
        <Hobbies />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
