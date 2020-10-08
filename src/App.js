import React from 'react';
import {Switch, Route, Redirect, NavLink} from 'react-router-dom';
import  Pokemon  from './containers/Pokemon';
import PokemonList from './containers/PokemonList';
import './App.scss';
import logoImg from './images/pokebola.png';


function App() {
  return (
    <div className="App">
      <header>
        <img className="pokebola" src={logoImg} alt="" />
        <nav className="nav">
          <NavLink to={"/"}>
            Home
          </NavLink>
      </nav>
      </header>
      <Switch>
          <Route path={"/"} exact component={PokemonList} />
          <Route path={"/pokemon/:pokemon"} exact component={Pokemon} />
          <Redirect to={"/"} />
      </Switch>
    </div>
  );
}

export default App;
