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
const s =new Stack();
s.push('a');
s.push('b');
console.log(s.peek());