import { combineReducers } from 'redux'
import { ADD_ITEM, OPEN_ITEM, CLOSE_ITEM, SET_VISIBILITY_FILTER, VisibilityFilters } from './actions'
const { SHOW_ALL } = VisibilityFilters

function visibilityFilter(state = SHOW_ALL, action) {
	switch (action.type) {
		case SET_VISIBILITY_FILTER:
		return action.filter
		default:
		return state
	}
}

function items(state = [], action) {
	switch (action.type) {
		case ADD_ITEM:
		return [
			...state,
			{
				text: action.text,
				closed: false
			}
		]
		case OPEN_ITEM:
		return [
			...state.slice(0, action.index),
			Object.assign({}, state[action.index], {
				closed: false
			}),
			...state.slice(action.index + 1)
		]
		case CLOSE_ITEM:
		let result = [
			...state.slice(0, action.index),
			Object.assign({}, state[action.index], {
				closed: true
			}),
			...state.slice(action.index + 1)
		];
		console.log("CLOSE_ITEM: " + JSON.stringify(result));
		return result;
		default:
		return state
	}
}

const olsApp = combineReducers({
	visibilityFilter,
	items
})

export default olsApp
