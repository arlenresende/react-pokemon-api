import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GetPokemon } from '../actions/PokemonActions';
import _ from 'lodash';

const Pokemon = (props) => {
    const pokemonName = props.match.params.pokemon;
    const dispatch = useDispatch();
    const PokemonState = useSelector(state => state.Pokemon);

    React.useEffect(() => {
        dispatch(GetPokemon(pokemonName))
      }, []);

   
    const ShowData = () => {
        if (!_.isEmpty(PokemonState.data[pokemonName])){

        

            const pokeData = PokemonState.data[pokemonName]

            var divStyle = {
                backgroundImage: `url(https://pokeres.bastionbot.org/images/pokemon/${pokeData.id}.png)`
            }
            return  (

                
                <div className="page" style={divStyle}>
                    <div className="page-wrapper">
                        <div className="item">
                            <h2>Sprites</h2>
                            <img src={pokeData.sprites.front_default} alt=""/>
                            <img src={pokeData.sprites.back_default} alt=""/>
                            <img src={pokeData.sprites.front_shiny} alt=""/>
                            <img src={pokeData.sprites.back_shiny} alt=""/>
                        </div>
                        <div className="item">
                            <h2>Estatísticas</h2>
                            {pokeData.stats.map (el => {
                                return <p>{el.stat.name} :  <span>{el.base_stat}</span></p>
                            })}
                        </div>

                        <div className="item">
                            <h2>Tipo</h2>
                            {pokeData.types.map (el => {
                                return <p>{el.type.name}</p>
                            })}
                        </div>

                        <div className="item">
                            <h2>Habilidade</h2>
                            {pokeData.abilities.map (el => {
                                return <p>{el.ability.name} </p>
                            })}
                        </div>
                        
                    </div>
                   
                </div>
            )
        }

        if(PokemonState.loading){
            return <p>Carregando.....</p>
         }
         
        if(PokemonState.errorMsg !== ""){
            return <p>{PokemonState.errorMsg }</p>
         }
         return <p>Não foi possivel carregar o pokemon</p>
    }


    return (
        <div className="pokemon-page">
        <h1>{pokemonName}
        </h1>
        {ShowData()}
    </div>
    );
};
export default Pokemon