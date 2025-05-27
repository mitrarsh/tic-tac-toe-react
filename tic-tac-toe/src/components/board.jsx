import React, { Component } from 'react';
import Square from './square';

class Board extends Component {
    state = {  } 
    render() { 
        return (
            <div>
                <div className='board-row'>
                    <Square/>
                    <Square/>
                    <Square/>
                    </div>
                <div className='board-row'>
                    <Square/>
                    <Square/>
                    <Square/>
                    </div>
                <div className='board-row'>
                    <Square/>
                    <Square/>
                    <Square/>
                    </div>
                </div>
        );
    }
}
 
export default Board;