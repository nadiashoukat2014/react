import React, { Component } from 'react';
import './Intro.css';

class Intro extends Component {
  // constructor(props){
    // super(props);
    // this.state = {};
  // }

  // componentWillMount(){}
  // componentDidMount(){}
  // componentWillUnmount(){}

  // componentWillReceiveProps(){}
  // shouldComponentUpdate(){}
  // componentWillUpdate(){}
  // componentDidUpdate(){}

  render() {
    return (
      <div className="Intro">
        <h1>This is intro</h1>
         <section id="intro" className="clearfix">
    <div className="container">

      <div className="intro-img">
        <img src="img/intro-img.svg" alt="" className="img-fluid" />
      </div>

      <div className="intro-info">
        <h2>We provide<br /><span>solutions</span>for your business!</h2>
        <div>
          <a href="#about" className="btn-get-started scrollto">Get Started</a>
          <a href="#services" className="btn-services scrollto" >Our Services</a>
        </div>
      </div>

    </div>
  </section>
      </div>
    );
  }
}

export default Intro;