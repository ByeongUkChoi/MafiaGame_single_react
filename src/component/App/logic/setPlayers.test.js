import { setPlayers, makeRandJobArr } from "./setPlayers";

const users = [
	'player1',
	'player2',
	'player3',
	'player4',
	'player5',
]

const jobs = {
	MAFIA : {
		min : 1,
		max : 1,
	},
	POLICE : {
		min : 0,
		max : 2,
	},
	DOCTOR : {
		min : 0,
		max : 2,
	},
	CITIZEN : {
		min : 1,
		max : 2,
	}
}

describe('Test :  App/logic/setPlayers.js', () => {
    it('makeRandJobArr : 100 번 반복 시 랜덤 직업에 undefined 없는지, 최소값 이상 최댓값 이하 인지, 모든 직업이 각 인덱스에 존재하는지', () => {
		let allUsersJob = []
		for(let i=0; i<100; i++){
			const randJobArr = makeRandJobArr(users.length, jobs)

			expect(randJobArr).not.toContain(undefined)
			Object.keys(jobs).forEach(jobName => {
				expect(randJobArr.filter(job => job === jobName).length).toBeLessThanOrEqual(jobs[jobName].max)
			})

			randJobArr.forEach((job,idx) => {
				if(allUsersJob[idx]) {
					if(allUsersJob[idx].indexOf(job) < 0) {
						allUsersJob[idx].push(job)
					}
				}else{
					allUsersJob[idx] = [job]
				}
			})
		}
		// 직업이 모든 인덱스에 전부 존재하는지 확인
		console.table(allUsersJob)
		Array.from({ length: users.length }, (v, i) => expect(allUsersJob[i].length).toBe(Object.keys(jobs).length))
    })
    it('2 번째 ', () => {
    })
})
