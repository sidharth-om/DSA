class Node{
    constructor(value){
        this.value=value
        this.next=null
        this.prev=null
    }
}


class doubleLinkedList{
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
            this.head=node
            this.tail=node
        }else{
            node.next=this.head
            this.head.prev=node
            this.head=node
        }
        this.size++
    }

    append(value){
        const node=new Node(value)

        if(this.isEmpty){
            this.head=node
            this.tail=node
        }else{
            this.tail.next=node
            node.prev=this.tail
            this.tail=node
        }
        this.size++
    }

    insert(value,index){
        if(index<0||index>this.size)return null

        if(index===0){
            this.prepend(value)
        }else if(index===this.size){
            this.append(value)
        }else{
            const node=new Node(value)
            let curr=this.head

            for(let i=0;i<index;i++){
                curr=curr.next
            }
            node.prev=curr.prev
            curr.prev.next=node
            node.next=curr
            curr.prev=node

            this.size++
        }
    }


    removeByIndex(index){
        if(index<0||index>=this.size)return null

        if(index===0){
            return this.removeFromFront()
        }else if(index===this.size-1){
            return this.removeFromEnd
        }else{
            let curr=this.head
            for(let i=0;i<index;i++){
                curr=curr.next
            }
            curr.next.prev=curr.prev
            curr.prev.next=curr.next

            this.size--
            return curr.value
        }
    }


    removeByValue(value){
        if(this.isEmpty())return null

        let curr=this.head

        while(curr&&curr.value!==value){
            curr=curr.next
        }

        if(!curr){
            console.log('no value found')
            return
        }

        if(curr=this.head)return this.removeFromFront()
        if(curr=this.tail)return this.removeFromEnd()

            curr.next.prev=curr.prev
            curr.prev.next=curr.next

            this.size--
    }

    search(value){
        let curr=this.head
        let index=0

        while(curr){
            if(curr.value===value){
                console.log(index)
                return
            }
            curr=curr.next
            index++
        }
        console.log('value not found')
    }


    reverse(){
        if(this.isEmpty())return null

        let curr=this.head
        let temp=null

        while(curr){
            temp=curr.prev
            curr.prev=curr.next
            curr.next=temp
            curr=curr.prev
        }

        temp=this.head
        this.head=this.tail
        this.tail=temp
    }


    fromArray(arr){
        if(arr.length===0)return 

        this.head=this.tail=new Node(arr[0])
        this.size=1

        let curr=this.head

        for(let i=1;i<arr.length;i++){
            let node=new Node(arr[i])
            curr.next=node
            node.prev=curr
            curr=node
            this.size++
        }
        this.tail=curr
    }

    removeDuplicates(){
        let curr=this.head

        while(curr&&curr.next){
            if(curr.value===curr.next.value){
                curr.next=curr.next.next

                if(curr.next){
                    curr.next.prev=curr
                }else{
                    this.tail=curr
                }
                this.size--
            }else{
                curr=curr.next
            }
        }
    }


    removeFromFront(){
        if(this.isEmpty())return console.log('list is empty')

            let value=this.head.value

            if(this.head===this.tail){
                this.head=this.tail=null
            }else{
                this.head=this.head.next
                this.head.prev=null
            }

            this.size--
            return value
    }

    removeFromEnd(){
        if(this.isEmpty())return console.log('list is Empty')

            let value=this.tail.value

            if(this.head.value===this.tail.value){
                this.head=this.tail=null
            }else{
                this.tail=this.tail.prev
                this.tail.next=null
            }

            this.size--
            return value
    }

    print(){
        if(this.isEmpty())return console.log('list is empty')

            let curr=this.head
            let listValues=''

            while(curr){
                listValues+=`${curr.value}`+' '
                curr=curr.next
            }
            console.log(listValues)
    }

    printReverse(){
        if(this.isEmpty())return console.log('list is empty')

            let curr=this.tail
            let listValues=''

            while(curr){
                listValues+=`${curr.value}`+' '
                curr=curr.next
            }
            console.log(listValues)
    }

}