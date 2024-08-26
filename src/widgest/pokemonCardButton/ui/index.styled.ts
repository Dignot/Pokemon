import styled from "styled-components";

export const buttonRemove = styled("button")`
    border: 0;
    background: grey;
    border-radius: 100px;
    padding: 10px 20px;
    cursor: pointer;
`;
interface b {
    favourites: boolean;
}

export const buttonFavorurites = styled("button")<b>(({ favourites }) => ({
    border: "none",
    color: favourites ? "red" : "blue",
    background: "none",
    cursor: "pointer",
    position: "absolute",
    top: "10px",
    right: "10px",
}));

export const svg = styled("svg")`
    pointer-events: none;
`;
