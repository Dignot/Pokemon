import { Link } from "react-router-dom";
import * as Styled from "./index.styled";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const PokemonInfo = (props: { name: string; data: any }) => {
    const { name, data } = props;
    return (
        <Styled.PokemonWrappen>
            <Styled.Pokemontitle>{name}</Styled.Pokemontitle>
            <img src={data.sprites.front_default} alt="" />
            <Styled.PokemonHeading>Характеристики</Styled.PokemonHeading>
            <Styled.PokemonListState>
                {data.stats.map(
                    (el: { base_stat: string; stat: { name: string } }) => {
                        return (
                            <Styled.PokemonitemState>
                                {el.stat.name}:{el.base_stat}
                            </Styled.PokemonitemState>
                        );
                    }
                )}
            </Styled.PokemonListState>
            <Styled.PokemonHeading>Способности</Styled.PokemonHeading>
            <Styled.PokemonListState>
                {data.abilities.map((el: { ability: { name: string } }) => {
                    return (
                        <Styled.PokemonitemState>
                            {el.ability.name}{" "}
                        </Styled.PokemonitemState>
                    );
                })}
            </Styled.PokemonListState>
            <Link to={"/"}>Вернуться</Link>
        </Styled.PokemonWrappen>
    );
};
