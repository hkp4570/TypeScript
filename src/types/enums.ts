export enum ChessType{
    none,
    red,
    black
}
// export enum NextChess{
//     red = ChessType.red,
//     black = ChessType.black,
// }
export enum GameStatus{
    /**
     * 游戏正在进行
     * 红方胜利
     * 黑方胜利
     * 平局
     */
    gaming,
    redWin,
    blackWin,
    draw,
}
