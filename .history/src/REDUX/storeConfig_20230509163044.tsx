import { combineReducers,createStore } from "redux";

const Allreducers = combineReducers({
    CounterReducer:CounterReducer
    
});

const store = createStore(Allreducers);

export default store;