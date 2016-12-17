/**
 * Created by xzh on 2016/11/28.
 */
//构造函数
function Myself() {
    //私有属性
    let name = 'xzh';
    //私有方法
    /**
     * 本身可以访问类内部的所有属性的，即私有属性和公有属性。但是不可以在类的外部被调用。
     */
    function say() {
        console.log(name+" is the king og world!");
    }
    //静态方法 无需实例化即可调用
    Myself.speak = function () {
        console.log('hello');
    };
    //静态属性
    Myself.sexure = 'man';
    say();//可在类内部调用
    //公共属性
    this.age = '24';
    //公共方法
    this.skill = function () {
        console.log('java');
    }
}

let boy = new Myself();
//公有方法
//适用于通过new关键字实例化的该对象的每个实例
//向prototype中添加成员将会把新方法添加到构造函数的底层中去
//即在对象定义完之后可向其添加原型属性方法 所有改对象的实例均共享同一个原型；但原型属性无法重写对象属性
Myself.prototype.原型 = function () {
    console.log('prototype');
};
Myself.prototype.age = 25;
// boy.say();//err 在外部无法调用；
console.log(Myself.sexure);//man
console.log(boy.age);//24
console.log(boy.name); //undefined
boy.skill();
boy.原型();
const boy2 = new Myself();
console.log(boy2.age); //24
Myself.prototype.age2 = 25;
console.log(boy2.age2); //25

Myself.prototype.talk = function () {
    this.say();
};
// boy.talk();//this.say is not a function 原型方法无法调用对象的静态方法
boy.__proto__.length = Array.prototype.length;
boy2.prototype = Array.prototype;
console.log(boy.length);//0
console.log(boy2.length);//undefined
Myself.prototype.ccc = function () {
    console.log('ccccccccccc');
};
boy.ccc();//ccccccccccc
boy2.ccc();
