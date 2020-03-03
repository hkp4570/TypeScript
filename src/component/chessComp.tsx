import React from 'react';
import {ChessType} from "../types/enums";
import './chessComp.css';

interface IProps {
    type:ChessType
    onClick?:()=>void
}


export default function ChessComp(props:IProps) {
    let chess = null;
    if(props.type === ChessType.black){
        chess = <div className='black chess-item' />
    }else if(props.type === ChessType.red){
        chess = <div className='red chess-item' />
    }
    return(
        <div className='chess' onClick={() => {
            if(props.type === ChessType.none && props.onClick){
                props.onClick();
            }
        }}>
            {chess}
        </div>
    )
}
