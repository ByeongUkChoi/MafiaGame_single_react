/*
 * users 배열과, jobs 직업 최대, 최소 값으로
 * player 배열 생성
 */
export const setPlayers = (users, jobs) => {
	const jobArr = makeRandJobArr(users.length, jobs)
	return jobArr

}

// 직업의 최대 최소 값과 유저 수로 랜덤 직업 배열 생성
export const makeRandJobArr = (userCnt, jobs) => {
	const jobArr = []
	const randJobArr = []
	Object.keys(jobs).forEach(job => {
		Array.from({ length: jobs[job].min }, () => jobArr.push(job))
		Array.from({ length: jobs[job].max - jobs[job].min }, () => randJobArr.push(job))
	})
	Array.from({ length: userCnt - jobArr.length }, () => 
		// randJobArr의 랜덤 원소를 빼서 jobArr에 push
		jobArr.push(randJobArr.splice(Math.floor(Math.random() * randJobArr.length), 1)[0])
	)
	// 랜덤
	jobArr.sort(() => Math.random() - 0.5)
	return jobArr;
}
