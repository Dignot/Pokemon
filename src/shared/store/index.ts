import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../api/pokemonSlice";

export const store = configureStore({
    reducer: {
        pokemonCard: counterReducer,
    },
});
