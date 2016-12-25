/**
 * Created by Administrator on 2016/12/25.
 */
const HashTable = require('./HashTable');
const HashTable_chain =require('./chain');
const Line =require('./line');



////////////////test////////////////////
let ht = new HashTable();
ht.put('xuzhehao');
ht.put('gsdlg');
ht.put('fkshkghsk');
ht.put('hahahhah');
ht.put('dhg');
ht.put('gfsjgjs');
ht.put(216554);
console.log(ht.show());
console.log(ht.get('xuzhehao'));
//test
let htt = new HashTable();
const base = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
let n=50;
while (n--){
    let string = '';
    let len =8;
    while (len--){
        string+=base.charAt(Math.floor(Math.random()*62));
    }
    htt.put(string);
}
console.log(htt.show());//100个大约能入70-80左右 碰撞率20-30；



let ht1 = new HashTable_chain();
let m=50;
while (m--){
    let string = '';
    let len =8;
    while (len--){
        string+=base.charAt(Math.floor(Math.random()*62));
    }
    ht1.put(string);
}
console.log(ht1.show());//100个大约能入70-80左右 碰撞率20-30；
///
let ht2 =new HashTable_chain();
ht2.put('fBIlr5SP');
ht2.put('cP0fI0mY');
console.log(ht2.show());
console.log('1',ht2.get('cP0fI0mY'));


let ht3 = new Line();
let j=50;
while (j--){
    let string = '';
    let len =8;
    while (len--){
        string+=base.charAt(Math.floor(Math.random()*62));
    }
    ht3.put(string);
}
console.log(ht3.show());//100个大约能入70-80左右 碰撞率20-30；

let ht4 =new Line();
ht4.put('fBIlr5SP');
ht4.put('cP0fI0mY');
console.log(ht4.show());
console.log('1',ht4.get('cP0fI0mY'));