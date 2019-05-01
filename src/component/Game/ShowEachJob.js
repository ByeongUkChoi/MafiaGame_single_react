import React, { Component } from 'react';
//import * as jobTypes from '../App/const/JobTypes';

class ShowEachJob extends Component {

	state = {
		idx : 0,
		players : this.props.players,
		showJob : false,
	}

	clickShowJob = () => {
		this.setState({ showJob: true });
	}
	next = () => {
		this.setState({ 
			showJob: false,
			idx: this.state.idx + 1
		});
	}

	startGame = () => {
		this.props.nextStep()
	}

	render() {
		return (
			<>
			<span>{this.state.players[this.state.idx].user}</span>
			<br/>
			{this.state.showJob ? 
				<>
				<span>당신은 {this.state.players[this.state.idx].job} 입니다</span><br/>
				<span>다음 버튼을 누르고 다음 플레이어에게 전달하세요</span>
				<button onClick={this.next}>다음</button>
				</>
				: 
				<button onClick={this.clickShowJob}>직업 확인</button>
			}
			</>
		)
	}
}
export default ShowEachJob;
