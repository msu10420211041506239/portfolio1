import './App.css';
import { motion } from 'framer-motion';
import Image1 from './Images/Image1.png';
import Image2 from './Images/Image2.png';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { faHtml5,faCss3Alt,faJs,faReact } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FaBootstrap } from 'react-icons/fa';
import { RiTailwindCssFill } from 'react-icons/ri'
import { IoLogoVercel } from "react-icons/io5";
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
  <nav>
    <motion.a href="#home" className="btn" whileHover={{ scale: 1.1 }} transition={{ duration: 0.3 }}>
      Home
    </motion.a>
    <motion.a href="#profile" className="btn" whileHover={{ scale: 1.1 }} transition={{ duration: 0.3 }}>
      Profile
    </motion.a>
    <motion.a href="#skills" className="btn" whileHover={{ scale: 1.1 }} transition={{ duration: 0.3 }}>
      Skills
    </motion.a>
    <motion.a href="#projects" className="btn" whileHover={{ scale: 1.1 }} transition={{ duration: 0.3 }}>
      Explore Projects
    </motion.a>
  </nav>
</header>


      <section className="projects" id="projects">
        <h2>My Projects</h2>
        <div className="projects-grid">
          <motion.div className="project-card" whileHover={{ scale: 1.05 }}>
            <img src={Image1} alt="Weather App" />
            <h3>WeatherApp</h3>
            <a href="https://weatherapp-ten-liard.vercel.app/">Show Project</a>
          </motion.div>
          <motion.div className="project-card" whileHover={{ scale: 1.05 }}>
            <img src={Image2} alt="Quiz App" />
            <h3>QuizApp</h3>
            <a href="https://testing-js-8typ.vercel.app/">Show project</a>
          </motion.div>
        </div>
      </section>
      <section id="profile">
        <h2>Welcome to My Portfolio</h2><br></br>
        <p id='pl'>Name:Suresh A</p><br></br>
        <p id='nx'>Degree:Bsc computer science</p><br></br>
        <p id='xz'>Course:Front end developement</p><br></br>
        <p id='bb'>Experience:Entry level</p><br></br>
      </section>
      <section id="skills">
  <h2>My Skills</h2>
  <div className="skills-list">
    <div className="skill-item">
      <FontAwesomeIcon icon={faHtml5} size="3x" color="#E34F26" />
      <p>HTML</p>
    </div>
    <div className="skill-item">
      <FontAwesomeIcon icon={faCss3Alt} size="3x" color="#1572B6" />
      <p>CSS</p>
    </div>
    <div className="skill-item">
      <FontAwesomeIcon icon={faJs} size="3x" color="#F7DF1E" />
      <p>JavaScript</p>
    </div>
    <div className="skill-item">
      <FontAwesomeIcon icon={faReact} size="3x" color="#61DAFB" />
      <p>React</p>
    </div>
    <div className="skill-item">
      <FaBootstrap size={60} color="blue" />
      <p>Bootstrap</p>
    </div>
    <div className="skill-item">
      <RiTailwindCssFill size={60} color="#38B2AC" />
      <p>Tailwind CSS</p>
    </div>
    <div className="skill-item">
      <FaGithub size={60} color="black" />
      <p>GitHub</p>
    </div>
    <div className="skill-item">
      <IoLogoVercel size={60} color="orange" />
      <p>Vercel</p>
    </div>
  </div>
</section>


      <footer>
        <h3>
          <a href="mailto:suresh1317@gmail.com">suresh1317@gmail.com</a><br />6379225860
        </h3>
        <p><a href="https://github.com/msu10420211041506239" title="Html5">Github Profile</a> <FaGithub/></p>
        <p><a href="https://www.linkedin.com/in/suresh-a-55aa11321?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">Linkedin Profile</a>< FaLinkedin id='zoo'/></p>
      </footer>
    </div>
  );
}
export default App;
