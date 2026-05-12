class Node{
    constructor(value){
        this.value=value
        this.next=null
    }
}

class linkedList{
    constructor(){
        this.head=null
        this.tail=null
        this.size=0
    }

    isEmpty(){
        return this.size===0
    }

    getSize(){
        return this.size
    }

    prepend(value){
        const node=new Node(value)

        if(this.isEmpty()){
            this.tail=node
        }else{
            node.next=this.head
        }
        this.head=node
        this.size++
    }

    append(value){
        const node=new Node(value)

        if(this.isEmpty()){
            this.head=node
        }else{  
            this.tail.next=node
            this.tail=node
        }
         this.tail=node
         this.size++
    }


    insert(value,index){
        if(index<0||index>this.size)return null

        if(index===0){
            this.prepend(value)
        }else{
            const node=new Node(value)
            let prev=this.head
            for(let i=0;i<index-1;i++){
                prev=prev.next
            }
            const nextNode=prev.next
            prev.next=node
            node.next=nextNode
            this.size++
        }
    }

    removeByIndex(index){
        if(index<0||index>this.size-1)return null

        if(index===0){
            const curr=this.head
            this.head=curr.next
        }else{
            let prev=this.head
            for(let i=0;i<index-1;i++){
                prev=prev.next
            }
            let removeNode=prev.next
            prev.next=removeNode.next
            removeNode.next=null
        }
        this.size--
    }

    reverse(){
        if(this.isEmpty())return null

        let curr=this.head
        let prev=null

        while(curr){
            let next=curr.next
            curr.next=prev
            prev=curr
            curr=next
        }
        this.head=prev
    }

    removeByValue(value){
        if(this.isEmpty())return null

        if(this.head.value===value){
            this.head=this.head.next
            this.size--
        }else{
            let prev=this.head
            while(prev.next&&prev.next.value!==value){
                prev=prev.next
            }

            if(prev.next){
                let removeNode=prev.next
                prev.next=removeNode.next
                removeNode.next=null
                this.size--
            }else{
                return console.log('value not found')
            }
        }
    }

    search(value){
        if(this.isEmpty())return null

        let curr=this.head

        for(let i=0;i<this.size;i++){
            if(curr.value===value)return console.log(i)

            curr=curr.next
        }
        return console.log('value not found')
    }


    fromArray(arr){
        if(arr.length===0)return

       this.head=new Node(arr[0])
        let curr=this.head
        this.size=1

        for(let i=1;i<arr.length;i++){
            curr.next=new Node(arr[i])
            curr=curr.next
            this.size++
        }


    }

    removeDuplicates(){
        let curr=this.head

        while(curr&&curr.next){
            if(curr.value===curr.next.value){
                curr.next=curr.next.next
                this.size--
            }else{
                curr=curr.next
            }
        }
    }


    removeFromFront(){
        if(this.isEmpty())return console.log('list is empty')
            else{
        const value=this.head.value

        if(this.head===this.tail){
            this.head=null
            this.tail=null
        }else{
            this.head=this.head.next
        }
        this.size--
        return value
        }
    }

    removeFromEnd(){
        if(this.isEmpty())console.log('list is empty')
           
        const value=this.tail.value

        if(this.head===this.tail){
            this.head=null
            this.tail=null
        }else{
            let prev=this.head
            while(prev.next!==this.tail){
                prev=prev.next
            }
            prev.next=null
            this.tail=prev
        }
        this.size--
        
    }

    print(){
        if(this.isEmpty())console.log('list is empty')

            let curr=this.head
            let listValues=''

            while(curr){
                listValues+=`${curr.value}`+' '
                curr=curr.next
            }

            console.log(listValues)
    }
}

const list=new linkedList()

// list.append(10)
// list.append(20)
// list.append(30)
// list.append(40)
// list.prepend(10)
// list.prepend(20)
// list.prepend(30)
// list.prepend(40)
// list.removeFromFront()
// list.removeFromEnd()

// list.insert(25,2)

// list.search(20)
// list.removeByIndex(2)
// list.removeByValue(30)
// list.reverse()

let a=[10,20,30,20,40]
list.fromArray(a)
list.removeDuplicates()
list.print()
