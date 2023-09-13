import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { REST_URL } from "../config/constantes";

const initialState = {
    memes:[],
    images:[]
};

const ressources = createSlice({
    name: 'ressources',
    initialState,
    reducers: {
        addImage(state,action){
            state.images.push(action.payload);
        },
        loadImagesFromArg(state,action){
            state.images.splice(0);
            state.images.push(...action.payload);
        }
    },
    // extrareducers pour gestion asynchrone et écoute d'autres états pour y réagir
    extraReducers(builder){
        builder.addCase('ressources/fetchAllRessources/fulfilled',(state,action)=>{
            state.images.splice(0);
            state.images.push(...action.payload.images);
            state.memes.splice(0);
            state.memes.push(...action.payload.memes);
        });
        /* builder.addCase('ressources/fetchMemes/fulfilled',(state,action)=>{
            state.memes.splice(0);
            state.memes.push(...action.payload);
        }); */
    }
});

export const fetchAllRessources = createAsyncThunk('ressources/fetchAllRessources',async ()=>{
    const a = await Promise.all([fetch(REST_URL + 'images'), fetch(REST_URL + 'memes')]);
    const images = await a[0].json();
    const memes = await a[1].json();
    
    /* const pimages = await fetch(REST_URL + 'images');
    const images = await pimages.json(); */
    return {images:images, memes:memes};
})

// export const fetchMemes = createAsyncThunk('ressources/fetchMemes',async ()=>{
//     const pmemes = await fetch(REST_URL + 'memes');
//     const memes = await pmemes.json();
//     return memes;
// })


export const {addImage,loadImagesFromArg} = ressources.actions

export default ressources.reducer