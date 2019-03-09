import React, { Component } from 'react';

class Setting extends Component {
	state = {
		// defualt 4
		users : this.props.users.length ? this.props.users : ["","","",""],
		jobs : this.props.jobs
	}
	// +,- 버튼 클릭, user추가, 제거
	addUser = () => {this.setState({users: this.state.users.concat("")})}
	removeUser = () => {this.setState({ users: this.state.users.slice(0, -1)})}
	// 유저 이름 입력 시
	OnChangeUsers = (idx, name) => {
		this.setState({users: this.state.users.map((x,i) => idx === i ? name : x)})
	}

	render() {
		console.log(this.state.jobs);
		return(
			<>
			<button onClick={this.removeUser}>-</button>
			<span>{this.state.users.length}</span>
			<button onClick={this.addUser}>+</button>
			<br/>
			{Array.from({ length: this.state.users.length }, (v, k) => k).map((i) => (
				<input key={i} value={this.state.users[i]} onChange={(e) => this.OnChangeUsers(i, e.target.value)} />
			))}
			<br/>
			<br/><br/>
			<button onClick={() => this.props.setPage('main')}>뒤로</button>
			</>
		);
	}
}
export default Setting;
