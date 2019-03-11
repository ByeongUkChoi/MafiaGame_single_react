/*
 * users 배열과, jobs 직업 최대, 최소 값으로
 * player 배열 생성
 */
export const setPlayers = (users, jobs) => {
	const minJobArr = []
	const maxJobArr = []
	Object.keys(jobs).forEach((job) =>{
		Array.from({ length: jobs[job].min }, () => minJobArr.push(job))
		Array.from({ length: jobs[job].max - jobs[job].min }, () => maxJobArr.push(job))
	})
	const randJobArr = []
	Array.from({ length: users.length - minJobArr.length }, () => {
		console.log('b')
		console.log('a')
		randJobArr.push()
	})

	//console.log(maxJobArr);
	return 'a';
}
