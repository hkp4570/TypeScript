import {IBalanceShow, IFireShow, IWisdomShow} from './interfaces';

export abstract class Animal{
    abstract type:string;
    constructor(
        public name:string,
        public age:number
    ){}

    sayHello(){
        console.log(`我是${this.type}`)
    }
}

export class Lion extends Animal implements IFireShow{
    type: string = '狮子';
    singleFire(){
        console.log(`${this.name}表演单火圈`);
    };
    doubleFire(){
        console.log(`${this.name}表演双火圈`);
    }
}
export class Tiger extends Animal implements IFireShow{
    type: string = '老虎';
    singleFire(){
        console.log(`${this.name}表演单火圈`);
    };
    doubleFire(){
        console.log(`${this.name}表演双火圈`);
    }
}
export class Monkey extends Animal implements IBalanceShow{
    type: string = '猴子';
    dumuqiao(){
        console.log(`${this.name}表演走独木桥`);
    };
    zougangsi(){
        console.log(`${this.name}表演走钢丝`);
    }
}
export class Dog extends Animal implements IWisdomShow{
    type: string = '狗子';
    suanshuti(){
        console.log(`${this.name}表演走算术题`);
    };
    dance(){
        console.log(`${this.name}表演跳舞`);
    }
}
