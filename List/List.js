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
    this.length = ()=>this.listSize;
    // this.length =length;
    // //清空列表中所有元素
    // this.clear=
    //返回集合（实际为数组）;
    this.toString=()=>this.dataStroe;
    //返回第一个符合要求的元素所在位置，若无则-1 ES6中数组新增includes方法
    this.contains=contains;
    //指定位置插入元素
    this.insert=insert;
    this.append=append;
    this.remove=remove;
    this.removeAll=removeAll;
    //移动至列表首位
    this.front=()=>{this.pos = 0};
    this.end=()=>{this.pos = this.listSize-1};
    //先加减再返回值
    this.prev=()=>{if(this.pos>=0){return --this.pos}};
    this.next=()=>{if(this.pos<this.listSize){return ++this.pos}};
    this.currPos=()=>this.pos;
    this.moveTo=(position)=>{this.pos = position};
    this.getElement=()=>this.dataStroe[this.pos];
    //实现一个迭代器功能
    this.forEach=forEach;

}
//将列表中下一个位置添加一个新元素，pos =listSize++, listSize+1;
append= function (element) {
    this.dataStroe[this.listSize++] = element;
};
// remove= (element)=>{
//     for(let index in this.dataStroe){
//       if(this.dataStroe[index] ===element){
//           this.dataStroe[index].splice(index,0);
//           return index;
//       }
// }};
//删除单个元素
remove= function (element) {
    for(let index in this.dataStroe){
        if(this.dataStroe[index] ===element){
            this.dataStroe.splice(index,1);
            this.listSize--;
            return index;
        }
    }
    return -1;

};
contains=function (element) {
    for(let index in this.dataStroe){
        if(this.dataStroe[index] ===element){
            return index;
        }
    }
    return -1;
};
//移除所有符合元素  error 箭头函数的this继承自外围作用域
removeAll=function (element) {
        let n =0;
        while (n<this.listSize){
            if(this.dataStroe[n] ===element){
                this.dataStroe.splice(n,1);
                this.listSize--;}
                n++;
        }
};
// removeAll=function (element) {
//     let self =this;
//     let n =0;
//     this.dataStroe.forEach((item)=>{
//         if(item===element){
//             //此处self===this;
//             this.dataStroe.splice(n,1);
//             //self.dataStroe.splice(n,1);
//             this.listSize--;
//             //self.listSize--;
//         }
//         n++;
//     })
// };
insert=function (element,index) {
    this.dataStroe.splice(index,0,element);
    this.listSize++;
};


//倒序遍历
forEach=function (fn) {
    if(typeof fn ==="function"){
        for(this.front();this.currPos()<this.listSize;this.next()){

            fn(this.getElement());
        }
    }
    else{
            throw new Error(fn+' is not a function');
        }

};





let list = new MyList();
list.append('a');
list.append('b');
list.append('a');
list.append('c');
// list.remove('b');
console.log(list.remove('a'));
console.log(list.contains('a'));
console.log(list.toString());
// console.log(list.pos);
let list2=new MyList();
list2.append(1);
list2.append(2);
list2.append(3);
list2.append(2);

// list2.removeAll(2);
list2.insert(9,0);
//91232
console.log(list2.toString());
console.log(list2.end());//undefined
list2.front();
list2.next();
console.log(list2.next());
list2.prev();
console.log(list2.currPos());
console.log(list2.getElement());
//iterator
list2.forEach((item)=>{console.log('iterator',item)});
