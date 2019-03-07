import React, { Component } from 'react';

class Setting extends Component {
	// state를 넘겨받을경우
	//state = {
	//	jobs : this.props.jobs
	//}
	state = {
		// defualt 4
		userCnt : this.props.users.length ? this.props.users.length : 4,
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
	OnChangeUsers = (idx, name) => {
		// TODO: users를 가져와서 변경한뒤 셋이 안됨
		let users = []
		if(this.state.users.length){
			users = this.state.users.map((x,i) => idx === i ? name : x);
		}else{
			users = [name];
		}
		this.setState({
			users : users 
		})
	}

	render() {
		return(
			<>
			<button onClick={() => this.setUserCnt(-1)}>-</button>
			<span>{this.state.userCnt}</span>
			<button onClick={() => this.setUserCnt(1)}>+</button>
			<br/>
			{Array.from({ length: this.state.userCnt }, (v, k) => k).map((i) => (
				<input key={i} value={this.state.users[i]} onChange={(e) => this.OnChangeUsers(i, e.target.value)} />
			))}
			<br/>
			<button onClick={() => this.props.setPage('main')}>뒤로</button>
			</>
		);
	}
}
export default Setting;
