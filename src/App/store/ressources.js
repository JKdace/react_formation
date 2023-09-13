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
    }
});

export const fetchAllRessources = createAsyncThunk('ressources/fetchAllRessources',async ()=>{
    const pimages = await fetch(REST_URL + 'images');
    const images = await pimages.json();
    return images;
})

export const {addImage,loadImagesFromArg} = ressources.actions

export default ressources.reducer