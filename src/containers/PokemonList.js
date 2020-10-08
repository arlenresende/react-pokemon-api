import React, { useState } from 'react';
import {useDispatch, useSelector} from "react-redux";
import _ from "lodash";
import { GetPokemonList } from '../actions/PokemonActions';
import { Link } from "react-router-dom";
import ReactPaginate from 'react-paginate';



const PokemonList = (props) => {
     const [search,setSearch] = useState("");
     const dispatch = useDispatch();
     const pokemonList = useSelector(state => state.PokemonList);
     
     React.useEffect(() => {
        FetchData(1)
      }, []);

      const FetchData = (page = 1) => {
        dispatch(GetPokemonList(page))
      }
    
  
     const ShowData = () => {

      if(pokemonList.loading){
        return <p>Carregando.....</p>
      }


      if(!_.isEmpty(pokemonList.data)){
      console.log(pokemonList.data);
        return(
            <div className={"pokemon-container"} >
              {pokemonList.data.map((el,index) => {
                let url = el.url;
                let array = url.split('/');
                let lastsegment = array[array.length-2];
                console.log(lastsegment);
                return(

                  <Link to={`/pokemon/${el.name}`}>
                    <div className={"pokemon-card"} key={index} >
                      <svg viewBox="0 0 204.54 207.46" class="pokeball"><path d="M9.57,128.66l60.57,0s.42,1.17,1.49,3.35c10.51,22.12,34.09,31.79,56.93,22.92,12.07-4.69,20.49-13.53,24.76-26.27h60.6c-3.66,40.18-40.45,85.21-95.06,88.75C60.8,221.14,15.86,177.72,9.57,128.66Z" transform="translate(-9.57 -10.14)"></path> <path d="M214.11,99.09H153.33a15.33,15.33,0,0,0-1.28-3.46c-8-16.74-21.42-25.84-39.89-25.95C93.44,69.56,80,78.77,71.65,95.58c-.77,1.53-1.51,3.51-1.51,3.51H9.79c5.15-45.56,47-89.37,102.94-88.95S209.31,54.53,214.11,99.09Z" transform="translate(-9.57 -10.14)"></path> <path d="M111.72,134.54a20.39,20.39,0,1,1,20.53-19.9A20.5,20.5,0,0,1,111.72,134.54Z" transform="translate(-9.57 -10.14)"></path></svg>
                      <h2 className="title">{el.name}</h2>
                      <img src={`https://pokeres.bastionbot.org/images/pokemon/${lastsegment}.png`} alt=""/>
                     
                    </div>
                  </Link>
                )
              })}
            </div>
          )
      }

       
         
      if(pokemonList.errorMsg !== ""){
        return <p>{pokemonList.errorMsg }</p>
      }

      return <p>Não foi possivel carregar o arquivo</p>

    }

    return (
        <div>
            <div className="search-wrapper">
               <h2>Faça uma Busca</h2>
               <div className="input-wrapper">
                <input type="text" placeholder='Busque pelo nome do pokemon'  className="text"  onChange={e => setSearch(e.target.value)}/>
                <button onClick={() => props.history.push(`pokemon/${search}`)}>
                  Buscar
                </button>
               </div>
            </div>
            {ShowData()}
            { !_.isEmpty(pokemonList.data) && (
              <ReactPaginate
                pageCount={Math.ceil(pokemonList.count / 15)}
                pageRangeDisplayed = {2}
                marginPagesDisplayed={1}
                onPageChange = {(data) => FetchData(data.selected + 1)}
                containerClassName={"pagination"}
               />
            )}
        </div>
    )
};

export default PokemonList