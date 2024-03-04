import {createStore} from 'redux';
import counterReducer from './reducers/counter.reducer';
let store=createStore(counterReducer);
export default store