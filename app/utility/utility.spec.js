import { buildPlayers, buildMatches, buildLevels, buildData } from './utility.js';

describe('buildPlayers', function() {
	test('Should return the same length as the input', function() {
		const players = ['Bard', 'Braum', 'Janne', 'Karma', 'Leona', 'Nami', 'Morgana', 'Zyra'];

		expect(Object.keys(buildPlayers(players)).length).toBe(players.length);
	});

	test('Should have name as prop of items', function() {
		const players = ['Bard', 'Braum', 'Janne', 'Karma', 'Leona', 'Nami', 'Morgana', 'Zyra'];
		const list = buildPlayers(players);

		expect(typeof(list['0'].name)).not.toBe('undefined');
	});

	test('Should have hover as prop of items', function() {
		const players = ['Bard', 'Braum', 'Janne', 'Karma', 'Leona', 'Nami', 'Morgana', 'Zyra'];
		const list = buildPlayers(players);

		expect(typeof(list['0'].hover)).not.toBe('undefined');
	});
})

describe('buildMatches', function() {
	test('Should return the input.length - 1', function() {
		const players = ['Bard', 'Braum', 'Janne', 'Karma', 'Leona', 'Nami', 'Morgana', 'Zyra'];
		const playerData = buildPlayers(players);

		const countMatches = Object.keys(buildMatches(playerData)).length;
		const expectedCountMatches = Object.keys(playerData).length - 1;

		expect(countMatches).toBe(expectedCountMatches);
	});
})

describe('buildLevels', function() {
	const players = ['Aatrox', 'Ahri', 'Akali', 'Alistar', 'Amumu', 'Anivia',
		'Annie', 'Ashe', 'Aurelion Sol', 'Azir', 'Bard', 'Blitzcrank', 
		'Brand', 'Braum', 'Caitlyn', 'Camille'];

	const playersData = buildPlayers(players);
	const matches = buildMatches(playersData);
	const levels = buildLevels(matches);

	const countLevels = Object.keys(levels).length;
	const expectedCountLevels = Math.log2(players.length);


	test('Should return log2(competitors) levels', function() {
		expect(countLevels).toBe(expectedCountLevels);
	});

	test('Should have first level === competitors.length / 2', function() {
		expect(levels[0].length).toBe((players.length)/2);
	});

	test('Should have final level === 1', function() {
		const lastLevel = Object.keys(levels).length - 1;

		expect(levels[lastLevel].length).toBe(1);
	});
});

describe('buildData', function() {
	const players = ['Aatrox', 'Ahri', 'Akali', 'Alistar', 'Amumu', 'Anivia',
		'Annie', 'Ashe', 'Aurelion Sol', 'Azir', 'Bard', 'Blitzcrank', 
		'Brand', 'Braum', 'Caitlyn', 'Camille'];

	const data = buildData(players);

	test('Should have players key', function() {
		expect(typeof(data['players'])).not.toBe('undefined');
	});

	test('Should have levels key', function() {
		expect(typeof(data['levels'])).not.toBe('undefined');
	});

	test('Should have matches key', function() {
		expect(typeof(data['matches'])).not.toBe('undefined');
	});
});