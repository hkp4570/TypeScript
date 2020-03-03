import React from 'react';
import {ChessType, GameStatus} from "../types/enums";
import {BoardComp} from "./boardComp";
import { GameStatusComp } from './gameStatusComp';

interface IState {
    chesses:ChessType[],    //棋子的类型
    gameStatue:GameStatus,  //游戏的状态
    nextChess:ChessType.red | ChessType.black,   //下一颗棋子的类型
}
export default class GameComp extends React.Component<{},IState>{
    constructor(props:{}){
        super(props);
        this.state={
            chesses:[],
            gameStatue:GameStatus.gaming,
            nextChess:ChessType.black,
        }
    };
    componentDidMount(): void {
        this.init();
    }
    /**
     * 初始数据
     */
    init(){
        const arr:ChessType[] = [];
        for (let i = 0; i < 9; i++) {
            arr.push(ChessType.none);
        }
        this.setState({
            chesses:arr,
            gameStatue:GameStatus.gaming
        });
    };

    /**
     * 点击棋子的处理函数
     * 1.游戏没有结束
     * 2.点击的位置没有棋子
     * @param index
     */
    handleChessClick(index:number){
        const chesses:ChessType[] = [...this.state.chesses];
        chesses[index] = this.state.nextChess;
        this.setState(prevState => ({
            chesses,
            nextChess:prevState.nextChess === ChessType.red ? ChessType.black : ChessType.red,
            gameStatue:this.getStatus(chesses,index),
        }));
    };

    getStatus(chesses:ChessType[],index:number):GameStatus{
        // 1.判断是否有一方获得胜利
        const horMin = Math.floor(index / 3) * 3;
        const verMin = index % 3;
        if((chesses[horMin] === chesses[horMin + 1] && chesses[horMin] === chesses[horMin + 2])
        || (chesses[verMin] === chesses[verMin + 3] && chesses[verMin] === chesses[verMin + 6])
        || (chesses[0] === chesses[4] && chesses[0] === chesses[8] && chesses[0] !== ChessType.none)
        || (chesses[2] === chesses[4] && chesses[2] === chesses[6] && chesses[2] !== ChessType.none)){
            if(chesses[index] === ChessType.red){
                return GameStatus.redWin
            }else{
                return GameStatus.blackWin;
            }
        }
        //2.判断是否平局   棋盘数组中不包含空棋子
        if(!chesses.includes(ChessType.none)){
            return GameStatus.draw;
        }

        //3.游戏正在进行
        return GameStatus.gaming;
    };
    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        return(
            <div style={{ textAlign:'center' }}>
                <h1>三连棋游戏</h1>
                <GameStatusComp
                    status={this.state.gameStatue}
                    next={this.state.nextChess}
                />
                <BoardComp
                    chesses={this.state.chesses}
                    isGameOver={this.state.gameStatue !== GameStatus.gaming}
                    onClick={(i)=>this.handleChessClick(i)}
                />
                <button onClick={() => {
                    this.init()
                }}>重新开始</button>
            </div>
        )
    }
}
