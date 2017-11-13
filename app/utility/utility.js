import BracketCard from '../components/bracketCard/bracketCard'
import React from 'react'

function buildCompetitionData(competitors) {
	const competitionData = [];

	let currentMatch = 1;
	let matchContestantCounter = 1;

	// build the competitor cards for first level
	for(let competitor of competitors) {
		const competitorData = {};

		competitorData.name = competitor;
		competitorData.score = 0;
		competitorData.matchNumber = currentMatch;
		competitorData.hover = false;

		matchContestantCounter++;

		if(matchContestantCounter > 2) {
			currentMatch++;
			matchContestantCounter = 1;
		}

		competitionData.push(competitorData);
	}

	const totalCompetitorCards = (competitors.length - 1) * 2;
	let remainingCompetitorCards = totalCompetitorCards - competitors.length;

	// build the competitor cards for the succeeding levels
	for (let i = remainingCompetitorCards; i > 0; i--) {
		const competitorData = {};

		competitorData.name = '';
		competitorData.score = 0;
		competitorData.matchNumber = currentMatch;
		competitorData.hover = false;
		
		matchContestantCounter++;

		if(matchContestantCounter > 2) {
			currentMatch++;
			matchContestantCounter = 1;
		}

		competitionData.push(competitorData);	
	}

	return competitionData;
}

export { buildCompetitionData };