import { Route, Routes } from "react-router-dom";
import { PokemonPage } from "../../page/pokemon";
import { PokemonInformation } from "../../page/pokemonInformation";

export const AppRoute = () => {
    return (
        <Routes>
            <Route path="/" element={<PokemonPage />} />
            <Route path="/pokemon/:genre" element={<PokemonInformation />} />
        </Routes>
    );
};
