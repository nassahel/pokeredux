import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    pokemons: [],
    status: 'none'
};


export const getPokemon = createAsyncThunk('pokemon/getAllPokemon', async () => {
    const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=100');
    const resp = response.data.results;
    const res = resp.map((item)=> axios.get(` https://pokeapi.co/api/v2/pokemon/${item.name}`))

    const pokemons = await Promise.all(res)
    return pokemons
})

const pokemonSlice = createSlice({
    name: 'allPokemon',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getPokemon.pending, (state, action) => {
                state.status = 'Loading...'
            })
            .addCase(getPokemon.fulfilled, (state, action) => {
                state.status = 'Success!';
                state.pokemons = action.payload;
            })
            .addCase(getPokemon.rejected, (state, action) => {
                state.status = 'Denegado'
                state.error = action.error.message
            })
    }
})

export default pokemonSlice.reducer;