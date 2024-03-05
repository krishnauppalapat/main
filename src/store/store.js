import {createStore} from 'redux';
import counterReducer from './reducers/counter.reducer';
const store=createStore(counterReducer);
export default store;