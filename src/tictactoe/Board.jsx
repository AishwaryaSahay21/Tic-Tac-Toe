import React, {useState} from 'react'
import Square from './Square'

export default function Board() {
  const [state, setState] = useState(Array(9).fill(null));
  const [Xturn, setXturn] = useState(true);

  console.log("state ",state);
   let winner =0;


  let WinWin = () =>{
     const WinList = [
          [0,1,2],
          [3,4,5],
          [6,7,8],
          [0,4,8],
          [2,4,6],
          [0,3,6],
          [1,4,7],
          [2,5,8]
     ]
     for (let i = 0; i < WinList.length; i++) {
          const element = WinList[i];
          let a=element[0], b=element[1], c= element[2];
          if(state[a]===state[b] && state[b]===state[c] && state[a]!==null){
               console.log("matched");
               winner = state[a];
               return true;
          }
     }
          return false;
  }

  const isWinner = WinWin();
 
  let handleOnclick = (index) => {
     console.log("Clicked on " +index);
     const copystate = [...state];     // to copy state
     if(copystate[index]===null){
     copystate[index] = Xturn ? "X" : "O" ;
     setState(copystate);
     setXturn(!Xturn); }
  }

  let handleReset = () => {
     setState(Array(9).fill(null));
  }

  return (
     <div className='container'>
     <div className='mainbox'>
    <div className='board'>
     {isWinner ? (<>{winner} is the Winner</> ):( 
     <>
        <div className="rows">
             <Square onClick={()=> handleOnclick(0)} value={state[0]}/>
             <Square onClick={()=> handleOnclick(3)} value={state[3]}/>
             <Square onClick={()=> handleOnclick(6)} value={state[6]}/>
        </div>
        <div className="rows">
             <Square onClick={()=> handleOnclick(1)} value={state[1]}/>
             <Square onClick={()=> handleOnclick(4)} value={state[4]}/>
             <Square onClick={()=> handleOnclick(7)} value={state[7]}/>
        </div>
        <div className="rows">
             <Square onClick={()=> handleOnclick(2)} value={state[2]}/>
             <Square onClick={()=> handleOnclick(5)} value={state[5]}/>
             <Square onClick={()=> handleOnclick(8)} value={state[8]}/>
        </div>
        </> ) }
    </div>
    <div className="back">Tic-Tac-Toe</div>
    </div>
    <div>
     <button className="btn" onClick={handleReset}>Play Again!!</button>
    </div>
    </div>
    
  )
}
