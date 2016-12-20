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
//////////////////////////////////////////////////
//通过栈实现 reverse
let arr = [1,2,3,4,5,6,7];
Array.prototype.ccc=function () {
  console.log('ccccc');
};
let stack1 = new Stack();
console.log(arr.length);
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

