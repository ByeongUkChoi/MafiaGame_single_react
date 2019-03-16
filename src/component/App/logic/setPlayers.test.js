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
        const players = setPlayers(users, jobs)

        expect(players).toHaveLength(5)
        // expect(players).toMatchSnapshot()
       // const jobNameByPlayers = players.map(player => player.jobName)

       // expect(jobNameByPlayers).toContain(JOB_NAME_OF_CITIZEN)
       // expect(jobNameByPlayers).toContain(JOB_NAME_OF_DOCTOR)
       // expect(jobNameByPlayers).toContain(JOB_NAME_OF_MAFIA)
       // expect(jobNameByPlayers).toContain(JOB_NAME_OF_POLICE)

       // const nameByPlayers = players.map(player => player.name)

       // // console.log(nameByPlayers)
       // people.forEach(person => {
       //     // console.log(person)
       //     expect(nameByPlayers).toContain(person)
       // })

    })
})
