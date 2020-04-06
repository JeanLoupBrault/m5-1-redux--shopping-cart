import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import reducer from './reducers';
import App from './components/App';

// import devToolsEnhancer from 'remote-redux-devtools';
// const store = createStore(reducer, devToolsEnhancer());

const store = createStore(
    reducer,
    window._REDUX_DEVTOOLS_EXTENSIONS_ && window._REDUX_DEVTOOLS_EXTENSIONS_()
);

const rootElement = document.getElementById('root');

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    rootElement
);
