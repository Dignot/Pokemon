import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPokemonName } from "../../../shared/api/GetPokemon/GetPokemon";
import { saveNamePokemon } from "../../../shared/api/pokemonSlice";
import { PokemonName } from "./index.type";
import { PokemonList } from "../../../widgest/pokemonList";

export const PokemonPage = () => {
    const dispatch = useDispatch();
    const pokemonData = useSelector(
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (state: any) => state.pokemonCard.pokemon
    );
    useEffect(() => {
        if (pokemonData.length === 0)
            getPokemonName()
                .then((el) => {
                    return el.data.results.map((el: PokemonName) => {
                        return { name: el.name, data: null, like: false };
                    });
                })
                .then((el) => dispatch(saveNamePokemon(el)));
    }, []);
    return <PokemonList />;
};
