import { combineReducers,createStore } from "redux";
import CounterReducer from "./CounterReducer";

const Allreducers = combineReducers({
    CounterReducer:CounterReducer,
    Todo
    
});

const store = createStore(Allreducers);

export default store;