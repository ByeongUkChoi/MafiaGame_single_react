import React, { Component } from 'react';

class Setting extends Component {
	// state를 넘겨받을경우
	//state = {
	//	jobs : this.props.jobs
	//}
	state = {
		// defualt 4
		userCnt : this.props.users.length ? this.props.users.length : 4,
	}
	setUserCnt = (cnt) => {
		let resultCnt = this.state.userCnt + cnt;
		if(resultCnt >= 0) {
			this.setState({
				userCnt : resultCnt
			})
		}
	}
	testInputOnChange = (idx, name) => {
		console.log(name);
	}

	render() {
		return(
			<>
			<button onClick={() => this.setUserCnt(-1)}>-</button>
			<span>{this.state.userCnt}</span>
			<button onClick={() => this.setUserCnt(1)}>+</button>
			<br/>
			{Array.from({ length: this.state.userCnt }, (v, k) => k).map((i) => (
				<input key={i} value={this.props.users[i]} onChange={(e) => this.testInputOnChange(i, e.target.value)} />
			))}
			<br/>
			<button onClick={() => this.props.setPage('main')}>뒤로</button>
			</>
		);
	}
}
export default Setting;
