import React, { Component } from 'react';
//import * as jobTypes from '../App/const/JobTypes';

class ShowEachJob extends Component {

	startGame = () => {
		this.props.nextStep()
	}

	render() {
		return (
			<div>
				<button onClick={this.startGame}>다음날</button>
				<span></span>
				"showEachJob"
			</div>
		)
	}
}
export default ShowEachJob;
