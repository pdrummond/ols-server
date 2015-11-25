import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import AddItem from '../components/AddItem';
import ItemList from '../components/ItemList';
import Footer from '../components/Footer';
import { addItem, closeItem, setVisibilityFilter, VisibilityFilters } from '../actions';

export default class App extends Component {
	render() {
		console.log("App.render()");
		// Injected by connect() call:
		const { dispatch, visibleItems, visibilityFilter } = this.props;

		return (
			<div>
			<AddItem
			onAddClick={text =>
				dispatch(addItem(text))
			} />
			<ItemList
				items={visibleItems}
				onItemClick={index =>
					console.log('item clicked', index)
				} />
			<Footer
			filter='SHOW_ALL'
			onFilterChange={filter =>
				console.log('filter change', filter)
			} />
			</div>
		)
	}
}

App.propTypes = {
  visibleItems: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.string.isRequired,
    closed: PropTypes.bool.isRequired
  })),
  visibilityFilter: PropTypes.oneOf([
    'SHOW_ALL',
    'SHOW_OPEN',
    'SHOW_CLOSED'
  ]).isRequired
}

function selectItems(items, filter) {
  switch (filter) {
    case VisibilityFilters.SHOW_ALL:
      return items
    case VisibilityFilters.SHOW_OPEN:
      return items.filter(item => !item.closed)
    case VisibilityFilters.SHOW_CLOSED:
      return items.filter(item => item.closed)
  }
}

// Which props do we want to inject, given the global state?
// Note: use https://github.com/faassen/reselect for better performance.
function select(state) {
  return {
    visibleItems: selectItems(state.items, state.visibilityFilter),
    visibilityFilter: state.visibilityFilter
  }
}

// Wrap the component to inject dispatch and state into it
export default connect(select)(App)
