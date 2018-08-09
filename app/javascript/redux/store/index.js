import { createStore } from 'redux';
import reducers from '../reducers';
import initialState from './initial-state';

// let serializedState;

// try {
//     serializedState = localStorage.getItem("serializedState");

//     if (serializedState === null) {
//         serializedState = initialState;
//     }

//     serializedState = JSON.parse(serializedState);
// }
// catch (err) {
//     serializedState = initialState;
// }

// const store = createStore(reducers, serializedState);


// store.subscribe(() => {
//   let serializedState = JSON.stringify(store.getState()); //serializing state
//   localStorage.setItem("serializedState", serializedState);
// }); 

const store = createStore(reducers, initialState);

export default store;