import React, { Component } from 'react'
import SearchComp from './SearchComp';

export default class PokemonList extends Component {

    render() {
        return (
            <React.Fragment>
                { this.props.data ?  (
                       <div className="row">
                         { this.props.data.map( p => (
                             <SearchComp 
                             key = {p}
                             name = {p}
                             url = {`https://pokeapi.co/api/v2/pokemon/${p}`}

                             />
                         )) }
                

                       </div>


                ) : (
                    <div>
                        Loading .. 
                    </div>    
                ) }
                 
            </React.Fragment>        

            
            
        )
    }
}
