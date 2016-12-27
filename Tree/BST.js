/**
 * Created by xzh on 2016/12/27.
 */
//Binary Search Tree


//节点
function SNode(data,left,right) {
    this.data = data;
    this.left= left;
    this.right=right;
    this.show=()=>this.data;
}

//2X查找树
function BST() {
    this.root=null;
    //插入 :
    /**
     * 1  检查根节点是否存在, 不存在将新节点设为根节点 return; else ->2
     * 2  设根节点为当前节点,if new<curr &&left=null left=new
     * 3  ...
     *
     */
    this.insert=insert;
    //递归实现中序遍历
    this.mOrder=mOrder;
}
function insert(data) {
    //待插入的新节点
    let n = new SNode(data,null,null);
    if(!this.root){
        this.root=n;
    }else {
        let curr = this.root;
        let parent;
        while (1){
            parent=curr;
            if(data<curr.data){
                curr=curr.left;
                if(curr===null){
                    parent.left=n;
                    break;
                }
            }else {
                curr=curr.right;
                if(curr===null){
                    parent.right=n;
                    break;
                }
            }

        }
    }

}
function mOrder(node) {
    // 小中大
    let curr =[];
    let left=[];
    let right=[];
    if(node){
        left=mOrder(node.left);
        curr=node.show();
        right=mOrder(node.right);
    }
    return left.concat(curr).concat(right);
}

////////////////////////////
let nums = new  BST();
nums.insert(5);
nums.insert(5);
nums.insert(2);
nums.insert(7);
nums.insert(31);
nums.insert(23);
nums.insert(75);
nums.insert(43);
nums.insert(5);
nums.insert(5);
nums.insert(2);
nums.insert(7);
nums.insert(31);
nums.insert(23);
nums.insert(75);
nums.insert(43);
nums.insert(5);
nums.insert(5);
nums.insert(2);
nums.insert(7);
nums.insert(31);
nums.insert(23);
nums.insert(75);
nums.insert(43);
console.log('1',nums);
console.log(nums.mOrder(nums.root));


let time =new Date();
let n=100000;
while (n--){
    nums.mOrder(nums.root);

}
console.log(new Date()-time,'ms');//2476ms