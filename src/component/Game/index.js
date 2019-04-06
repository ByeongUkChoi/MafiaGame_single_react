import React, { Component } from 'react';
import * as jobTypes from '../App/const/JobTypes';
import * as TimeStatus from './const/TimeStatus';

class Game extends Component {
	state = {
		date : 1,
		dayStatus : TimeStatus.DAYTIME,
		players : this.props.players,
	}

	render() {
		return (
			<div>
			<span></span>
			"asdf"
			</div>
		)
	}
}
export default Game;
