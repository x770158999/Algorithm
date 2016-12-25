/**
 * Created by Administrator on 2016/12/25.
 */
//设计一个节点类用于表示node节点
function LNode(element) {
    //保存节点上的数据
    this.element =element;
    //存放下一节点的链接
    this.next = null;
}
module.exports = LNode;