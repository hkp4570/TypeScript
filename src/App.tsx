import React from 'react';
// import CountComp from './component/CountComp';
// import ChessComp from './component/chessComp';
import GameComp from "./component/gameComp";
import Count from './count/Count';

import {
    BrowserRouter as Router,
    Route,
    Switch,
    NavLink
} from 'react-router-dom';

function App() {
    return (
        <div>
            <Router>
                <>
                    <div>
                        <NavLink to="/gameComp">三字棋游戏</NavLink>
                        <NavLink to='/count'>计数</NavLink>
                    </div>
                    <div >
                        <Switch>
                            <Route path='/gameComp' exact component={GameComp}></Route>
                            <Route path='/count' exact component={Count}></Route>
                        </Switch>
                    </div>
                </>
            </Router>
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
