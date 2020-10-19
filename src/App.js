import React from 'react';
import './App.css';
import Header from './components/header/HeaderIndex';
import Introduction from './components/introduction/IntrodutionIndex';
import About from './components/about/AboutIndex';
import Skill from './components/skill/SkillIndex';
import Education from './components/education/EducationIndex';
import Projects from './components/projects/ProjectsIndex';
import Contact from './components/contact/Contactindex';

function App() {
  return (
    <>
      <Header />
      <Introduction />
      <About />
      <Skill />
      <Education />
      <Projects />
      <Contact />
    </>
  );
}

export default App;
