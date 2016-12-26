/**
 * Created by Administrator on 2016/12/25.
 */

//建立一个CPU密集型函数  将同步操作修改为异步执行；

function fibo(n) {
    return n>2 ? fibo(n -1)+fibo(n - 2):1;
}
function wait(num) {
    let a=fibo(num);
    console.log('a=',a);
    return a ;
}

console.log('同步执行',wait(30));
function asyncFake(data, callback) {
    if(data){
        console.log('异步part1');
        process.nextTick(callback,data);
        // process.nextTick(callback,a);
    }
    else callback(false);
}

asyncFake('45', function(result) {
    let a=wait(result);
    console.log('异步part2',a);
});
//同步执行
console.log('11111111');
console.log('22222222');

///执行结果
// a= 832040
// waiting....
// 同步执行 832040
// 异步part1
// 11111111
// 22222222
// waiting ........
// a= 1134903170
// 异步part2 1134903170
