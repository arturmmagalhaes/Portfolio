import React from 'react';
import './App.css';
import Header from './components/header/HeaderIndex';
import Introduction from './components/introduction/IntrodutionIndex';
import About from './components/about/AboutIndex';
import Skill from './components/skill/SkillIndex';
import Education from './components/education/EducationIndex';

function App() {
  return (
    <>
      <Header />
      <Introduction />
      <About />
      <Skill />
      <Education />
    </>
  );
}

export default App;
