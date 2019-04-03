import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import NavBar from '../components/Navbar';
import Home from '../components/Home';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee} from '@fortawesome/free-solid-svg-icons'

library.add(fab, faCheckSquare, faCoffee)

class App extends Component {
  render() {
    return (
      <Router>
        <div className="app">
          <NavBar />
            <Route exact path="/" component={Home} />
        </div>
      </Router>
    );
  }
}

export default App;
