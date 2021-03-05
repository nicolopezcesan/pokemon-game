import { axiosInstance } from './index';

export const getPokemons = async () => {
    const BASE_URL = 'https://pokeapi.co/api/v2/'
    // const PARAMS = 'pokemon?limit=16&offset=2'
    const PARAMS = 'pokemon?limit=1&offset=2'
    const URL = `${BASE_URL}${PARAMS}`

    const res = await axiosInstance(URL)
    const pokemons = res.results
    return pokemons
}
