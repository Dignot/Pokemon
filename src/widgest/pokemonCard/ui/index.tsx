import { useEffect, useState } from "react";
import * as Styled from "./index.styled";
import { getPokemonData } from "../../../shared/api/GetPokemon/GetPokemon";
import { useDispatch } from "react-redux";
import { savePokemonData } from "../../../shared/api/pokemonSlice";
import { PokemonCardButton } from "../../pokemonCardButton";
import { useNavigate } from "react-router-dom";

export const PokemonCard = (props: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    data: any;
    name: string;
    favourites: boolean;
}) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [loading, setLo] = useState(false);

    const { data, name, favourites } = props;

    useEffect(() => {
        if (data === null) {
            getPokemonData(name).then((el) => {
                dispatch(savePokemonData(el.data));
                setLo(true);
            });
        } else {
            setLo(true);
        }
    }, []);

    return loading ? (
        <>
            <Styled.card id={name} onClick={() => navigate(`pokemon/${name}`)}>
                <Styled.cardTitle>{name}</Styled.cardTitle>
                <img src={data.sprites.front_default} alt="" />
                <PokemonCardButton favourites={favourites} />
            </Styled.card>
        </>
    ) : (
        "loading"
    );
};
