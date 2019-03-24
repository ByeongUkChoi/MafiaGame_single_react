import React, { Component } from 'react';
//import logo from './logo.svg';
//import './index.css';
import Setting from '../Setting';
import Game from '../Game';

import {setPlayers} from './logic/setPlayers';

class App extends Component {
	state = {
		page : 'main',
		users : [],
		jobs : {
			MAFIA : {
				min : 1,
				max : 1,
			},
			POLICE : {
				min : 0,
				max : 0,
			},
			DOCTOR : {
				min : 0,
				max : 0,
			},
			CITIZEN : {
				min : 1,
				max : 1,
			}
		}
	}
	setPage = (page) => {
		//const page = this.state.page;
		//const { page } = this.state;
		this.setState({
			//page : page
			page
		})
	}

	// setting에서 user,jobs 설정
	setUsersJobs = (users,jobs) => {this.setState({users, jobs})}

	// max job cnt > users cnt
	jobCntCheck = (users, jobs) => {
		let maxJobCnt = 0
		Object.keys(jobs).forEach(job => maxJobCnt += jobs[job].max)
		return users.length && users.length <= maxJobCnt ? true : false;
	}

	render() {
		switch(this.state.page) {
			case 'setting':
				return <Setting users={this.state.users} jobs={this.state.jobs} setPage={this.setPage} setUsersJobs={this.setUsersJobs} jobCntCheck={this.jobCntCheck} />
			case 'play':
				return <Game players={setPlayers(this.state.users, this.state.jobs)} />
			default:
				return (
					<>
					<button onClick={() => this.setPage('setting')}>게임설정</button>
					{this.jobCntCheck(this.state.users, this.state.jobs) &&
					<button onClick={() => this.setPage('play')}>게임시작</button>
					}
					</>
				)
		}
	}
}
export default App;
