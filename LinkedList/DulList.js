/**
 * Created by Administrator on 2016/12/25.
 */
const DulNode = require('./DulNode');
const LList= require('./LList');
//构造一个双向链表
function DulList() {
    LList.call(this);
    this.head = new DulNode('head');
    delete this.preNode;
    this.insert=(element,item)=>{
        let newNode = new DulNode(element);
        let current = this.find(item||'head');
        newNode.next = current.next;
        newNode.prev = current;
        current.next = newNode;
    };
    this.findEnd=()=>{
        let end = this.head;
        while (end.next){
            end = end.next;
        }
        return end;
    };

    //从尾部开始遍历链表
    this.displayReverse =()=>{
        let end = this.findEnd();
        let array=[end.element];
        while (end.prev){
            array.push(end.prev.element);
            end = end.prev;
        }
        //删除头结点显示
        array.pop();
        return array;
    };
    //重载其remove 方法
    this.remove=(item)=>{
        let curr = this.find(item);
        curr.prev.next = curr.next;
        curr.prev = curr.next =null;
    }



}


/////////////////////////////////
let dd = new DulList();
dd.insert('xxx');
dd.insert('zzz','xxx');
dd.insert('hhh','zzz');
console.log(dd.display());
console.log(dd.findEnd().element);
console.log(dd.displayReverse());
dd.remove('zzz');
console.log(dd.display());
