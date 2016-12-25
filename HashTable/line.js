/**
 * Created by Administrator on 2016/12/25.
 */
//采取线性探测法解决碰撞问题
const HashTable = require('./HashTable');
function Line() {
    HashTable.call(this);
    this.put=(key,value)=>{
        let pos = this.simpleHash(key);
        let kv={};
        kv[key]= value||key;
        if(this.table[pos]){
            let tmp =pos;
            // if(tmp<this.table.length/2){
                while(this.table[tmp]){
                    tmp++;
                    if(tmp>=this.table.length){
                        break;
                    }
                }
                tmp=pos;
                while (this.table[tmp]){
                    tmp--;
                }
                this.table[tmp] = kv;
            // }else {
            //     while(tmp>=0&&!this.table[--tmp]){
            //         this.table[tmp]=[kv];
            //         return;
            //     }
            //     while (pos<=this.table.length&&!this.table[++pos]){
            //         this.table[pos]=[kv];
            //         return;
            //     }
            // }

        }else {
            this.table[pos]=kv;
        }
    };

}
module.exports =Line;