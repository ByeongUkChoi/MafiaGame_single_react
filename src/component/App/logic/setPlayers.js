/*
 * users 배열과, jobs 직업 최대, 최소 값으로
 * player 배열 생성
 */
export const setPlayers = (users, jobs) => {
	const jobArr = []
	const randJobArr = []
	Object.keys(jobs).forEach((job) =>{
		Array.from({ length: jobs[job].min }, () => jobArr.push(job))
		Array.from({ length: jobs[job].max - jobs[job].min }, () => randJobArr.push(job))
	})
	let randIdx;
	let randJob;
	let jobArrLen;
	console.log(users.length);
	console.log(jobArr.length);
	for(let i = 0; i < users.length - jobArr.length; i++){
		//jobArr.push(randJobArr.splice(Math.floor(Math.random() * randJobArr.length, 1))[0])
		console.log('aaaa');
		jobArr.push('c');
	}
	//Array.from({ length: users.length - jobArr.length }, async () => {
	//	console.log(randJobArr.length);
	//	//randIdx = await Math.floor(Math.random() * randJobArr.length, 1)
	//	randIdx = async() => Math.floor(Math.random() * randJobArr.length, 1)
	//	randJob = async(randIdx) => randJobArr.splice(randIdx)[0]
	//	jobArrLen = async(randJob)=> jobArr.push(randJob)
	//	console.log(randJobArr.length);
	//	jobArr.push(randJobArr.splice(Math.floor(Math.random() * randJobArr.length, 1))[0])
	//})
	console.log(jobArr);

	return ['1','2','3','4','5'];
}
