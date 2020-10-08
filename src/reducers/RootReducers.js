import {combineReducers} from 'redux';
import PokemonListReducer from './PokemonListReducer';
import PokemonMultipleReducer from './PokemonMultipleReducer';

const RootReducers = combineReducers( {

    PokemonList : PokemonListReducer,
    Pokemon: PokemonMultipleReducer

});

export default RootReducers;