import React, { Component } from 'react';
//import logo from './logo.svg';
//import './index.css';
import Setting from '../Setting';

class App extends Component {
	state = {
		page : 'main',
		users : [],
		jobs : []
	}
	setPage = (page) => {
		//const page = this.state.page;
		//const { page } = this.state;
		this.setState({
			//page : page
			page
		})
	}
	render() {
		switch(this.state.page) {
			case 'setting':
				return <Setting users={this.state.users} setPage={this.setPage}/>
			case 'play':
				// state를 넘길경우
				//return <Game jobs={this.state.jobs}/>;
			default:
				return (
					<>
					<button onClick={() => this.setPage('setting')}>게임설정</button>
					<button onClick={() => this.setPage('play')}>게임시작</button>
					</>
				)
		}
	}
}

export default App;
