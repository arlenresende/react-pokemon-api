import axios from 'axios';
import Pokemon from '../containers/Pokemon';


export const GetPokemonList = (page) => async dispach => {
    try {

        dispach({
            type: "POKEMON_LIST_LOADING"
        });

        const perPage = 15;
        const offset = (page * perPage) - perPage;

        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=${perPage}&offset=${offset}`);

        console.log(res);
        dispach({
            type: "POKEMON_LIST_SUCCESS",
            payload: res.data
        })

    } catch (e){

        dispach({
            type: "POKEMON_LIST_FAIL"
        })
    }

}

export const GetPokemon = (pokemon) => async dispach => {

    try {

        dispach({
            type: "POKEMON_MULTIPLE_LOADING"
        });

        

        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);

        
        dispach({
            type: "POKEMON_MULTIPLE_SUCCESS",
            payload: res.data,
            pokemonName: pokemon
        })

    } catch (e){

        dispach({
            type: "POKEMON_MULTIPLE_FAIL"
        })
    }


}