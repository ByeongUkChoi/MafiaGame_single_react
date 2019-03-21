import React, { Component } from 'react';

class Game extends Component {

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
