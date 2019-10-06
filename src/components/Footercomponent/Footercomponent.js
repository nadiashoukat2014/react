import React, { Component } from 'react';
import './Footercomponent.css';

class Footercomponent extends Component {
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
      <div className="Footercomponent">
        <footer id="footer">
    <div class="footer-top">
        <div className="container">
      <div className="copyright">
        &copy; Copyright <strong>NewBiz</strong>. All Rights Reserved
      </div>
      <div className="credits">
       Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
      </div>
    </div>
</div></footer>
<a href="#" class="back-to-top"><i class="fa fa-chevron-up"></i></a>
      </div>
    );
  }
}

export default Footercomponent;