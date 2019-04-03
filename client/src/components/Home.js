import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import './Home.css'




class Home extends React.Component {
  render() {
    return (
      <div className="Container">
        <Jumbotron>
          <h1>Crossfit Dismantle!</h1>
          <p>
            Where dreams become reality.
          </p>
        </Jumbotron>
      </div>
    );
  }
}

export default Home;
