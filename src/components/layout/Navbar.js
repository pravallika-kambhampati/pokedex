import React, { Component } from 'react';


export default class Navbar extends Component {
    render() {
        return (
            <div>
             <nav style={{ backgroundColor: "#ef5350" }} className="navbar navbar-expand-md navbar-dark fixed-top">
                 <a href="" className="navbar-brand col-sm-3 col-md-2 mr-0 align-items-center" >Pokedex</a>
             </nav>
            </div>
        )
    }
}