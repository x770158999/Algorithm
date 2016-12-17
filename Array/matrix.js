/**
 * Created by xzh on 2016/12/15.
 */
//创建一个数组用于保存字母 输入单词返回数组项
let Matrix = function (rows, cows, fn) {
    let arr = [];
    for (let i = 0; i < rows; i++) {
        let row = [];
        for (let j = 0; j < cows; j++) {
            if (typeof fn === 'function') {
                try {
                    if (fn(i, j)) {
                        row[j] = fn(i, j)
                    }
                } catch (e) {
                    console.log('function is invalid');
                }
            } else {
                row[j] = {i, j};
            }
        }
        arr[i] = row;
    }
    return arr;
};
let abc = function (rows, cows) {

    switch (rows) {
        case 0:
            if (cows<10) {
                return String.fromCharCode(48 + cows);
            }
            break;
        case 1:
            if (cows < 26) {
                return String.fromCharCode(65 + cows);
            }
            break;
        case 2:
            if (cows < 26) {
                return String.fromCharCode(97 + cows);
            }
            break;
    }
};
console.log(Matrix(3, 28,abc));
let abc_matrix = Matrix(3, 26,abc);
console.log(abc_matrix[1][5]);//>>>F
//矩阵倒置
Matrix.prototype.inverse = function () {

};
