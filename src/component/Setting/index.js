import React, { Component } from 'react';
import * as jobTypes from '../App/const/JobTypes';

class Setting extends Component {
	state = {
		// defualt 4
		users : this.props.users.length ? this.props.users : ["","","",""],
		jobs : this.props.jobs
	}
	// user추가, 제거. +,- 버튼 클릭
	addUser = () => {this.setState({users: this.state.users.concat("")})}
	removeUser = () => {this.setState({ users: this.state.users.slice(0, -1)})}
	// 유저 이름 입력 시
	OnChangeUsers = (idx, name) => {this.setState({users: this.state.users.map((x,i) => idx === i ? name : x)})}

	// jobs
	// min -
	minusMinJob = (jobType) => {
		const job = this.state.jobs[jobType];
		if(job.min > 0){
			const tmpJob = {};
			tmpJob[jobType] = {
				min: job.min - 1,
				max: job.max
			};
			this.setState({jobs: {...this.state.jobs, ...tmpJob}})
		}
	}
	// min +
	plusMinJob = (jobType) => {
		const job = this.state.jobs[jobType];
		const tmpJob = {};
		tmpJob[jobType] = {
			min: job.min + 1,
			max: job.max === job.min ? job.max + 1 : job.max,
		};
		this.setState({jobs: {...this.state.jobs, ...tmpJob}})
	}
	// max -
	minusMaxJob = (jobType) => {
		const job = this.state.jobs[jobType];
		if(job.max > 0){
			const tmpJob = {};
			tmpJob[jobType] = {
				min: job.min === job.max ? job.min - 1 : job.min,
				max: job.max -1
			};
			this.setState({jobs: {...this.state.jobs, ...tmpJob}})
		}
	}
	// max +
	plusMaxJob = (jobType) => {
		const job = this.state.jobs[jobType];
		const tmpJob = {};
		tmpJob[jobType] = {
			min: job.min,
			max: job.max + 1
		};
		this.setState({jobs: {...this.state.jobs, ...tmpJob}})
	}

	// max job cnt > users cnt
	jobCntCheck = () => {
	}

	startGame = () => {
		this.props.setUsersJobs(this.state.users.map((name, idx) => (!name ? "Player"+(idx+1) : name)), this.state.jobs)
		this.props.setPage('play')
	}

	render() {
		//const jobArr = [...Object.keys(jobTypes)];
		const jobArr = Object.keys(jobTypes);
		return(
			<>
			<button onClick={this.removeUser}>-</button>
			<span>{this.state.users.length}</span>
			<button onClick={this.addUser}>+</button>
			<br/>
			{Array.from({ length: this.state.users.length }, (v, k) => k).map((i) => (
				<div key={i}>
				<input value={this.state.users[i]} placeholder={`Player${i+1}`} onChange={(e) => this.OnChangeUsers(i, e.target.value)} />
				</div>
			))}
			<br/>
			{jobArr.map((job) => (
				<div key={job}>
				<span>{job}</span>
				<button name={job} onClick={(e) => this.minusMinJob(e.target.name)}>-</button>
				<input value={this.state.jobs[job].min} readOnly />
				<button name={job} onClick={(e) => this.plusMinJob(e.target.name)}>+</button>

				<button name={job} onClick={(e) => this.minusMaxJob(e.target.name)}>-</button>
				<input value={this.state.jobs[job].max} readOnly />
				<button name={job} onClick={(e) => this.plusMaxJob(e.target.name)}>+</button>
				</div>
			))}
			<br/><br/>
			<button onClick={() => this.props.setPage('main')}>뒤로</button>
			<button onClick={this.startGame}>게임시작</button>
			</>
		);
	}
}
export default Setting;
