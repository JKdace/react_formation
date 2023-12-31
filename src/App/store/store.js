import { configureStore, combineReducers } from "@reduxjs/toolkit";
import ressourcesReducer, { addImage, fetchAllRessources/* , fetchMemes */ } from "./ressources.js";
import currentReducer from "./current.js";

export const store = configureStore({
    reducer: combineReducers({ressources:ressourcesReducer,current:currentReducer}),
    devTools: true
})
store.dispatch(fetchAllRessources());
//store.dispatch(fetchMemes());
/*const daction = addImage({id: -1, url: "hello"});
console.log(daction);

store.subscribe(() => {
    console.log("etat actuel", store.getState());
});

store.dispatch(daction);*/