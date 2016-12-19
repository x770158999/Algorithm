/**
 * Created by xzh on 2016/12/1.
 */
let foo = function () {
    let local =  "局 部 变 量";
    (function () {
        console.log(local);
    }());

};
foo();