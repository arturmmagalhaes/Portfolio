import React from 'react';
import './App.css';
import Header from './components/header/HeaderIndex';
import  Introduction  from './components/introduction/IntrodutionIndex';
import About from './components/about/AboutIndex';
import Skill from './components/skill/SkillIndex';

function App() {
  return (
    <>
      <Header />
      <Introduction />
      <About />
      <Skill />
    </>
  );
}

export default App;
