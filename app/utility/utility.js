import BracketCard from '../components/bracketCard/bracketCard'
import React from 'react'

function buildCompetitionData(competitors) {
	const competitionData = [];

	let currentMatch = 0;
	let matchCompetitorNumber = 0;
	let competitorId = 0;
	let currentLevel = 0;

	// build the competitor cards for first level
	for(let competitor of competitors) {
		const competitorData = {};

		competitorData.id = `${competitorId}`;
		competitorData.level = currentLevel;
		competitorData.name = competitor;
		competitorData.score = 'x';
		competitorData.matchNumber = currentMatch;
		competitorData.matchCompetitorNumber = matchCompetitorNumber;
		competitorData.isMatchFought = false;
		competitorData.hover = false;

		matchCompetitorNumber++;

		if(matchCompetitorNumber > 1) {
			currentMatch++;
			matchCompetitorNumber = 0;
		}

		competitionData.push(competitorData);
		competitorId++;
	}

	const totalCompetitorCards = (competitors.length - 1) * 2;
	let remainingCompetitorCards = totalCompetitorCards - competitors.length;
	let competitorCountPerLevel = competitors.length / 2;
	let remainingCompetitorsInLevel = competitorCountPerLevel;
	currentLevel++;

	// build the competitor cards for the succeeding levels
	for (let i = remainingCompetitorCards; i > 0; i--) {
		const competitorData = {};

		competitorData.id = '';
		competitorData.level = currentLevel;
		competitorData.name = '';
		competitorData.score = 'x';
		competitorData.matchNumber = currentMatch;
		competitorData.matchCompetitorNumber = matchCompetitorNumber;
		competitorData.isMatchFought = false;
		competitorData.hover = false;
		
		matchCompetitorNumber++;

		if(matchCompetitorNumber > 1) {
			currentMatch++;
			matchCompetitorNumber = 0;
		}

		competitionData.push(competitorData);

		remainingCompetitorsInLevel--;

		if (remainingCompetitorsInLevel === 0) {
			competitorCountPerLevel = competitorCountPerLevel / 2;
			remainingCompetitorsInLevel = competitorCountPerLevel;
			currentLevel++;
		}
	}

	return competitionData;
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

export { buildCompetitionData, nextMatchNumber, nextMatchCompetitorNumber };