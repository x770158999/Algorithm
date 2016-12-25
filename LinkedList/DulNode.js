/**
 * Created by Administrator on 2016/12/25.
 */
const LNode = require('./LNode');
function DulNode(element) {
    //无原型方法仅继承其内建方法;
    this.prev = null;
    LNode.call(this,element);
}


module.exports = DulNode;