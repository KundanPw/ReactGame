import { useState } from "react";
import Card from "../Card/Card";
import './Grid.css';

function Grid({numberOfCards}) {
    const [ turn, setTurn ] = useState(true); // if true-> 0, flase->x
    function Play(){
        console.log("move turn");
        setTurn(!turn)
    }
    return(
        <>
            <h1 className="turn-heighlight">Current turn: {(turn)? 'O': 'X' }</h1>
            <div className="grid">
                {Array(9).fill(<Card />).map((el, idx)=>{
                    return <Card onPlay={Play} key={idx}/>
                })}
            </div>
        </>
    )
}

export default Grid;