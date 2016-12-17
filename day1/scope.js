/**
 * Created by xzh on 2016/11/26.
 */
//作用域
scope = 'global';
function showScope() {
     this.scope = "local";
     console.log(scope);
    return scope;
}
console.log(scope);
console.log(showScope());
console.log(scope);
// global
// local
// local
// local
let scope1 = 'global';
function showScope1() {
    this.scope1 = "local";
    console.log(scope1);
    return scope1;
}
console.log(scope1);
console.log(showScope1());
console.log(scope1);
// global
// global
// global
// global