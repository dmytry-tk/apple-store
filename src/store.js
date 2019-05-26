import {createStore} from "redux";
import reducer from "./reducers";


// const store = createStore(reducer);

const loadState = () => {
    try {
        const serialisedState = window.localStorage.getItem('app_state');
        if (!serialisedState) return undefined;
        return JSON.parse(serialisedState);
    } catch (err) {
        return undefined;
    }
};

const saveState = (state) => {
    try {
        const serialisedState = JSON.stringify(state);
        window.localStorage.setItem('app_state', serialisedState);
    } catch (err) {
    }
};

const oldState = loadState();
const store = createStore(reducer, oldState);

store.subscribe(() => {
    saveState(store.getState());
});

export default store;