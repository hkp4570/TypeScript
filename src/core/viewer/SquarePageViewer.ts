
import { Square } from './../Square';
import $ from 'jquery';
import { IViewer } from '../types';
import PageConfig from './PageConfig';

// HTMLElement 表示一个html元素 原生dom的元素
// JQuery<HTMLElement>  表示jquery元素

// export class SquarePageViewer implements IViewer{
//   private dom?:JQuery<HTMLElement>;
//   private isRemove:boolean = false; //是否已经移除过
//   constructor(
//     private square:Square,
//     private container:JQuery<HTMLElement>
//   ){
//
//   }
//   show(): void {
//     if(this.isRemove){
//       return;
//     }
//     if(!this.dom){
//       this.dom = $('<div>').css({
//         position:'absolute',
//         width:PageConfig.SquareSize.width,
//         height:PageConfig.SquareSize.height,
//         border:'1px solid #ccc',
//         boxSizing:'border-box'
//       }).appendTo(this.container);
//     }
//     this.dom.css({
//       left:this.square.point.x * PageConfig.SquareSize.width,
//       top:this.square.point.y * PageConfig.SquareSize.height,
//       background:this.square.color,
//     })
//   }
//   remove(): void {
//     if(this.dom && !this.isRemove){
//       this.dom.remove();
//       this.isRemove = true;
//     }
//   }
// }

export class SquarePageViewer implements IViewer{
  private dom?:JQuery<HTMLElement>;
  private isRemove:boolean = false;
  constructor(
    private square:Square,     //展示谁  小方块
    private container:JQuery<HTMLElement>   //容器，小方块在哪里展示
  ){}

  remove(): void {
    if(this.dom && !this.isRemove){
      this.dom.remove();
      this.isRemove = true;
    }
  }

  show(): void {
    if(this.isRemove){
      return;
    }
    if(!this.dom){
      this.dom = $('<div>').css({
        position:'absolute',
        width:PageConfig.SquareSize.width,
        height:PageConfig.SquareSize.height,
        border:'1px solid #ccc',
        boxSizing:'border-box'
      }).appendTo(this.container)
    }

    this.dom.css({
      left:this.square.point.x * PageConfig.SquareSize.width,
      top:this.square.point.y * PageConfig.SquareSize.height,
      background:this.square.color,
    })
  }
}
