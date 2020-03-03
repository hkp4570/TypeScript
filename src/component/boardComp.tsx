import React from 'react';
import {ChessType} from "../types/enums";
import ChessComp from './chessComp';
import './boardComp.css';
//有默认值，默认游戏没有结束
interface IProps {
    chesses:ChessType[],
    onClick?:(n:number)=>void,
    isGameOver?:boolean
}
export const BoardComp:React.FC<IProps> =  function(props:IProps) {
    const isGameOver = props.isGameOver as boolean;   //类型断言，props.isGameOver的类型一定是boolean
    const list = props.chesses.map((type,i)=>(
        <ChessComp key={i} type={type} onClick={()=>{
            if(props.onClick && !isGameOver){
                props.onClick(i)
            }
        }} />
    ));
    return(
        <div className='board'>
            {list}
        </div>
    )
};
BoardComp.defaultProps = {
    isGameOver: false,
};
