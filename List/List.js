/**
 * Created by Administrator on 2016/12/17.
 */
//设置一个抽象数据结构 列表
function MyList() {
    let self = this;
    //属性 列表所含的元素个数
    this.listSize = 1  ;
    //所在的当前位置
    this.pos = 1 ;

}
let list = new MyList();
console.log(list.listSize);
console.log(list.pos);
