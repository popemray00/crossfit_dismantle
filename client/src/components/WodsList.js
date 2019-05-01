import React, { Component } from 'react'
import axios from 'axios'

class WodForm extends Component {
	constructor(props) {
		super(props)
		  this.state = {
        title: this.props.title,
        date: this.props.wod.date,
        workout: this.props.workout,
  	   }
	 }

  handleInput = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  handleBlur = () => {
    const wod = {title: this.state.title, date: this.state.date, workout: this.state.workout, workout1: this.state.workout1, workout2: this.state.workout2, workout3: this.state.workout3, workout4: this.state.workout4, workout5: this.state.workout5, workout6: this.state.workout6, workout7: this.state.workout7 }
      axios.put(
        `http://localhost:5000/api/v1/wods/${this.props.wod.id}`,
        {wods: wod}
      )
      .then(response => {
        console.log(response)
        this.props.updateWod(response.data)
      })
      .catch(error => console.log(error))
  }

  render() {
    return (
      <div className="tile">
      	<form onBlur={this.handleBlur} >
					<input className='input' type="text" name="title" placeholder='Enter a Title'
            value={this.state.title} onChange={this.handleInput}
            ref={this.props.titleRef} />
          <input className='input' type="date" placeholder='Enter Date'
            value={this.state.date} onChange={this.handleInput}></input>
          <textarea className='input' name="workout" placeholder='Enter Workout'
            value={this.state.workout} onChange={this.handleInput}></textarea>
      	</form>
      </div>
    );
  }
}

export default WodForm
