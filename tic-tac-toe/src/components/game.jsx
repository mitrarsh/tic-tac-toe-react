import React from 'react';
import Board from './board';
import { useState } from 'react';


const Game = () => {
    
    const[xIsNext, setxIsNext] = useState(true);
    const[history, setHistory] = useState([Array(9).fill(null)]);
    const[currentMove, setCurrentMove]= useState(0);
    const currentSquares= history[currentMove];
    
   const handlePlay=(nextSquares)=>{
        const nextHistory= [...history.slice(0, currentMove+1), nextSquares];
        setxIsNext(!xIsNext);
        setHistory(nextHistory);
        setCurrentMove(nextHistory.length-1);
    }

    const jumpTo=(move)=>{
        setCurrentMove(move);
        setxIsNext(move%2===0)

    }

    return ( 
         <div className="game">
      <div className="game-board">
        <Board 
        xIsNext={xIsNext}
        squares={currentSquares}
        onPlay={handlePlay}
        />
      </div>
      <div className="game-info">
        <ol>{history.map((squares, move) => (
            <li key={move}>
              <button onClick={() => jumpTo(move)}>
                {move === 0 ? 'Go to game start' : `Go to move #${move}`}
              </button>
            </li>
          ))}
        </ol>
      </div>
    </div>
     );
}
 
export default Game;