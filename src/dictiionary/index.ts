// 开发一个字典类（Dictionary）,字典中会保存键值对的数据   所有的键类型相同  所有的值类型相同
// 键值对数据的特点     键(key)可以是任何类型，但不可以重复    值（value）可以使任何类型  每一个键对应一个值
/*
字典中对键值对数据的操作
按照键，删除对应的键值对
循环每一个键值对
得到当前键值对的数量
判断某个键是否存在
重新设置某个键对应的值，如果不存在，则添加
 */

import {Dictionary} from "./dictionary";

const dic = new Dictionary<string,number>();
dic.set('a',1);
dic.set('b',2);

dic.forEach((k,v)=>{
    console.log(`${k}:${v}`);
});
console.log(dic.has("a"));
dic.delete("b");

Map
