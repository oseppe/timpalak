import {CHANGE_NAME, MOUSE_HOVER_COMPETITOR_CARD, MOUSE_LEAVE_COMPETITOR_CARD, CHANGE_SCORE START_MATCH, RESTART_COMPETITION} from actionTypes;

export default (state={}, action) => {
	switch(action.type) {
		case CHANGE_SCORE:
			const newState = state.map((item, index) => {
				const newItem = { ...item };

				if (item.id === '') return newItem;
				if (item.matchNumber !== action.payload.matchNumber) return newItem;
				if (item.id === action.payload.id) item.score = score;
				
				newItem.isMatchFought = false;
				newItem.isWinner = false;

				return newItem;
			});

			return newState;
		default:
			return state;
	}
}