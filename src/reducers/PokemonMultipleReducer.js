const DefaultState = {
    loading: false,
    data: [],
    errorMsg : ""

};

const PokemonMultipleReducer = (state = DefaultState ,action) => {
    switch (action.type){
        case "POKEMON_MULTIPLE_LOADING":
            return {
                ...state,
                loading: true,
                errorMsg : ""
            };

        case "POKEMON_MULTIPLE_FAIL":
            return {
                ...state,
                loading: false,
                errorMsg : "Não foi possível achar o Pokemon"
            };

        case "POKEMON_MULTIPLE_SUCCESS":
            return {
                ...state,
                loading: false,
                data: action.payload.results,
                errorMsg : "",
                data:{
                    ...state.data,
                    [action.pokemonName] : action.payload
                }
            };


        default:
            return state
    }

};

export default PokemonMultipleReducer