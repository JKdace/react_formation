import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { DummyMeme } from "../interfaces/common";
import { REST_URL } from "../config/constantes";

const initialState = DummyMeme;

// créateurs d'actions
const current = createSlice({
    name: 'current',
    initialState,
    reducers: {
        change(state,action){
            Object.assign(state,action.payload);
        },
        clear(state,action){
            delete state.id;
            Object.assign(state,DummyMeme);
        }
    },
    // extrareducers pour gestion asynchrone et écoute d'autres états pour y réagir
    extraReducers(builder) {
    builder.addCase(
      "current/save/fulfilled",
      (state, action) => {
        
      }
    )
  }
});

// Fonction utilisée par le formulaire pour le submit
export const saveMeme = createAsyncThunk(
    "current/save", 
    async (current) => {
        const currentId = undefined !== current.id ? "/" + current.id : "";
        const a = await fetch(REST_URL + "memes" + currentId, {
            method: undefined !== current.id ? 'PUT' : 'POST',
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(current)
        });
        return await a.json();
    } 
  );
// export pour accéder aux actions, import à faire de l'autre côté
export const {clear,change} = current.actions

export default current.reducer