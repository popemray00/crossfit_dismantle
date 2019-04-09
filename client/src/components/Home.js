import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Carousel from 'react-bootstrap/Carousel'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './Home.css'





class Home extends React.Component {
  render() {
    return (
      <div>

        <div className="Container">
          <Jumbotron className="Jumbo">
            <h1>CrossFit <FontAwesomeIcon icon="dumbbell" className="Dumbbell"/> Dismantle</h1>
          </Jumbotron>
        </div>

        <div className="Home-Header">
          <h2>Dismantle --- <p>To take something apart or down.</p></h2>
            <div className="quote">
              <p><FontAwesomeIcon icon="quote-left" className="QuoteLeft" size="2x"/>
              When I think dismantle I automatically think of mindsets and bad habits. In order to get breakthrough you have to dismantle
              old thought patterns and habits in life. That isn’t always easy. Your going to feel resistance but you push through anyways.
              That’s where true breakthrough comes. Not in what’s comfortable
              but getting uncomfortable, getting raw and finding grit and pushing past your norm.
              <FontAwesomeIcon icon="quote-right" className="Quoteright" size="2x"/></p>
            </div>
        </div>


          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="images/image1.jpg"
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="images/image2.jpg"
                alt="Second slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="images/image3.jpg"
                alt="Third slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="images/image4.jpg"
                alt="Fourth slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="images/image5.jpg"
                alt="Fifth slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="images/image6.jpg"
                alt="Sixth slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="images/image7.jpg"
                alt="Seventh slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="images/image12.jpg"
                alt="Eight slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="images/image13.jpg"
                alt="Ninth slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="images/gma.jpg"
                alt="Tenth slide"
              />
            </Carousel.Item>
            </Carousel>
            <br/>
            <br/>
            <div className="Container">
              <h1>About Us...</h1>
            </div>
    </div>
    );
  }
}

export default Home;
