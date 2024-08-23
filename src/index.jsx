import { createRoot } from "react-dom/client";
import { legacy_createStore as createStore, bindActionCreators } from "redux";
import reducer from "./reducer";
// import { inc, dec, rnd } from "./actions";
import * as actions from "./actions";

const container = document.getElementById("root");
const root = createRoot(container);

const store = createStore(reducer);
const { dispatch, subscribe, getState } = store;

const update = () => {
    document.getElementById("counter").textContent = getState().value;
};

subscribe(update);

// const bindActionCreator =
//     (creator, dispatch) =>
//     (...args) => {
//         dispatch(creator(...args));
//     };

// const incDispatch = bindActionCreator(inc, dispatch);
// const decDispatch = bindActionCreator(dec, dispatch);
// const rndDispatch = bindActionCreator(rnd, dispatch);

const { inc, dec, rnd } = bindActionCreators(actions, dispatch);

document.getElementById("inc").addEventListener("click", inc);

document.getElementById("dec").addEventListener("click", dec);

document.getElementById("rnd").addEventListener("click", () => {
    const value = Math.floor(Math.random() * 10);
    rnd(value);
});

root.render();
