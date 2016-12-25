/**
 * Created by Administrator on 2016/12/25.
 */
//新建一个长度为137的hashTable散列表
function HashTable() {
    this.table = new Array(137);
    this.simpleHash=simpleHash;
    this.show=()=>{
        let result ={length:0};
        for(let index in this.table){
            if(this.table[index]){
                result[index]=this.table[index];
                result.length++;
            }
        }
        return result;
    };
    this.put=(element)=>{
        let pos=this.simpleHash(element);
        this.table[pos]=element;
    };
    this.get=(key)=>this.simpleHash(key,this.table);
}
function simpleHash(string) {
    const H= 37;
    let total = 0;
    for(let i =0;i<string.length;i++){
        total+=H*total+string.charCodeAt(i);
    }
    total=total%this.table.length;
    return parseInt(total);
}
module.exports=HashTable;
