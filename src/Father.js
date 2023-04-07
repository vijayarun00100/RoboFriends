import React from "react";
import Cardlist from "./Cardlist";
import Search from './Search';
import {robots} from './robots';
import './Father.css';
class Dad extends React.Component{
    constructor(){
        super()
        this.state={
            robots:robots,
            searchfield:""
        }
    }
    onsearchchange= (event) => {
        this.setState({
            searchfield:event.target.value
        })

    }
    render(){
        const filterrobots = this.state.robots.filter(robots=>{
            return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase()); 
        })
        console.log(filterrobots);
        return(
            <div className="tc dev">
                <h1 style={{fontFamily:'cursive',color:'white'}} className="f1">ROBO FRIENDS</h1>
                <Search searchchange={this.onsearchchange}/>
                <hr style={{backgroundColor:'red',margin:'20px'}}></hr>
                <Cardlist robo={filterrobots}/>
            </div>
        );
    }
}

export default Dad;