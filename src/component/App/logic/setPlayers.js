/*
 * users 배열과, jobs 직업 최대, 최소 값으로
 * player 배열 생성
 */
export const setPlayers = (users, jobs) => {
	const jobArr = []
	const randJobArr = []
	Object.keys(jobs).forEach((job) => {
		Array.from({ length: jobs[job].min }, () => jobArr.push(job))
		Array.from({ length: jobs[job].max - jobs[job].min }, () => randJobArr.push(job))
	})
	Array.from({ length: users.length - jobArr.length }, () => 
		// randJobArr의 랜덤 원소를 빼서 jobArr에 push
		jobArr.push(randJobArr.splice(Math.floor(Math.random() * randJobArr.length), 1)[0])
	)
	return jobArr;
}
