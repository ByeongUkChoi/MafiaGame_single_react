import React, { Component } from 'react';
//import * as jobTypes from '../App/const/JobTypes';

class ShowEachJob extends Component {

	state = {
		idx : 0,
		players : this.props.players
	}
	startGame = () => {
		this.props.nextStep()
	}

	render() {
		//console.log(this.state.players);
		return (
			<>
			{this.state.players.map((player, idx) => (
				<span key={idx}>플레이어 : {player.user}<br/></span>
			))}
				<button onClick={this.startGame}>다음날</button>
				<span></span>
				"showEachJob"
			</>
		)
	}
}
export default ShowEachJob;
