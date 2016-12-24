/**
 * Created by xzh on 2016/12/21.
 */
const Queue = require('./Queue');
const Stack = require('../Stack/Stack');
const q =new Queue();
q.push('a');
q.push('b');
console.log(q.peek());
console.log(q.end());
console.log(q.front());
console.log(q.take());
console.log(q.take());
console.log(q.take()); //undefined 取完了
const s =new Stack();
s.push('a');
s.push('b');
s.pop();
s.pop();
s.pop();
s.push('1');
console.log(s);
