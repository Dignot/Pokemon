import * as Styled from "./index.styled";

export const PokemonFavourites = (props: {
    favourite: boolean;
    is: () => void;
}) => {
    const { favourite, is } = props;

    return (
        <>
            <Styled.buttonFavourites
                onClick={() => {
                    is();
                }}
            >
                {favourite ? "Избранное" : "Назад"}
            </Styled.buttonFavourites>
        </>
    );
};
