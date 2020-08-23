import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Card = styled.div`
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
    &:hover {
        box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
    -moz-user-select: none;
    -website-user-select: none;
    -ms-user-select: none;
    user-select: none;
    -o-user-select: none;    
}
`
const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }

`


export default class PokemonCard extends Component {

    state = {
        name : '',
        imageURL: '',
        pokemonIndex: ''
    }


    async componentDidMount() {
        const { name, url } = this.props;

        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);

        console.log(res);

        const pokemonIndex = res.data["id"];

        console.log(pokemonIndex)
        //const pokemonIndex = url.split("/")[url.split("/").length -2];
        const imageURL = `https://raw.githubusercontent.com/PokeAPI/sprites/a907856d8a243bc97fc8eb3b5d5fd61d593e28ec/sprites/pokemon/other/dream-world/${pokemonIndex}.svg`;
        // https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/${pokemonIndex}.png
        this.setState({
          name,
          imageURL,
          pokemonIndex
    })

    }




    render() {

       


        return (
            <div className="col-md-3 col-sm-6 mb-5">
                <StyledLink to={`pokemon/${this.state.pokemonIndex}`}>
                <Card className="card">  
                    <h5 className="card-header">{ this.state.pokemonIndex }</h5>
                    <img className="card-img-tag rounded mx-auto mt-2"
                        src={this.state.imageURL}
                        style={{ height: "5em", width: "5em"}}
                    />
                    <div className="card-body mx-auto">
                        <div className="card-title">
                        {this.state.name}
                        </div>
                    </div>
                </Card>
                </StyledLink> 
            </div>
        )
    }
}
