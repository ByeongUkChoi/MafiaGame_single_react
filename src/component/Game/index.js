import React, { Component } from 'react';
import * as jobTypes from '../App/const/JobTypes';

class Game extends Component {
	state = {
		players : this.props.players,
	}

	render() {
		console.log(this.props.players)
		return (
			<div>
			<span>{this.props.players}</span>
			"asdf"
			</div>
		)
	}
}
export default Game;
