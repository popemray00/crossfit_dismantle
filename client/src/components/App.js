import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import NavBar from '../components/Navbar';
import Home from '../components/Home';
import WodContainer from '../components/WodContainer';
import MomStrong from '../components/MomStrong';
import Schedule from '../components/Schedule';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee, faDumbbell, faQuoteLeft, faQuoteRight} from '@fortawesome/free-solid-svg-icons'

library.add(fab, faCheckSquare, faCoffee, faDumbbell, faQuoteLeft, faQuoteRight)

class App extends Component {
  render() {
    return (
      <Router>
        <div className="app">
            <Route exact path="/" component={Home} />
            <Route exact path="/schedule" component={Schedule} />
            <Route exact path="/wod" component={WodContainer} />
            <Route exact path="/momstrong" component={MomStrong} />
            <NavBar />
        </div>
      </Router>
    );
  }
}

export default App;
