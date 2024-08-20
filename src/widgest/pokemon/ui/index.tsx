/* eslint-disable @typescript-eslint/no-explicit-any */
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { PokemonInfo } from "../../pokemonInfo";

export const Pokemon = () => {
    const location = useLocation();
    const name = location.pathname.split("/");
    const pokemonData = useSelector((state: any) => state.pokemonCard.pokemon);
    return (
        <div>
            {pokemonData.map((el: { name: string; data: any }) => {
                if (el.name === name[2]) {
                    return <PokemonInfo {...el} />;
                }
            })}
        </div>
    );
};
