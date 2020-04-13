const name = require('./module');
console.log(name);
import {log} from "util";
import {ArrayHelper} from "./ArrayHelper";
// 不可以加后缀名

// let say:string;
// say = "333";

// 选中函数名按下f2可以所有名称全部可修改
// function add(a:number,b:number):number{
//     return a + b;
// }
// let num : number = add(3,4);

//约束数组
// let nums:number[] = [1,2,3];
// let nums:Array<number> = [1,2];

// let n:number = null;

// 联合类型
// let name: string | undefined;
// if(typeof name === 'string'){
//     //类型保护
// }

// void
// function printMenu():void{
//     console.log('a');
// }

// never
// function throwError(msg:string):never{
//     throw new Error(msg);
// }

// 字面量约束   用于性别
// let a:'A';   let gender:'男'|'女'
// let arr:[]  arr永远只能取值为一个空数组
// let user:{
//     name:string
//     age:number
// }

// 元祖类型
// let arr:[number,string]

// 类型别名
// type user = {
//     name:string
//     age:number
//     gender:'男' | 'nv'
// }
// let u:user
// function getUser():user[]{
//     return [];
// }
// 函数的相关约束
//给函数明确两种情况，也只有这两种情况
// /**
//  * 得到a和b相乘的结果
//  * @param a
//  * @param b
//  */
// function combine(a:number,b:number):number;
// /**
//  * 得到a和b拼接的结果
//  * @param a
//  * @param b
//  */
// function combine(a:string,b:string):string;
// function combine(a:number|string,b:number|string):number|string{
//     if(typeof a ==='number' && typeof b === 'number'){
//         return a * b;
//     }
//     else if(typeof a ==='string' && typeof b === 'string'){
//         return a+b;
//     }
//     throw new Error('a和b必须是相同的类型');
// }
// const result = combine('a','a');

//可选参数(只能出现在末尾)   默认参数
// function sum(a:number,b:number = 0,c?:number){
//     if(c){
//         return a+b+c;
//     }else{
//         return a+b;
//     }
// }
// sum(3,4);
// sum(3,4,5)

// 枚举
// enum Gender{
//     male='男',
//     female='女'
// }
// let gender:Gender;
// gender = Gender.male;
// gender = Gender.female;
// console.log(gender);

// 数字枚举
// enum level{
//     leval1,
//     level2
// }
// let l:level = level.leval1;
// l = level.level2;
// console.log(l);

// 位运算
// enum Permission{
//     Read=1,   //0001
//     Write=2,  //0010
//     Create=4, //0100
//     Delete=8  //1000
// }
//1.如何组合权限
// 使用或运算
// 0001
// |
// 0010
// 0011
// let p = Permission.Read | Permission.Write;

//2.如何判断是否拥有某个权限
// 0011
// 且 &
// 0010
// 0010
// function hasPermission(target:Permission,per:Permission){
//     return (target & per) === per;
// }
//判断变量p是否拥有可读权限
// console.log(hasPermission(p,Permission.Write));

//如何删除某个权限    ^异或运算
// p = p ^ Permission.Write;

// 模块化
// console.log(name)

//特殊情况
// import fs from "fs"
// fs 导出   module.export = {}

// import {readFileSync}  from 'fs';
// readFileSync('./')

// import * as fs from 'fs';     //针对于 module.exports={} 这种导出方式
// fs.readFileSync('./')

// import fs from "fs"     //添加esModuleInterop配置

// 项目必须使用commonjs导入
// import myModule form './module';


//接口
//接口约束对象
// interface User{
//     name:string,
//     age:number
// }
//与类型别名的区别，接口可以约束类
// type User = {
//     name:string,
//     age:number
// }
// let u : User = {
//     name:'hkp',
//     age:18
// }

//接口约束函数
// interface User{
//     name:string,
//     age:number,
//     sayHello():void
// }
// let u : User = {
//     name:'hkp',
//     age:18,
//     sayHello() {
//         console.log('aaa');
//     }
// }

// type Condition = (n:number) => boolean
// interface Condition {
// //     (n:number):boolean
// // }
// // function sum(numbers:number[],callback:Condition) {
// //     let s = 0;
// //     numbers.forEach(n => {
// //         if(callback(n)){
// //             s += n;
// //         }
// //     })
// // }
// // const  result = sum([1,2,3,4],n => n % 2 !== 0);
// // console.log(result);

