import React, { Component } from 'react';


export default class Navbar extends Component {



    render() {
        return (
            <div>
             <nav style={{ backgroundColor: "#ef5350" }} className="navbar navbar-expand-md navbar-dark fixed-top justify-content-between">
                 <a href="" className="navbar-brand col-sm-3 col-md-2 mr-0 align-items-center" >Pokedex</a>
                 <form class="form-inline">
                 <input onChange={this.props.forsearch} value={this.props.forvalue} class="form-control mr-sm-2" type="search" placeholder="Search" />
                </form>
             </nav>
            </div>
        )
    }
}
