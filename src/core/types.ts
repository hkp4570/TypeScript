import {SquareGroup} from "./SquareGroup";
import {Game} from "./Game";

export interface Point{
  readonly x:number,
  readonly y:number
}
export interface IViewer{
  show():void
  remove():void
}

/**
 * 形状
 */
export type Shape = Point[];

/**
 * 移动方向
 */
export enum MoveDirection{
  left,
  right,
  down
}

/**
 * 游戏状态
 */
export enum GameStatus{
  init,   //未开始
  playing,//进行中
  pause,  //暂停
  over,   //游戏结束
}


export interface GameViewer{
  /**
   *
   * @param teris 下一个方块对象
   */
  showNext(teris:SquareGroup):void;

  /**
   *
   * @param teris 切换的方块对象
   */
  switch(teris:SquareGroup):void;

  /**
   * 完成界面的初始化
   */
  init(game:Game):void;

  //显示分数
  showScore(score:number):void;

  onGamePause():void;

  onGameStart():void;

  onGameOver():void;
}
