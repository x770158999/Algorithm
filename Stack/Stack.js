/**
 * Created by xzh on 2016/12/19.
 */
//建立一个LIFO后入先出的数据结构 栈
function Stack() {
    this.dataStroe=[];
    //栈顶
    this.top=0;
    this.pop=()=>{
        if(this.top){
            return this.dataStroe[--this.top];
        }else if(this.top===0){
            return this.dataStroe[this.top]
        };
    };
    this.peek=()=>this.dataStroe[this.top-1];
    this.push=(element)=>{this.dataStroe[this.top++]=element};
    this.clear=()=>{this.top=0};
    this.length=()=>this.top;
}
module.exports = Stack;
