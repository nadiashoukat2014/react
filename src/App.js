
import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header/Header';
import Intro from './components/Intro/Intro';
import Aboutus from './components/Aboutus/Aboutus';
import Servicescomponent from './components/Servicescomponent/Servicescomponent';
import Footercomponent from './components/Footercomponent/Footercomponent';
function App() {
  return (
    <div className="App">
      <Header />
          <Intro />
          <Aboutus />
        <Servicescomponent />
        <Footercomponent />
    </div>
  );
}

export default App;
