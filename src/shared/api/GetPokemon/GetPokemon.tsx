import http from "../axios";

export const getPokemonName = () => http.get(`/?limit=10&offset=0`);

export const getPokemonData = (url: string) => http.get(`/${url}`);
