import {Animal, Dog, Lion, Monkey, Tiger} from './animals';
import {IFireShow} from "./interfaces";

const animals:Animal[] = [
    new Lion('富贵',12),
    new Tiger('坤坤',21),
    new Monkey('猴子',1),
    new Dog('旺财',3),
    new Dog('狗剩',5)
];

// 1.所有的动物打招呼
// animals.forEach(a => a.sayHello());
// 2.所有会进行火圈表演的动物，完成火圈表演

//类型保护函数
function hasFireShow(ani:object):ani is IFireShow{
    if((ani as IFireShow).singleFire && (ani as IFireShow).doubleFire){
        return true;
    }else{
        return false;
    }
}
animals.forEach(a => {
    if(hasFireShow(a)){
        a.singleFire();
        a.doubleFire();
    }
});
