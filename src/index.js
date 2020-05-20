import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import * as serviceWorker from './serviceWorker';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk'
import {createStore,combineReducers, applyMiddleware, compose} from 'redux'
import reducer from './reducer'

// const logger=store=>{
//     return next=>{
//         return action=>{
//             console.log('[Middleware] Dispatching', action);
//             const result=next(action)
//             console.log('[Middleware] next state ', store.getState());
//             return result
//         }
//     }
// }

const composeEnhanchers=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

//Inače ovdje logger bude prvi argumet unutar applyMiddleware, ali mi je samo smetao...
const store=createStore(reducer,composeEnhanchers(applyMiddleware(thunk)))

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
