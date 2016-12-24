/**
 * Created by xzh on 2016/12/21.
 */
const Queue = require('./Queue');
function radix_sort(array,fn) {
    let queues = {};
    for(let i=0;i<10;i++){
        queues['queue'+i]= new Queue();
    }
    let len =1;
    //个位数入队列 进行排序；
    for(let item of array){
        let arr=item.toString().split('');
        len = arr.length>len?arr.length:len;
        queues['queue'+arr[arr.length-1]].push(item);
    }
    array=radix_out(queues);
    for(let i=2;i<=len;i++){
        radix_in(queues,array,i);
        array =radix_out(queues);
    }
    return array;
}
//将数组按指定位数插入相应队列
function radix_in(queues,array,num) {
    for(let item of array){
        let arr=item.toString().split('');
        if(arr.length-num>=0){
            queues['queue'+arr[(arr.length-num)]].push(item);
        }else {
            queues['queue0'].push(item);
        }
    }
}
//将其按队列取出 完成第一次排列
function radix_out(queues) {
    let array = [];
    for(let index in queues){
        if(queues.hasOwnProperty(index)){
            let item =queues[index].take();
            while (item){
                array.push(item);
                item =queues[index].take();
            }
        }

    }
    return array;
}




/////////////////////////////////////////////////////////////////////////////
let a = radix_sort([11,23,24,26,32,22,23,355,73,4325,46,58,5,345,23,523,523]);
console.log(a);
