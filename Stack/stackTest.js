/**
 * Created by xzh on 2016/12/20.
 */
let Stack = require('./Stack');
const stack = new Stack();
stack.push('xzh');
stack.push('hzx');
console.log(stack.pop());
console.log(stack.peek());
stack.push('hhh');
console.log(stack.peek());
stack.clear();
console.log(stack.peek());
stack.push('xzh');
console.log(stack.length());


//使用短除法制作一个进制转换器 10进制转换为 2->8进制；
function convert(int,base) {
    let result = '';
    const stack = new Stack();
    while(int/base>0){
        stack.push(int%base);
        int=Math.floor(int/base);
    }
    while(stack.length()){
        result +=stack.pop();
    }
    return result;
}
const res=convert(999,7);
console.log('res',res);//>>>2625
const res1=convert(999,2);
console.log('res1',res1);//>>>1111100111
//////////////////////////////////////////////////
//通过栈实现 reverse
let arr = [1,2,3,4,5,6,7];
Array.prototype.ccc=function () {
  console.log('ccccc');
};
let stack1 = new Stack();
console.log('length',arr.length);
for(let index in arr){
        console.log(index);
        if(arr.hasOwnProperty(index)){
            stack1.push(arr[index])
        }
}
let tmp = [];
while(stack1.length()){
    tmp.push(stack1.pop());
}
console.log('reverse',tmp);
//////////////////////////////////////
//通过栈模拟递归
//Fibonacci sequence
let time = new Date();
function fibo(n) {
    return n>2 ? fibo(n -1)+fibo(n - 2):1;
}
// console.log(fibo(45));
// console.log('递归',new Date()-time,'ms');//10138 ms
let time1 = new Date();
console.log(fb(9999));
console.log('栈',new Date()-time1,'ms');//3ms 差距太大


function fb(n) {
    let stack3 = new Stack();
    if(n<3){
        return 1;
    }
    stack3.push(1);
    stack3.push(1);
    let i=3;
    while (i<n){
        let tmp1= stack3.pop();
        let tmp2= stack3.pop();
        stack3.push(tmp2);
        stack3.push(tmp1);
        stack3.push(tmp1+tmp2);
        i++;
    }
    return stack3.pop()+stack3.pop();
}


