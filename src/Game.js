import React from 'react';
import Board from './Board';
import './Game.css';

function Game() {
    return (
        <>
            <div className='game'>
                <div className='game-board'>
                    <Board />
                </div>
            </div>
            <div className='game-info'>
                <div>
                    {/* status */}
                </div>
                <ol>
                    {/* TODO */}
                </ol>
            </div>
        </>
    )
}

export default Game
