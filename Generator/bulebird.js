/**
 * Created by xzh on 2016/12/26.
 */
const Promise = require('bluebird');
const fs = Promise.promisifyAll(require('fs'));
const co = require('co');

//模拟将CALLBACK promisify
let readFile = function (fileName){
    return new Promise(function (resolve, reject){
        fs.readFile(fileName,'utf8',function(error, data){
            if (error) reject(error);
            resolve(data);
        });
    });
};//readFile===readFileAsync

function* gen(){
    let res = yield [readFile('message.txt'),readFile('message.txt')];
    console.log('res',res);
}
co(gen());

function* yen(){
    let f1 = yield fs.readFileAsync('message.txt');
    let f2 = yield fs.readFileAsync(f1);
    console.log('f1',f1.toString());
    console.log('f2',f2.toString());
}
co(yen());
console.log(yen().next());//Promise
