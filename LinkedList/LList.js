/**
 * Created by Administrator on 2016/12/25.
 */
//LinkedList 用于操作链表
const LNode = require('./LNode');
function LList() {
    //头结点
    this.head= new LNode('head');
    //向指定节点(item[optional,不填直接插头结点后面])后插入新节点(element) 需要找到其后面的节点 so先写find
    this.insert=(element,item)=>{
        let newNode = new LNode(element);
        let current = this.find(item||'head');
        newNode.next = current.next;
        current.next = newNode;
    };
    //需县查找其前节点
    this.remove=(item)=>{
        let pre= this.preNode(item);
        if(pre){
            pre.next = pre.next.next;
        }
    };
    //查找前节点
    this.preNode=(item)=>{
        let current = this.head;
        while (current.next&&current.next.element!==item){
            current=current.next;
        }
        return current.next?current:null;
    };
    //节点查找
    this.find=(item)=>{
        let currentNode = this.head;
        while (currentNode!==null&&currentNode.element!==item){
            currentNode = currentNode.next;
        }
        return currentNode;
    };
    //显示链表中的元素
    this.display=()=>{
        let curr = this.head;
        let array = [];
        while (curr.next){
            array.push(curr.next.element);
            curr = curr.next;
        }
        return array;
    };
}
module.exports=LList;



///////////////////////////////////////
