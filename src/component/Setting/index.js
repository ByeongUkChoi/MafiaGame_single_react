import React, { Component } from 'react';

class Setting extends Component {
	// state를 넘겨받을경우
	//state = {
	//	jobs : this.props.jobs
	//}
	state = {
		userCnt : this.props.users.length,
		users : this.props.users,
		jobs : this.props.jobs
	}
	setUserCnt = (cnt) => {
		let resultCnt = this.state.userCnt + cnt;
		if(resultCnt >= 0) {
			this.setState({
				userCnt : resultCnt
			})
		}
	}

	render() {
		return(
			<>
			<button onClick={() => this.setUserCnt(-1)}>-</button>
			<span>{this.state.userCnt}</span>
			<button onClick={() => this.setUserCnt(1)}>+</button>
			<br/>
			{this.setInputUsers(this.state.userCnt)}
			<br/>
			<button onClick={() => this.props.setPage('main')}>뒤로</button>
			</>
		);
	}
}
export default Setting;
