/**
 * Created by Administrator on 2016/12/25.
 */
let LList = require('./LList');
let ll = new LList();
ll.insert('xxx');
ll.insert('zzz','xxx');
ll.insert('hhh');
console.log(ll.find('xxx'));
console.log(ll.display());
console.log(ll.preNode('lll'));
ll.remove('xxx');
ll.remove('sdasfdsa');
//!无法删除头结点
ll.remove('head');
console.log(ll.display());
ll.remove('zzz');
console.log(ll.display());