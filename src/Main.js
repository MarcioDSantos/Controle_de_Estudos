import React, {Component} from 'react';
import './App.css';
import Home from './components/home/home';
import About from './components/about/about';
import Contact from './components/contact/contact';
import Forms from './components/forms/forms';


function Main() {
  return (
    <>
      <Home />
      <About />
      <Contact />
      <Forms />
    </>
  );
}


export default Main;
