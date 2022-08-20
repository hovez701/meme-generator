import React from 'react';
import './Card.css';

function Card(props){
    const [isImportant, setIsImportant] = React.useState('Yes')
    function handleClick(){
        setIsImportant(isImportant ==="No" ? "Yes":"No")
    }

    const [counter, setCounter] = React.useState(0);
    function plus(){
        setCounter(counter+1)
    }
    function minus(){
        setCounter(counter-1)
    }

    return (
        <div className="card--container">
            <img src={props.img} alt="house" className="card--image"/>
            <div className="card--summary">
                <span className="card--location"> {props.location}</span>
                <div className="card--rating">
                    <span className="card--score">{props.score}</span>
                    <i className="fa fa-star card--star"></i>
                </div>
            </div>
            <div className="further details">
                <p className="card--host">{props.host}</p>
                <p className="card--availability">{props.availability}</p>
                <p className="card--cost">{props.cost}</p>
                <p onClick={handleClick}>{isImportant}</p>

            </div>
            <div>{counter}</div>
            <div onClick={plus}>+</div>
            <div onClick={minus}>-</div>

        </div>
    )
}

export default Card