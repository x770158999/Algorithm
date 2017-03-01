/**
 * Created by yuyou on 2017/2/9.
 */
const o = {};
Object.defineProperty(o, 'a', { value: 1, enumerable: true });
Object.defineProperty(o, 'b', { value: 2, enumerable: false });
Object.defineProperty(o, 'c', { value: 3 }); // enumerable defaults to false
o.d = 4; // enumerable defaults to true when creating a property by setting it

for (let i in o) {
    console.log(i);
}
// logs 'a' and 'd' (in undefined order)

console.log(Object.keys(o)); // ['a', 'd']

for(let item of 'abcd'){
    console.log(item,' Enumerable is',o.propertyIsEnumerable(item));
}