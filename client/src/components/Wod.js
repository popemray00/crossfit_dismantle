import React, { Component } from 'react';
import './WodContainer.css'

class Wod extends Component {
	handleClick = () => { this.props.onClick(this.props.wod.id) }

	handleDelete = () => { this.props.onDelete(this.props.wod.id) }

	render () {
		return(
		  <div className="tile">
		  	<span className="deleteButton" onClick={this.handleDelete}>x</span>
		    <h4>{this.props.wod.title}</h4>
		    <p>{this.props.wod.date}</p>
        <p>{this.props.wod.workout}</p>
        <p id="Edit" onClick={this.handleClick}>.</p>
		  </div>
		)
	}
}

export default Wod
