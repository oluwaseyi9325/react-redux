import { combineReducers,createStore } from "redux";

const Allreducers = combineReducers({
    // reducers
    Count
});

const store = createStore(Allreducers);

export default store;