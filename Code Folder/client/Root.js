import React from 'react';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import { createStore, applyMiddleware, compose } from 'redux';

import Main from './components/Main';
import { actions } from './actions';

import reducer from './reducers';
import sagas from './sagas';

const sagaMiddleware = createSagaMiddleware();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    reducer,
    composeEnhancers(
        applyMiddleware(
            sagaMiddleware
        )
    )
);

sagaMiddleware.run(sagas);

store.dispatch(actions.loadItems());

export default (
    <Provider store={ store }>
        <Main />
    </Provider>
);
