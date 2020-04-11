
// function test(target:new (...args:any[]) => object){

// }

// @test
// class D {
//   prop1:string;
//   constructor(public prop2:string){}
// }


// 装饰器执行的顺序是从下往上
// function test(str:string){
//   return function(target:new (...args:any[]) => object){

//   }
// }
// function test1(target:new (...args:any[]) => object){
//   console.log()
// }

// @test('a')
// @test1
// class D {
//   prop1:string;
//   constructor(public prop2:string){}
// }


// 面试题   输出顺序  装饰器在类定义后运行
// function d1() {
//   console.log('d1');
//   return function (target: new (...args: any[]) => object) {
//     console.log('decorator d1');
//   }
// }
// function d2() {
//   console.log('d2');
//   return function (target: new (...args: any[]) => object) {
//     console.log('decorator d2');
//   }
// }

// @d1()
// @d2()
// class D {

// }


//属性装饰器    两个不同属性装饰器输出区别
// function d(target: any, key: string) {
//   console.log(target, key);
// }
// class D {
//   @d
//   prop1: string

//   @d
//   static prop2: string
// }

//方法装饰器
// function d() {
//   return function (target: any, key: string, decriptor: PropertyDescriptor) {
//     console.log(target, key, decriptor)
//   }
// }
// class D {
//   @d()
//   sayHello() { }
// }

// 练习
// function classDescriptor(type:string){
//   return function(target:new(...args:any[])=>object){
//     target.prototype.$classDescriptor = type;
//   }
// }
// function propDescriptor(type:string){
//   return function(target:any,key:string){
//     if(!target.$propDescriptors){
//       target.$propDescriptors = [];
//     }
//     target.$propDescriptors.push({
//       propName:key,
//       descriptor:type
//     })
//   }
// }
// function printObj(obj:any){
//   if(obj.$classDescriptor){
//     console.log(obj.$classDescriptor);
//   }else{
//     console.log(Object.getPrototypeOf(obj).constructor.name);
//   }

//   if(!obj.$propDescriptors){
//     obj.$propDescriptors = [];
//   }

//   for(const key in obj){
//     if(obj.hasOwnProperty(key)){
//       const prop = obj.$propDescriptors.find((p:any)=>p.propName == key);
//       if(prop){
//         console.log(`\t${prop.descriptor}:${obj[key]}`)
//       }else{
//         console.log(`\t${key}:${obj[key]}`) 
//       }
//     }
//   }

// }

// @classDescriptor('用户')
// class UserD{
//   @propDescriptor('账号')
//   loginId:string
//   @propDescriptor('密码')
//   loginPwd:string
// }
// const ud = new UserD();
// ud.loginId = 'abc';
// ud.loginPwd = '123';
// printObj(ud);



//reflect-metadata库
// import 'reflect-metadata';

// @Reflect.metadata('a','一个类')
// class A1{
//   @Reflect.metadata('prop','一个属性')
//   prop1:string
// }
// const obj = new A1();

// // console.log(Reflect.getMetadata('a',A1));
// // console.log(Reflect.getMetadata('prop',obj,'prop1'));

// const key = Symbol.for("descriptor"); //产生的key值一定唯一
// function descriptor(type:string){
//   return Reflect.metadata(key,type);
// }

// function printObj(obj:any){
//   const cons = Object.getPrototypeOf(obj);

//   if(Reflect.hasMetadata(key,cons)){
//     console.log(Reflect.getMetadata(key,cons));

//   }else{
//     console.log(cons.constructor.name);

//   }


//   for(const k in obj){
//       if(Reflect.hasMetadata(key,obj,k)){
//         console.log(`\t${Reflect.getMetadata(key,obj,k)}:${obj[k]}`)
//       }else{
//         console.log(`\t${k}:${obj[k]}`) 
//       }
//   }

// }

// @descriptor('用户')
// class UserD{
//   @descriptor('账号')
//   loginId:string
//   @descriptor('密码')
//   loginPwd:string
// }
// const ud = new UserD();
// ud.loginId = 'abc';
// ud.loginPwd = '123';
// printObj(ud)

// class-validator 和 class-transformer 库
// import "reflect-metadata";
// import { IsNotEmpty,validate,MinLength,MaxLength,Min,Max } from 'class-validator';
import { plainToClass, Type } from 'class-transformer';

// class RegUser{
//   @IsNotEmpty({message:'账号不可以为空'})
//   @MinLength(5,{message:'账号必须有5个字符'})
//   @MaxLength(10,{message:'账号最多10个字符'})
//   loginId:string
//   loginPwd:string
//   @Min(0,{})
//   @Max(100,{})
//   age:number 
//   gender:'男'| '女'
// }
// const post = new RegUser();
// validate(post).then(error => {
//   //得到相应的错误信息
//   console.log(error);
// })

// class UserAA {
//   id: number;
//   firstName: string;
//   lastName: string;
//   @Type(() => Number)
//   age: number;

//   getName() {
//     return this.firstName + " " + this.lastName;
//   }

//   isAdult() {
//     return this.age > 36 && this.age < 60;
//   }
// }

// const user = plainToClass(User, u);  //将普通的json对象转换为类对象
//第一个参数，转化为那个类对象，第二个参数，转化的平面对象，一般为请求回来的数据


// 类型演算

// typeof
// const a:string = 'abc';
// let b:typeof a = 'abc';

// class UserU{
//   loginId:string
//   loginPwd:string
// }
// function createUser(cls:typeof UserU):UserU{
//   return new cls();
// }

// const userU = createUser(UserU);

// keyof
// interface UserK{
//   loginId:string,
//   loginPwd:string,
//   age:number
// }
// function printUserProperty(obj:UserK,prop:keyof UserK){
//   console.log(obj[prop]);

// }

// const uK:UserK = {
//   loginId:'kk',
//   loginPwd:'adf',
//   age:18
// }

// printUserProperty(uK,'age');

// in
interface UserI {
  loginId: string
  loginPwd: string
}

interface Article {
  title: string,
  publicDate: Date
}

// 将User的所有属性值类型变成字符串，得到一个新类型
// type UserString = {
//   [p in keyof User]:string
// }

// type UserReadonly = {
//   readonly [p in keyof UserI]:UserI[p]
// }

type PartialCurrenct<T> = {
  [p in keyof T]?: T[p]
}

const uI: PartialCurrenct<UserI> = {
  loginId: 'adf',
  loginPwd: 'sdf'
}


let K: Exclude<'a' | 'b', 'b'>
let M: Extract<'a' | 'b', 'b'>

type func = () => number;
type returnType = ReturnType<func>

function sum(a: number, b: number) {
  return a + b;
}
let a: ReturnType<typeof sum>;

class UserIns {

}
class ArticleIns {

}

type twoParamsConstructor = new (arg1: any, arg2: any) => UserIns;

type inst = InstanceType<twoParamsConstructor>