//接口的继承  类型别名的交叉类型
// interface A {
//     T1:string
// }
// interface B{
//     T2:number
// }
// interface C extends B , A{
//     T3:boolean
// }
// type A = {
//     T1:string
// }
// type B = {
//     T2:number
// }
// type C ={
//     T3:boolean
// } & A & B
//
// let u:C = {
//     T1:'a',
//     T2:1,
//     T3:true
// }

//readonly 修饰符
// interface User{
//     readonly  id:string,
//     name:string,
//     age:number,
//     readonly arr: readonly string[]       //只读的属性和数组内容
// }
// let u:User = {
//     id:'1',
//     name:'hkp',
//     age:18,
//     arr:['a','b']
// }
//
// const arr:readonly number[] = [1,2,3];      //数组中的值是只读的

//类型兼容
// interface  Duck{
//     sound:'嘎嘎嘎',
//     swin():void
// }
// let person = {
//     name:'hkp',
//     age:111,
//     sound:'嘎嘎嘎' as '嘎嘎嘎',
//     swin(){
//         console.log('gagaga');
//     }
// }
// let duck:Duck = person;

//对象直接量直接赋值
// let duck:Duck = {
//     name:'hkp',
//     age:111,
//     sound:'嘎嘎嘎' as '嘎嘎嘎',
//     swin(){
//         console.log('gagaga');
//     }
// }

//函数类型
// interface Condition {
//     (n:number,i:number):boolean
// }
// function sum(numbers:number[],callback:Condition) {
//     let s = 0;
//     numbers.forEach((n,i) => {
//         if(callback(n,i)){
//             s += n;
//         }
//     })
// }
// const  result = sum([1,2,3,4],n => n % 2 !== 0);
// console.log(result);

//类     不允许在类或者对象中动态的增加属性
// class User {
//     readonly id:number   //不能改变
//     gender:"男" | "女" = "男"
//     pid?:string                   //可选属性
//
//     //不希望外部使用的属性
//     private _publishNumber:number = 3
//     private _curNumber:number = 0
//
//     constructor(public name:string,private _age:number,gender:"男" | "女" = "男"){
//         this.id = Math.random();
//         this.name = name;
//         this._age = _age;
//         this.gender = gender;
//     };
//
//     set age(value:number){
//       if(value < 0){
//           this._age = 0;
//       }  else if(value >= 200){
//           this._age = 200;
//       }else{
//           this._age = value;
//       }
//     };
//
//     get age(){
//         return Math.floor(this._age);
//     }
// }
// //age为访问器属性
// const u = new User('aa',15);     //只能有这两个属性，动态添加属性会报错
//gender 可以有默认值，不用每次都传

//泛型
// function take<T>(arr:T[],n:number):T[] {
//     if(n >= arr.length){
//         return arr;
//     }
//     const newArr:T[] = [];
//     for (let i = 0; i < n; i++) {
//         newArr.push(arr[i]);
//     }
//     return newArr;
// }
// const result = take<number>([2,5,2,5],2);
// const newArr = take([2,4,5,5,1],2);

//如何在类型别名、接口、类中使用泛型
//回调函数：判断数组中的某一项是否满足条件
// type callback<T> = (n:T,i:number) => boolean;
// // interface callback<T>{
// //     (n:T,i:number):boolean
// // }
// function filter<T>(arr:T[],callback:callback<T>):T[] {
//     const newArr:T[] = [];
//     arr.forEach((n,i)=>{
//         if(callback(n,i)){
//             newArr.push(n);
//         }
//     });
//     return newArr;
// }
// console.log(filter([1,2,5,2,4],n => n % 2 !== 0));

//类的泛型
//  import ArrayHelper from './ArrayHelper';
//  const helper = new ArrayHelper([1,2,5,14]);

//泛型约束
// interface hasNameProperty {
//     name:string,
// };
// /*
// 将某个对象的name属性的每个单词的首字母大写，然后将该对象返回
//  */
// function nameToUpperCase<T extends hasNameProperty>(obj:T):T {
//     // obj.name = obj.name ...
//     return obj;
// }
// nameToUpperCase({
//     name:'hkp'
// })

//多泛型
//将两个数组进行混合 [1,2,3]  ['a','b','c']   [1,'a',2,'b',3,'c']
// function mixinArray<T,K>(arr1:T[],arr2:K[]):(T | K)[] {
//     if(arr1.length != arr2.length){
//         throw new Error('两个数组长度不等');
//     }
//     let result:(T | K)[] = [];
//     for (let i = 0; i < arr1.length ; i++) {
//         result.push(arr1[i]);
//         result.push(arr2[i]);
//     }
//     return result;
// }

















