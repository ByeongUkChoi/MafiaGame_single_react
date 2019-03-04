import React, { Component } from 'react';

class Setting extends Component {
	// state를 넘겨받을경우
	//state = {
	//	jobs : this.props.jobs
	//}

	render() {
		return(
			<>
			<div>settinggggg</div>
			<button onClick={() => this.props.setPage('main')}>뒤로</button>
			</>
		);
	}
}
export default Setting;
