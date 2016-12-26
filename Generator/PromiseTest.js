/**
 * Created by xzh on 2016/12/26.
 */
const Def = require('./Promise');
const fs = require('fs');

// fs.writeFile('message.txt', 'Hello Node.js', (err,data) => {
//     if (err) throw err;
//     console.log('It\'s saved!')
// });

//将cb 转换为promise
fsReadFile=function (name,enc) {
    const def = new Def();
    fs.readFile(name,enc,(err, data) => {
        if (err){
            def.reject(new Error(err));
        }else {
            def.resolve(data);
        }
    });
    return def.promise;
};

fsReadFile('message.txt','utf8').then(function (data) {
    console.log('data',data);
    return data;//data Hello Node.js
},function (err) {
    console.log(err);
})
    .then(()=>fsReadFile('message.txt','utf8'))//返回一个promise
    .then(function (data) {
        console.log('data',data);   //data Hello Node.js
    });
console.log('同步方法');
/**
 * 同步方法
 * data Hello Node.js
 * data Hello Node.js
 */



