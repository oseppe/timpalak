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

		matchContestantCounter++;

		if(matchContestantCounter > 2) {
			currentMatch++;
			matchContestantCounter = 1;
		}

		competitionData.push(competitorData);	
	}

	return competitionData;
}

function computeBracketCount(level) {
	const exponent = level - 2 > 0 ? level - 2 : 0;

	return 2 ** exponent;
}

function buildLevels(competitionData, levelsCount) {
	const levels = [];

	let sliceStart = 0;
	let sliceEnd = 4;

	for (let level = levelsCount; level > 1; level--) {
		const bracketCount = computeBracketCount(level);
		const brackets = [];

		for (let i = 0; i < bracketCount; i++) {
			let bracketCompetitors = competitionData.slice(sliceStart, sliceEnd);

			brackets.push(<BracketCard bracketCompetitors={bracketCompetitors} />)

			sliceStart = sliceEnd;
			sliceEnd = sliceEnd + 4;
		}

		levels.push(<div className="col m3 l2">
			{ brackets }
		</div>);
	}

	return levels;
}

export {buildCompetitionData, buildLevels, computeBracketCount};