// import _ from "lodash"

// const newArr = _.chunk([3, 4, 6, 7, 2], 2);

class Tank {
  protected name: string = '坦克';   //访问权限修饰符，只能在自身和子类中访问
  sayHello() {
    console.log(`我是一个${this.name}`);
  }
}

class PlayerTank extends Tank {
  name: string = '玩家坦克';
  life: number = 5;
  test() {
    super.sayHello();
  }
}

class EnemyTank extends Tank {
  name: string = '敌方坦克';
}
let p: Tank = new PlayerTank();
// if(p instanceof PlayerTank){
//   console.log(p.life);
//   console.log(p.test());

// }

//抽象类   模板模式  move方法
abstract class Chess {  //不能创建对象
  x: number = 0;
  y: number = 0;
  abstract readonly name: string;   //抽象属性在子类中必须实现

  move(targetX: number, targetY: number): boolean {
    console.log('边界判断');
    console.log('目标位置是否有己方棋子');
    if (this.rule(targetX, targetY)) {
      this.x = targetX;
      this.y = targetY;
      console.log(`${this.name}移动成功`);
      return true;
    }
    return false;
  };
  protected abstract rule(targetX: number, targetY: number): boolean;
}

class Horse extends Chess {
  protected rule(targetX: number, targetY: number): boolean {
    return true;
  }

  name: string = '马';

}
class Pao extends Chess {
  protected rule(targetX: number, targetY: number): boolean {
    return false;
  }

  name: string;
  constructor() {
    super();
    this.name = '炮';
  }
}
class Soldier extends Chess {
  protected rule(targetX: number, targetY: number): boolean {
    return true;
  }

  get name() {
    return '兵'
  }
}
// const h = new Horse();
// const pao = new Pao();
// const s = new Soldier();
// pao.move(1,2);

//静态成员
class User {
  static users: User[] = [];
  constructor(
    public loginId: string,
    public loginPwd: string,
    public name: string,
    public age: number,
  ) {
    //需要将新建的用户加入到数组中
    User.users.push(this);
  }
  sayHello() {
    console.log(`大家好，我叫${this.name},今年${this.age}岁了`);
  }

  static login(loginId: string, loginPwd: string): User | undefined {
    return User.users.find(u => u.loginId === loginId && u.loginPwd === loginPwd);
  }
}
const u1 = new User('u1', '123', '小猪', 18);
const u2 = new User('u2', '123', '小猫', 11);
const u3 = new User('u3', '123', '小狗', 16);
const result = User.login('u3', '123');
if (result) {
  result.sayHello();
}



//单例模式
class Board {
  width: number = 500;
  height: number = 700;
  init() {
    console.log('初始化棋盘');
  }

  private constructor() { }

  // static readonly singleBoard = new Board();

  private static _board?: Board;

  static createBoard(): Board {
    if (this._board) {
      return this._board;
    }
    this._board = new Board();
    return this._board;
  }

}
const b1 = Board.createBoard();
const b2 = Board.createBoard();
console.log(b1 === b2);



//接口可以继承类
class A {
  a1: string = '';
  a2: string = '';
}
class B {
  b1: number = 0;
  b2: number = 0;
}
interface C extends A, B { }
const c: C = {
  a1: '',
  a2: '',
  b1: 1,
  b2: 1
};



//索引器  动态添加类成员
class User1 {
  [prop: string]: any
  constructor(
    public name: string,
    public age: number
  ) {
  }
}
const u = new User1('aa', 22);
u.pid = '123';

//约束this
class User2 {
  constructor(
    public name: string,
    public age: number
  ) {

  }
  sayHello(this: User2) {  //强制约束this指向
    console.log(this, this.name, this.age);
  }
}
const u22 = new User2('sff', 20);
const say = u22.sayHello;
// say();
u22.sayHello();

interface IUser {
  name: string,
  age: number,
  sayHello(this: IUser): void
}
const u58: IUser = {
  name: 'abc',
  age: 18,
  sayHello(): void {
    console.log(this.name, this.age);
  }
};
const say58 = u.sayHello;

