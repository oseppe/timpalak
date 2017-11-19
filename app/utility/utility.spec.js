import { buildPlayerData, buildMatches } from './utility.js';

describe('buildPlayerData', function() {
	test('Should return the same length as the input', function() {
		const players = ['Bard', 'Braum', 'Janne', 'Karma', 'Leona', 'Nami', 'Morgana', 'Zyra'];

		expect(Object.keys(buildPlayerData(players)).length).toBe(players.length);
	});

	test('Should have name as prop of items', function() {
		const players = ['Bard', 'Braum', 'Janne', 'Karma', 'Leona', 'Nami', 'Morgana', 'Zyra'];
		const list = buildPlayerData(players);

		expect(typeof(list['0'].name)).not.toBe('undefined');
	});

	test('Should have hover as prop of items', function() {
		const players = ['Bard', 'Braum', 'Janne', 'Karma', 'Leona', 'Nami', 'Morgana', 'Zyra'];
		const list = buildPlayerData(players);

		expect(typeof(list['0'].hover)).not.toBe('undefined');
	});
})

describe('buildMatches', function() {
	test('Should return the input.length - 1', function() {
		const players = ['Bard', 'Braum', 'Janne', 'Karma', 'Leona', 'Nami', 'Morgana', 'Zyra'];
		const playerData = buildPlayerData(players);

		const countMatches = Object.keys(buildMatches(playerData)).length;
		const expectedCountMatches = Object.keys(playerData).length - 1;

		expect(countMatches).toBe(expectedCountMatches);
	});
})