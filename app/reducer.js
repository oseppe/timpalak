import {CHANGE_NAME, MOUSE_ENTER_COMPETITOR_CARD, MOUSE_LEAVE_COMPETITOR_CARD, CHANGE_SCORE, START_MATCH, START_NEW_COMPETITION, SHOW_SAVE_ID} from './actionTypes';
import { generateCompetitors, nextMatchNumber, nextMatchCompetitorNumber, buildData } from './utility/utility'

export default (state={}, action) => {
	const newState = JSON.parse(JSON.stringify(state));
	
	switch(action.type) {
		case CHANGE_NAME: 
			newState.players[action.id].name = action.name;
			
			return newState;
			
		case CHANGE_SCORE:
			newState.matches[action.matchId].isMatchFought = false;
			newState.matches[action.matchId].winner = '';
			newState.matches[action.matchId].players.map((item) => {
				if (item.id === action.id) item.score = action.score

				return item;
			});

			return newState;

		case MOUSE_ENTER_COMPETITOR_CARD: {
			if (action.playerId.trim() === '') return newState;

			const player = newState.players[action.playerId];
			player.hover = true;

			return newState;
		}
			

		case MOUSE_LEAVE_COMPETITOR_CARD: {
			if (action.playerId.trim() === '') return newState;

			const player = newState.players[action.playerId];
			player.hover = false;

			return newState;
		}
		
		case SHOW_SAVE_ID: {
			console.log(action.message);
			return state;
		}

		case START_MATCH:
			const match = newState.matches[action.matchId];

			const winner = +match.players[0].score > +match.players[1].score ? match.players[0] : match.players[1];

			match.isMatchFought = true;
			match.winner = winner.id;

			const nextPosition = nextMatchCompetitorNumber(action.matchId);

			const nextMatch = newState.matches[nextMatchNumber(action.matchId)];
			nextMatch.players[nextPosition].id = winner.id;

			return newState;

		case START_NEW_COMPETITION: 
			const competitors = generateCompetitors();
			const data = buildData(competitors);

			return Object.assign({}, data);
		default:
			return state;
	}
}