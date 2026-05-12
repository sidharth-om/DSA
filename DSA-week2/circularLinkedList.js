class Node{
    constructor(value){
        this.value=value
        this.next=null
    }
}

class circular{
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
            this.head=this.tail=node
            node.next=this.head
        }else{
            node.next=this.head
            this.head=node
            this.tail.next=this.head
        }
        this.size++
    }


    append(value){
        const node= new Node(value)

        if(this.isEmpty()){
            this.tail=this.head=node
            node.next=this.head
        }else{
            this.tail.next=node
            this.tail=node
            node.next=this.head
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
            let prev=this.head

            for(let i=0;i<index-1;i++){
                prev=prev.next
            }

            node.next=prev.next
            prev.next=node
            this.size++
        }
    }


    removeByIndex(index){
        if(index<0||index>=this.size)return null

        if(index===0){
            return this.removeFromFront()
        }

        let prev=this.head

        for(let i=0;i<index-1;i++){
            prev=prev.next
        }

        let removeNode=prev.next
        prev.next=removeNode.next

        if(removeNode===this.tail){
            this.tail=prev
            prev.next=this.head
        }

        this.size--
        return removeNode.value
    }


    removeByValue(value){
        if(this.isEmpty())return null

        let curr=this.head
        let prev=this.tail

        do{
            if(curr.value===value){

                if(curr===this.head){
                    return this.removeFromFront()
                }

                prev.next=curr.next

                if(curr===this.tail){
                    this.tail=prev
                }

                this.size--
                return
            }
            prev=curr
            curr=curr.next
        }while(curr!==this.head)

            console.log('value not found')
    }

    search(value){
        if(this.isEmpty())return null

        let curr=this.head
        let index=0

        do{
            if(curr.value===value){
                console.log(index)
                return
            }
            curr=curr.next
            index++
        }while(curr!==this.head)
            console.log('value not found')
    }


    reverse(){
        if(this.isEmpty())return null

        let curr=this.head
        let prev=this.tail
        let next=null

        do{
            next=curr.next
            curr.next=prev
            prev=curr
            curr=next
        }while(curr!==this.head)

            let temp=this.head
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
            curr=node
            this.size++
        }

        this.tail=curr
        this.tail.next=this.head
    }


    removeDuplicates(){
        if(this.isEmpty())return null

        let curr=this.head

        do{
            let runner=this.head

            while(runner.next!==this.head){
                if(runner.next.value===curr.value){
                    if(runner.next===this.tail){
                        this.tail=runner
                    }
                    runner.next=runner.next.next
                    this.size--
                }else{
                    runner=runner.next
                }
            }
            curr=curr.next
        }while(curr!==this.head)
    }


    removeFromFront(){
        if(this.isEmpty())return console.log('list is empty')

            const value=this.head.value

            if(this.head===this.tail){
                this.head=this.tail=null
            }else{
                this.head=this.head.next
                this.tail.next=this.head
            }

            this.size--
            return value
    }


    removeFromEnd(){
        if(this.isEmpty())return console.log('list is empty')

            const value=this.tail.value

            if(this.head===this.tail){
                this.head=this.tail=null
            }else{
                let prev=this.head
                while(prev.next!==this.tail){
                    prev=prev.next
                }

                prev.next=this.head
                this.tail=prev
            }
            this.size--
            return value

    }


    print(){
        let curr=this.head
        let listValues=''

        do{
            listValues+=curr.value+' '
            curr=curr.next
        }while(curr!==this.head)

            console.log(listValues)
    }
}


const list=new circular()

list.append(10)
list.append(20)
list.append(30)
list.append(40)

list.search(20)
list.print()
