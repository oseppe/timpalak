import BracketCard from '../components/bracketCard/bracketCard'
import React from 'react'

function buildCompetitionData(competitors) {
	const competitionData = [];

	let currentMatch = 1;
	let matchContestantCounter = 1;
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
		competitorData.isMatchFought = false;
		competitorData.hover = false;

		matchContestantCounter++;

		if(matchContestantCounter > 2) {
			currentMatch++;
			matchContestantCounter = 1;
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
		competitorData.isMatchFought = false;
		competitorData.hover = false;
		
		matchContestantCounter++;

		if(matchContestantCounter > 2) {
			currentMatch++;
			matchContestantCounter = 1;
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

export { buildCompetitionData };