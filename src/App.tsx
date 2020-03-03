import React from 'react';
// import CountComp from './component/CountComp';
// import ChessComp from './component/chessComp';
import GameComp from "./component/gameComp";

function App() {
    return (
        <div>
            <GameComp />
        </div>
    );
}

export default App;

// function App() {
//     const [count,setCount] = useState(0);
//   return (
//     <div className="App">
//       <CountComp num={count} onChange={(n) => setCount(n)} />
//     </div>
//   );
// }
//
// export default App;
