/**
 * Created by Administrator on 2016/12/25.
 */
//采取开链法解决碰撞问题
const HashTable = require('./HashTable');
function HashTable_chain() {
    HashTable.call(this);
    this.put=(key,value)=>{
        let pos=this.simpleHash(key);
        let kv={};
        kv[key]= value||key;
         if(this.table[pos]){
             this.table[pos].push(kv);
         }else {
             this.table[pos]=[kv];
         }
    };
    this.get=(key)=>{
        let pos=this.simpleHash(key,this.table);
        if(!this.table[pos]){
            return undefined;
        }
        for(let index in this.table[pos]){
            if(this.table[pos].hasOwnProperty(index)&&key===Object.keys(this.table[pos][index])[0]){
                return pos+':'+index;

            }
        }
    }
}
module.exports =HashTable_chain;

