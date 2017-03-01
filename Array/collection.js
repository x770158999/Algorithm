/**
 * Created by yuyou on 2017/3/1.
 */
//两个数组取交集
function union(arr1,arr2) {
    let arr_1=arr1||[];
    let arr_2=arr2||[];
    let tmp=[];
    for(let item of arr_2){
        if(!arr1.includes(item)){
            tmp.push(item);
        }
    }
    return arr1.concat(tmp);
}
function intersection(arr1,arr2) {
    let arr_1=arr1||[];
    let arr_2=arr2||[];
    let tmp=[];
    for(let item of arr_2){
        if(arr1.includes(item)){
            tmp.push(item);
        }
    }
    return tmp;
}
function complementary(arr1,arr2) {
    let arr_1=arr1||[];
    let arr_2=arr2||[];
    let tmp=[];
    for(let item of arr_1){
        if(!arr_2.includes(item)){
            tmp.push(item)
        }
    }
    return tmp;
}
let a=[1,2,3,4,5];
let b=[3,4,5,6,7,8];
console.log(union(a,b));
console.log(intersection(a,b));
console.log(complementary(a,b));