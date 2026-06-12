class Node{
    constructor(value){
        this.value=value
        this.left=null
        this.right=null
    }
}

class binaryTree{
    constructor(){
        this.root=null
    }
    
    build(){
        this.root=new Node(1)
        
        this.root.left=new Node(2)
        this.root.right=new Node(3)
        
        this.root.left.left=new Node(4)
        this.root.left.right=new Node(5)
    }
    
    inOrder(node){
        if(node){
               this.inOrder(node.left)
        console.log(node.value)
        this.inOrder(node.right)
        }
     
    }
    
    preOrder(node){
        if(node){
              console.log(node.value)
        this.preOrder(node.left)
        this.preOrder(node.right)
        }
      
    }
    
    postOrder(node){
        if(node){
             this.postOrder(node.left)
        this.postOrder(node.right)
        console.log(node.value)
        }
       
    }
}


const bt=new binaryTree()

bt.build()

bt.inOrder(bt.root)

bt.preOrder(bt.root)

bt.postOrder(bt.root)




// Tree Structure
//         1
//       / \
//       2   3
//      / \
//     4   5
// Traversal Outputs
// Inorder (Left Root Right)
// 4
// 2
// 5
// 1
// 3
// Preorder (Root Left Right)
// 1
// 2
// 4
// 5
// 3
// Postorder (Left Right Root)
// 4
// 5
// 2
// 3
// 1
















