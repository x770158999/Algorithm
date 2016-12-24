/**
 * Created by xzh on 2016/12/21.
 */
const Stack = require('../Stack/Stack');
const Util = require('util');
//继承 原型方法 及内建方法;
function Queue() {
    Stack.call(this);
    //删除无用继承
    delete this.pop;
    this.take =()=>{
        if(this.top){this.top--}
        return this.dataStroe.shift()};
    this.end=this.peek;
    //重载
    this.peek =()=>this.dataStroe[0];
    this.length =this.dataStroe.length;
    this.front=this.peek;
}
Util.inherits(Queue,Stack);

module.exports =Queue;
