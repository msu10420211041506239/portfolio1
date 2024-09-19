import React from 'react';
import './App.css';
import { motion } from 'framer-motion';
import Image1 from './Images/Image1.png'
import Image2 from './Images/Image2.png'

function App() {
  return (
    <div className="App">
      <header className="hero">
        <motion.h1 initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
          Hello, I Am Suresh
        </motion.h1>
        <motion.p initial={{ x: -100 }} animate={{ x: 0 }} transition={{ duration: 1 }}>
          A Developer who loves to create
        </motion.p>
        <motion.a href="#projects" className="btn" whileHover={{ scale: 1.1 }} transition={{ duration: 0.3 }}>
          Explore Projects
        </motion.a>
      </header>

      <section className="projects" id="projects">
        <h2>My Projects</h2>
        <div className="projects-grid">
          <motion.div className="project-card" whileHover={{ scale: 1.05 }}>
            <img src={Image1} alt="Weather App" />
            <h3>WeatherApp</h3>
            <a href="https://weatherapp-ten-liard.vercel.app/">App Link</a>
          </motion.div>
          <motion.div className="project-card" whileHover={{ scale: 1.05 }}>
            <img src={Image2} alt="Quiz App" />
            <h3>QuizApp</h3>
            <a href="https://testing-js-8typ.vercel.app/">App Link</a>
          </motion.div>
        </div>
      </section>

      <footer>
        <h3><a href="mailto:suresh1317@gmail.com">suresh1317@gmail.com</a><br />6379225860</h3>
      </footer>
    </div>
  );
}

export default App;
