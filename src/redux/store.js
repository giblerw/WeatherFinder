import {
    applyMiddleware,
    compose,
    createStore
} from 'redux';

import rootReducer from './reducers';
import reduxThunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middlewares = [
    reduxThunk
];

const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(...middlewares)),
);

export default store;