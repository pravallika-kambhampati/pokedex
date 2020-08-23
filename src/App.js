import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

import './App.css';
import NavBar from './components/layout/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Dashboard from './components/layout/Dashboard';
import backgroundImage from './pattern.png';
import Pokemon from './components/Pokemon/Pokemon';
import SearchCard from './components/SearchResults/SearchCard';

const  all = ["bulbasaur", "ivysaur", "venusaur","charmander","charmeleon","charizard","squirtle", "wartortle", "blastoise", "caterpie", "metapod","butterfree", "weedle","kakuna","beedrill","pidgey","pidgeotto","pidgeot","rattata","raticate","spearow","fearow",
"ekans","arbok","pikachu","raichu","sandshrew","sandslash","nidoran-f","nidorina","nidoqueen","nidoran-m","nidorino","nidoking","clefairy","clefable","vulpix","ninetales","jigglypuff","wigglytuff","zubat","golbat","oddish","gloom","vileplume","paras","parasect","venonat","venomoth","diglett","dugtrio",
"meowth","persian","psyduck","golduck","mankey","primeape","growlithe","arcanine","poliwag","poliwhirl","poliwrath","abra","kadabra","alakazam","machop","machoke","machamp","bellsprout","weepinbell","victreebel","tentacool","tentacruel","geodude","graveler","golem","ponyta","rapidash","slowpoke","slowbro","magnemite","magneton","farfetchd","doduo","dodrio",
"seel","dewgong","grimer","muk","shellder","cloyster","gastly","haunter","gengar","onix","drowzee","hypno","krabby","kingler","voltorb"]



class App extends Component {

  
state = {
   search: "",
   cards: [],
   searchActive : false
  }
  

  

  searchbar = (event) => {

    this.setState({searchActive: true})
    
    this.setState({search: event.target.value});

    console.log(this.state.search);  

    var res = all.map(i => {
        if(i.startsWith(event.target.value))
        {
            return i;
        }
    });

    var cleaned = res.filter(el => {
      return el != null;
    } )

    
    this.setState({cards: cleaned});
    
  }

  render() {
    return (
      <Router>
      <div className="App" style={{background: `url(${backgroundImage})`}}>
       <NavBar forvalue={this.state.search} forsearch={this.searchbar} />
      <div className="container">

       { 
       this.state.searchActive ? (

        <Switch>
          <Route exact path="/" component={() => <SearchCard data={this.state.cards} />} />
          <Route exact path="/pokemon/:pokemonIndex" component={Pokemon} />
        </Switch>

        


       ) : (
 
        <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route exact path="/pokemon/:pokemonIndex" component={Pokemon} />
      </Switch>

       )
       
       
       }

     

       

     </div>
    </div>
    </Router>

    )

  }
    



}

export default App;
