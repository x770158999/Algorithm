/**
 * Created by xzh on 2016/12/21.
 */
const Queue = require('./Queue');
function radix_sort(array,fn) {
    let queues = {};
    for(let i=0;i<10;i++){
        queues['queue'+i]= new Queue();
    }
    for(let item of array){
        item.split()[1]
    }
}
radix_sort([11,23,24,26,32]);