import React from 'react';
import './Schedule.css'



 class Schedule extends React.Component {
   render () {
    return (
      <div>
        <div className="Top">
          <h1>Dismantle Days</h1>
        </div>

        <div className="Hours">
          <h1 className="Hours-Title">CrossFit Hours</h1>
          <h1>Monday - Friday</h1>
          <h2>5 AM, 6 AM, 5:30 PM & 6:30 PM</h2>
          <h1>Saturday</h1>
          <h2>10 AM</h2>
        </div>

        <div className="Hours2">
          <h1 className="Hours-Title">Mom Strong</h1>
          <h1>Monday - Friday</h1>
          <h2>9 AM</h2>
        </div>
      </div>
    );
  }
};

export default Schedule;
