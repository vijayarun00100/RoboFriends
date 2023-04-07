import React,{Component} from 'react';
import './Card.css';


const Card = (props) => {
    return(
        <div className='wel grow'>
            <img src={`https://robohash.org/${props.id}?200x200`} alt="robot" sytle={{height:"200px",width:"200px"}}></img>
            <div>
                <h1>{props.name}</h1>
                <p1>{props.email}</p1>
            </div>
        </div>
    );
}

export default Card;