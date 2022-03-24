import React, {Component} from 'react';
import './App.css';
import Home from './components/home/home';
import About from './components/about/about';
import Contact from './components/contact/contact';
import Forms from './components/forms/forms';
import Login from './components/login/login';
import Cadastro from './components/cadastro/cadastro';


function Main() {
  return (
    <>
      <Cadastro />
      {/* <About />
      <Contact />
      <Forms /> */}
    </>
  );
}


export default Main;
