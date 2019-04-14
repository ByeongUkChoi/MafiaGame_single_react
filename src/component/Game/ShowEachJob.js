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

	showJob = (e) => {
		console.log(e.target);
	}
	nextPlayer = () => {
	}

	render() {
		return (
			<>
			<span>{this.state.players[this.state.idx].user}</span>
			<br/>
			<button onClick={this.showJob}>직업 확인</button>
			<span></span>

			<br/><br/>
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
