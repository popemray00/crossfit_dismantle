import React from 'react';
import './Home.css';

class Home extends React.Component {
  render() {
    return (
      <div>
        <div className="Header">
          <h1> Michael Pope </h1>
        </div>

        <div className="About">
          <div className="AboutImg">
            <img className="HomePic"
            src = "images/homepic.jpg"
            alt = "Michael"
            />
          </div>
          <div className="AboutMe">
            <h2> About Me </h2>
            <p></p>
          </div>
        </div>
      </div>
    );
  }
}

  export default Home;
