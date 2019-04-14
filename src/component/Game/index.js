import React, { Component } from 'react';
//import * as jobTypes from '../App/const/JobTypes';
import * as TimeStatus from './const/TimeStatus';
import ShowEachJob from './ShowEachJob';

/*
 * 게임 시작 시 직업 공개 밤부터 시작됨
 * 
 *
 */
class Game extends Component {
	state = {
		date : 1,
		dayStatus : TimeStatus.DAYTIME,
		players : this.props.players,
	}

	// 다음으로 이동 낮->밤, 밤->낮 + 1day
	nextStep = () => {
		if(this.state.dayStatus === TimeStatus.DAYTIME){
			this.setState({
				dayStatus : TimeStatus.NIGHTTIME
			})
		}else if(this.state.dayStatus === TimeStatus.NIGHTTIME){
			this.setState({
				dayStatus : TimeStatus.DAYTIME,
				date : this.state.date + 1
			})
		}else{
			// ERROR
			console.err("nextStep Error - 01");
		}
	}

	render() {
		let component
		// First Daytime : 직업공개 시간
		if(this.state.date === 1 && this.state.dayStatus === TimeStatus.DAYTIME) {
			component = <ShowEachJob players={this.state.players} nextStep={this.nextStep}/>
		}else{
			// 게임이 끝났는지 확인
			if(this.state.dayStatus === TimeStatus.DAYTIME) {
				component = <>"DAY"</>
			}else if(this.state.dayStatus === TimeStatus.NIGHTTIME) {
				component = <>"NIGHT"</> 
			}
		}
		return component
	}
}
export default Game;
