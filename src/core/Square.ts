import { Point,IViewer } from './types';
export class Square {
  private _point:Point = {
    x:0,
    y:0
  };
  private _color:string = '';
  private _viewer?:IViewer;
  public get viewer(){
    return this._viewer;
  }
  public set viewer(value){
    this._viewer = value;
    if(value){
      value.show();
    }
  }
  public get color(){
    return this._color;
  }
  public set color(value){
    this._color = value;
  }
  public get point(){
    return this._point;
  }
  public set point(value){
    this._point = value;
    if(this._viewer){
      this._viewer.show();
    }
  }
}