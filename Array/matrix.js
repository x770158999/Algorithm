/**
 * Created by xzh on 2016/12/15.
 */
//创建一个数组用于保存字母 输入单词返回数组项
let Matrix = function (rows, cows, fn) {
    let arr= [];
    arr.rows = rows;
    arr.cows = cows;
    for (let i = 0; i < rows; i++) {
        let row = [];
        for (let j = 0; j < cows; j++) {
            if (typeof fn === 'function') {
                try {
                    if (fn(i, j)||fn(i, j)===0) {
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
function MatrixUtils(){
    //矩阵倒置 [[A,a],[B,b]...[Z,z]]
    this.inverse= function (matrix) {
        if(matrix.rows&&matrix.cows){
            let arr=[];
            arr.rows=matrix.cows;
            arr.cows=matrix.rows;
            for(let i=0;i<matrix.cows;i++){
                let tmp = [];
                for(let j=0;j<matrix.rows;j++){
                    tmp[j]=matrix[j][i];
                }
                arr[i]=tmp;
            }
            return arr;
        }else{
            throw new Error('invalid matrix');
        }
    };
    //仅限数字型
    this.m_add = function (matrixA,matrixB) {
        let arr =[];
        arr.rows = matrixA.rows<matrixB.rows?matrixB.rows:matrixA.rows;
        arr.cows = matrixA.cows<matrixB.cows?matrixB.cows:matrixA.cows;
        for (let i=0;i<arr.rows;i++){
            let tmp=[];
            for(let j=0;j<arr.cows;j++){
                tmp[j]=(matrixA[i][j]||0) + (matrixB[i][j]||0);
            }
            arr[i]=tmp;
        }
        return arr;
    }
}
let utils = new MatrixUtils;
// let abc = function (rows, cows) {
//
//     switch (rows) {
//         case 0:
//             if (cows<10) {
//                 return String.fromCharCode(48 + cows);
//             }
//             break;
//         case 1:
//             if (cows < 26) {
//                 return String.fromCharCode(65 + cows);
//             }
//             break;
//         case 2:
//             if (cows < 26) {
//                 return String.fromCharCode(97 + cows);
//             }
//             break;
//     }
// };
let abc = function (rows, cows) {

    switch (rows) {
        case 0:
            if (cows < 26) {
                return String.fromCharCode(65 + cows);
            }
            break;
        case 1:
            if (cows < 26) {
                return String.fromCharCode(97 + cows);
            }
            break;
        default:
            break;
    }
};
let abc_matrix =Matrix(2, 26,abc);
// console.log(abc_matrix);//[[A,B...Z],[a,b...z]]
// console.log(abc_matrix[0][5]);//>>>F
// console.log(abc_matrix.rows);// 2
let cba_matrix = utils.inverse(abc_matrix);
// console.log(cba_matrix);
let matrixA =Matrix(4,5,function (a,b) {
    return a+b;
});
console.log(matrixA);
let out =utils.m_add(matrixA,matrixA);
console.log(out);