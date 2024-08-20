import { createSlice } from "@reduxjs/toolkit";

type CardData = object;

type PokemonData = {
    name: string;
    data: CardData | null;
    favourites: boolean;
};

type Pokemon = {
    pokemon: PokemonData[];
    favouritesPokemon: PokemonData[];
};

const initialState: Pokemon = {
    pokemon: [],
    favouritesPokemon: [],
};

export const counterSlice = createSlice({
    name: "pokemonCard",
    initialState,
    reducers: {
        saveNamePokemon: (state, action) => {
            state.pokemon = action.payload;
        },
        savePokemonData: (state, action) => {
            const actionName = action.payload.name;
            state.pokemon.forEach((el) => {
                if (el.name === actionName) {
                    el.data = action.payload;
                }
            });
        },
        removePokemon: (state, action) => {
            state.pokemon = state.pokemon.filter(
                (el) => el.name !== action.payload
            );
        },
        likePokemon: (state, action) => {
            state.pokemon.forEach((el) => {
                if (el.name === action.payload) {
                    if (el.favourites) {
                        el.favourites = false;
                        state.favouritesPokemon =
                            state.favouritesPokemon.filter(
                                (el) => el.name !== action.payload
                            );
                    } else {
                        el.favourites = true;
                        state.favouritesPokemon.push(el);
                    }
                }
            });
        },
        favouritesPokemon: (state) => {
            state.pokemon = state.pokemon.filter(
                (el) => el.favourites === true
            );
        },
    },
});

export const {
    favouritesPokemon,
    likePokemon,
    removePokemon,
    saveNamePokemon,
    savePokemonData,
} = counterSlice.actions;

export default counterSlice.reducer;
