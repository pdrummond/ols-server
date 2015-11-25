/*
 * action types
 */
export const ADD_ITEM = 'ADD_ITEM'
export const CLOSE_ITEM = 'COMPLETE_TODO'
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER'

/*
 * other constants
 */

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_OPEN: 'SHOW_OPEN',
  SHOW_CLOSED: 'SHOW_CLOSED'
}

/*
 * action creators
 */

export function addItem(text) {
  return { type: ADD_ITEM, text }
}

export function closeItem(index) {
  return { type: CLOSE_ITEM, index }
}

export function setVisibilityFilter(filter) {
  return { type: SET_VISIBILITY_FILTER, filter }
}
