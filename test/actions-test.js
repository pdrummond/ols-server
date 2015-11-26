import expect from 'expect'
import * as actions from '../modules/actions.js'

describe('actions', () => {
	it('should create an action to add a item', () => {
		const text = 'Finish docs'
		const expectedAction = {
			type: actions.ADD_ITEM,
			text
		}
		expect(actions.addItem(text)).toEqual(expectedAction)
	})
})
