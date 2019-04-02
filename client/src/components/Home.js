import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button'


class Home extends React.Component {
  render() {
    return (
      <div>
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
