import React from 'react';
import './Home.css';
import { Parallax } from "react-parallax";

const image1 =
    "https://pixnio.com/free-images/2017/02/25/2017-02-25-06-48-04.jpg"

class Home extends React.Component {
  render() {
    return (
        <div className="styles">
          
          <Parallax bgImage={image1} strength={400}>
            <div style={{ height: 900 }}>
              <div className="textbox">Hair By <span id="name">Aleesa</span></div>
            </div>
          </Parallax>
          
          <div className="quote">
            <h1>"Life is better when you have a good hairstylist"</h1>
          </div>
          
          <div className="mainbody">
            <h1>My Commitment to you!</h1>
            <p>Is to be the best</p>
          </div>
        </div>
    )
  }
}

export default Home