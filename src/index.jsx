import { createStore } from 'redux';
import toDoListReducer from './reducers/to-do-list-reducer';

const store = createStore(toDoListReducer);
