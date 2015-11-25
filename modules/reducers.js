import { combineReducers } from 'redux'
import { ADD_ITEM, CLOSE_ITEM, SET_VISIBILITY_FILTER, VisibilityFilters } from './actions'
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
    case CLOSE_ITEM:
      return [
        ...state.slice(0, action.index),
        Object.assign({}, state[action.index], {
          closed: true
        }),
        ...state.slice(action.index + 1)
      ]
    default:
      return state
  }
}

const olsApp = combineReducers({
  visibilityFilter,
  items
})

export default olsApp
