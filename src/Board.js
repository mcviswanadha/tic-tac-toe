import React, { useState } from 'react';
import Square from './Square';
import './Board.css';

function Board() {
    const status = 'Next turn: X';
    const [turn,setTurn] = useState([]);

    const handleClick = (i) => {
        const squares = turn.squares.slice();
        squares[i] = 'X';
        setTurn({squares: squares});
    }

    const renderSquare = (i) => {
        return (
            <Square 
                value={turn.squares[i]} 
                onClick={() => {handleClick(i)}}
            />
        );
    }

    return (
        <div>
            <div className="status">
                {status}
            </div>

            <div className="board-row">
                {renderSquare(0)}
                {renderSquare(1)}
                {renderSquare(2)}
            </div>

            <div className="board-row">
                {renderSquare(3)}
                {renderSquare(4)}
                {renderSquare(5)}
            </div>

            <div className="board-row">
                {renderSquare(6)}
                {renderSquare(7)}
                {renderSquare(8)}
            </div>
        </div>
    )
}

export default Board
