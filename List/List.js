/**
 * Created by Administrator on 2016/12/17.
 */
//设置一个抽象数据结构 列表
function MyList() {
    //新建一数组用于保存列表元素
    this.dataStroe = [];
    //属性 列表所含的元素个数
    this.listSize = 0;
    //所在的当前位置
    this.pos = 0;
    //返回列表中元素的个数
    // // this.length = ()=>self.listSize;
    // this.length =length;
    // //清空列表中所有元素
    // this.clear=clear;
    // this.toString=toString;
    // this.getElement=getElement;
    // this.insert=insert;
    this.append=append;
    // this.remove=remove;
    // this.front=front;
    // this.end=end;
    // this.prev=prev;
    // this.next=next;
    // this.currPos =currPos;
    // this.moveTo=moveTo;
    // this.contains=contains;
}
//将列表中下一个位置添加一个新元素，pos =listSize++, listSize+1;
append= function (element) {
    this.dataStroe[this.listSize++] = element;
};
let list = new MyList();
list.append('a');
console.log(list);
// console.log(list.pos);
