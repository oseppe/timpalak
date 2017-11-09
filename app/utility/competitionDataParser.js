function buildCompetitionData(competitors) {
	const competitionData = [];
	let currentMatch = 1;
	let matchContestantCounter = 1;

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

	return competitionData;
}

function computeBracketCount(level) {
	const exponent = level - 2 > 0 ? level - 2 : 0;

	return 2 ** exponent;
}

export {buildCompetitionData, computeBracketCount};