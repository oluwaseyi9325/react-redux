import { combineReducers,createStore } from "redux";
import CounterReducer from "./CounterReducer";
import TodoReducer from "./TodoReducer";

const Allreducers = combineReducers({
    CounterReducer:CounterReducer,
    TodoReducers:TodoReducer
    
    
});

const store = createStore(Allreducers);

export default store;