import { setPlayers } from "./setPlayers";

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

describe('App/logic/setPlayers 함수 테스트', () => {
    it('리턴값이 잘 들어오는지!', () => {
		for(let i=0; i<1000; i++){
			const players = setPlayers(users, jobs)
			expect(players).not.toContain(undefined)

			expect(players.filter(job => job === 'MAFIA').length).toBeGreaterThanOrEqual(1)
			expect(players.filter(job => job === 'MAFIA').length).toBeLessThanOrEqual(1)

			expect(players.filter(job => job === 'POLICE').length).toBeGreaterThanOrEqual(0)
			expect(players.filter(job => job === 'POLICE').length).toBeLessThanOrEqual(2)

			expect(players.filter(job => job === 'DOCTOR').length).toBeGreaterThanOrEqual(0)
			expect(players.filter(job => job === 'DOCTOR').length).toBeLessThanOrEqual(2)

			expect(players.filter(job => job === 'CITIZEN').length).toBeGreaterThanOrEqual(1)
			expect(players.filter(job => job === 'CITIZEN').length).toBeLessThanOrEqual(2)
		}
    })
})

function playersJobCnt (player,jobs) {
}
