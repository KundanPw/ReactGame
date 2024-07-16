import { useState } from "react";
import Card from "../Card/Card";
import isWinner from "../helper/CheckWinner";
import { ToastContainer, toast } from 'react-toastify';

import './Grid.css';
import 'react-toastify/dist/ReactToastify.css';


function Grid({numberOfCards}) {
    const [ turn, setTurn ] = useState(true); // if true-> 0, flase->x
    const [ board, setBoard ] = useState(Array(numberOfCards).fill("")); // [" "," "," "," "," "," "," "," "," "]
    const [ winner, setWinner ] = useState(null);

    function Play(index){
        if(turn == true) {
            board[index] = "O";
        } else {
            board[index] = "X";
        }
        let win = isWinner(board, turn ? "O" : "X");
        if(win) {
            setWinner(win);
            toast.success(`Congratulation ${win} win the game`);
        }
        setBoard([...board]);
        setTurn(!turn);
    }

    function reset() {
        setBoard(Array(numberOfCards).fill(""));
        setWinner(null);
        setTurn(true);
    }
    return(
        <div className="gridWrapper">
            {winner && (
                <>
                    <h1 className="win">Winner is {winner}</h1>
                    <button className="reset" onClick={reset}>Reset Game</button>
                    <ToastContainer position="top-center" />
                </>
            )}
            <h1 className="turn-heighlight">Current turn: {(turn)? 'O': 'X' }</h1>
            <div className="grid">
                {board.map((value, idx)=>{
                    return <Card gameEnd= {winner? true: false} onPlay={Play} player={value} key={idx} index={idx}/>
                })}
            </div>
        </div>
    )
}

export default Grid;