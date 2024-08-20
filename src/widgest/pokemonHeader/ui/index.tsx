import { PokemonFavourites } from "../../PokemonFavourites";
import * as Styled from "./index.styled";

export const PokemonHeader = (props: {
    favourite: boolean;
    is: () => void;
}) => {
    const { favourite, is } = props;
    return (
        <Styled.HeaderWrappen>
            <Styled.Title>Pokemon</Styled.Title>
            <PokemonFavourites {...{ favourite, is }} />
        </Styled.HeaderWrappen>
    );
};
