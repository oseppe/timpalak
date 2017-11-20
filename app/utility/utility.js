import BracketCard from '../components/bracketCard/bracketCard'
import React from 'react'

function buildData(playerList) {
	const players = buildPlayers(playerList);

	const matches = buildMatches(players);
	const levels = buildLevels(matches);

	return { players, matches, levels };
}

function buildPlayers(playerList) {
	const players = {};

	for (let i =  0; i < playerList.length; i++) {
		const player = {
			name: playerList[i],
			hover: false,
		}
		
		players[`${i}`] = player;
	}

	return players;
}

function buildMatches(players) {
	const matches = {};

	const countPlayers = Object.keys(players).length
	const totalMatches = countPlayers - 1;
	
	let currentMatch = 0;

	// construct first level
	for (let i = 0; i < countPlayers; i = i + 2) {
		const match = {
			playerA: `${i}`,
			playerB: `${i + 1}`,
			scoreA: 'x',
			scoreB: 'x',
			winner: '',
			isMatchFought: false,
		}

		matches[`${currentMatch}`] = match;

		currentMatch++;
	}

	for (let i = currentMatch; i < totalMatches; i++) {
		const match = {
			playerA: '',
			playerB: '',
			scoreA: 'x',
			scoreB: 'x',
			winner: '',
			isMatchFought: false,
		}

		matches[`${i}`] = match;
	}

	return matches;
}

function buildLevels(matches) {
	const levels = {};

	const matchIds = Object.keys(matches);
	const countPlayers = matchIds.length + 1;
	const countLevels = Math.log2(countPlayers);

	let matchesInLevel = countPlayers / 2;
	let startSlice = 0;
	let endSlice = matchesInLevel;

	for (let i = 0; i < countLevels; i++) {
		const sliceMatches = matchIds.slice(startSlice, endSlice);

		levels[`${i}`] = sliceMatches;

		matchesInLevel = matchesInLevel / 2;
		startSlice = endSlice;
		endSlice = endSlice + matchesInLevel;
	}

	return levels;
}

function copyCompetitorData(competitor) {
	const clonedCompetitor = { ...competitor };

	// clonedCompetitor.id = competitor.id;
	// clonedCompetitor.level = competitor.level;
	// clonedCompetitor.name = competitor.name;
	// clonedCompetitor.score = competitor.score;
	// clonedCompetitor.isWinner = competitor.isWinner;
	// clonedCompetitor.matchNumber = competitor.matchNumber;
	// clonedCompetitor.matchCompetitorNumber = competitor.matchCompetitorNumber;
	// clonedCompetitor.isMatchFought = competitor.isMatchFought;
	// clonedCompetitor.hover = competitor.hover;

	return clonedCompetitor;
}

function generateCompetitors() {
	const list = [
		'Aatrox', 'Ahri', 'Akali', 'Alistar', 'Amumu', 'Anivia',
		'Annie', 'Ashe', 'Aurelion Sol', 'Azir', 'Bard', 'Blitzcrank', 
		'Brand', 'Braum', 'Caitlyn', 'Camille', 'Cassiopeia', "Cho'Gath",
		'Corki', 'Darius', 'Diana', 'Dr. Mundo', 'Draven', 'Ekko',
		'Elise', 'Evelynn', 'Ezreal', 'Fiddlesticks', 'Fiora', 'Fizz',
		'Galio', 'Gangplank', 'Garen', 'Gnar', 'Gragas', 'Graves',
		'Hecarim', 'Heimerdinger', 'Illaoi', 'Irelia', 'Ivern', 'Janna',
		'Jarvan IV', 'Jax','Jayce', 'Jhin', 'Jinx', 'Kalista', 
		'Karma', 'Karthus', 'Kassadin', 'Katarina', 'Kayle', 'Kennen', 
		"Kha'Zix", 'Kindred', 'Kled', "Kog'Maw", 'LeBlanc', 'Lee Sin',
		'Leona', 'Lissandra', 'Lucian', 'Lulu', 'Lux', 'Malphite',
		'Malzahar', 'Maokai', 'Master Yi', 'Miss Fortune', 'Mordekaiser', 'Morgana',
		'Nami', 'Nautilus', 'Rakan', 'Sona', 'Soraka', 'Taric', 
		'Thresh',  'Zilean', 'Zyra'
	];

	const competitors = [];

	for(let i = 0; i < 16; i++) {
		let competitor = list[getRandomNumberBetween(0, list.length)];

		while(competitors.includes(competitor)) {
			competitor = list[getRandomNumberBetween(0, list.length)];
		}

		competitors.push(competitor);
	}

	return competitors;
}

function getRandomNumberBetween(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;	
}

// TODO: should be refactored to something flexible
function nextMatchNumber(matchNumber) {
	const matchNumberDirectory = {
		0: 8,
		1: 8,
		2: 9,
		3: 9,
		4: 10,
		5: 10,
		6: 11,
		7: 11,
		8: 12,
		9: 12,
		10: 13,
		11: 13,
		12: 14,
		13: 14,
		14: -1
	}

	return matchNumberDirectory[matchNumber];
}

// TODO: should be refactored to something flexible
function nextMatchCompetitorNumber(matchNumber) {
	const matchCompetitorNumberDirectory = {
		0: 0,
		1: 1,
		2: 0,
		3: 1,
		4: 0,
		5: 1,
		6: 0,
		7: 1,
		8: 0,
		9: 1,
		10: 0,
		11: 1,
		12: 0,
		13: 1,
		14: -1
	}

	return matchCompetitorNumberDirectory[matchNumber]
}

export { copyCompetitorData, generateCompetitors, nextMatchNumber, nextMatchCompetitorNumber, buildPlayers, buildMatches, buildLevels, buildData };