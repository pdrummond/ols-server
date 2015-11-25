import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import App from './containers/App'
import olsApp from './reducers';

// Redux utility functions
import { compose, createStore, applyMiddleware } from 'redux';
// Redux DevTools store enhancers
import { devTools, persistState } from 'redux-devtools';
// React components for Redux DevTools
import { DevTools, DebugPanel, LogMonitor } from 'redux-devtools/lib/react';

const finalCreateStore = compose(
	// Enables your middleware:
	//applyMiddleware(m1, m2, m3), // any Redux middleware, e.g. redux-thunk
	// Provides support for DevTools:
	devTools(),
	// Lets you write ?debug_session=<name> in address bar to persist debug sessions
	persistState(window.location.href.match(/[?&]debug_session=([^&]+)\b/))
)(createStore);

let store = finalCreateStore(olsApp);

let rootElement = document.getElementById('root')
render(
	<div>
	<Provider store={store}>
	<App />
	</Provider>
	<DebugPanel top right bottom>
	<DevTools store={store} monitor={LogMonitor} />
	</DebugPanel>
	</div>,
	rootElement
)

/*console.log(store.getState())

// Every time the state changes, log it
let unsubscribe = store.subscribe(() =>
console.log(store.getState())
)

// Dispatch some actions
store.dispatch(addItem('Learn about actions'))
store.dispatch(addItem('Learn about reducers'))
store.dispatch(addItem('Learn about store'))
store.dispatch(closeItem(0))
store.dispatch(closeItem(1))
store.dispatch(setVisibilityFilter(VisibilityFilters.SHOW_CLOSED))

// Stop listening to state updates
unsubscribe()
*/
