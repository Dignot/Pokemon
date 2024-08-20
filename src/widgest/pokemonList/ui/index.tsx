import { useSelector } from "react-redux";
import * as Styled from "./index.styled";
import { PokemonCard } from "../../PokemonCard";
import { PokemonData } from "./index.type";
import { PokemonHeader } from "../../pokemonHeader";
import { useState } from "react";

export const PokemonList = () => {
    const [favourite, setFavourites] = useState<boolean>(true);

    const is = () => {
        setFavourites(!favourite);
    };

    const pokemonData = useSelector(
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (state: any) => state.pokemonCard.pokemon
    );

    const PokemonFavourites = useSelector(
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (state: any) => state.pokemonCard.favouritesPokemon
    );
    return (
        <>
            <PokemonHeader {...{ favourite, is }} />
            <Styled.cardsWrappen>
                {favourite
                    ? pokemonData.map((el: PokemonData) => (
                          <PokemonCard {...el} />
                      ))
                    : PokemonFavourites.map((el: PokemonData) => (
                          <PokemonCard {...el} />
                      ))}
            </Styled.cardsWrappen>
        </>
    );
};
