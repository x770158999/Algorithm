/**
 * Created by xzh on 2016/12/15.
 */
//构造一个由行列构成的二维数组
let tdArray =function (rows,cows) {
    let arr =[];
    for(let i=0;i<rows;i++){
        let row =[];
        for(let j=0;j<cows;j++){
            row[j]={i,j};
        }
        arr[i] = row;
    }
    return arr;
};

console.log(tdArray(5,8));
/**
 [
 [ { i: 0, j: 0 },{ i: 0, j: 1 },{ i: 0, j: 2 },{ i: 0, j: 3 },{ i: 0, j: 4 },{ i: 0, j: 5 },{ i: 0, j: 6 },{ i: 0, j: 7 } ],
 [ { i: 1, j: 0 },{ i: 1, j: 1 },{ i: 1, j: 2 },{ i: 1, j: 3 },{ i: 1, j: 4 },{ i: 1, j: 5 },{ i: 1, j: 6 },{ i: 1, j: 7 } ],
 [ { i: 2, j: 0 },{ i: 2, j: 1 },{ i: 2, j: 2 },{ i: 2, j: 3 },{ i: 2, j: 4 },{ i: 2, j: 5 },{ i: 2, j: 6 },{ i: 2, j: 7 } ],
 [ { i: 3, j: 0 },{ i: 3, j: 1 },{ i: 3, j: 2 },{ i: 3, j: 3 },{ i: 3, j: 4 },{ i: 3, j: 5 },{ i: 3, j: 6 },{ i: 3, j: 7 } ],
 [ { i: 4, j: 0 },{ i: 4, j: 1 },{ i: 4, j: 2 },{ i: 4, j: 3 },{ i: 4, j: 4 },{ i: 4, j: 5 },{ i: 4, j: 6 },{ i: 4, j: 7 } ]
 ]
 */
console.log(tdArray(5,8)[2][3]);
//{ i: 2, j: 3 }
//TUDO添加function可以自定义修改单元格内容


