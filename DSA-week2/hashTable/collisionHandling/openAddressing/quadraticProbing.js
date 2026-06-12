class hashTable{
    constructor(size){

        this.table=new Array(size)

        this.size=size
    }
    
    hash(key){
        let total=0
        
        for(let i=0;i<key.length;i++){

            total+=key.charCodeAt(i)

        }
        return total%this.size

    }
    
    set(key,value){

        let startIndex=this.hash(key)

        let index=startIndex
        
        let i=1
        
        while(this.table[index]){

            if(this.table[index][0]===key){

                this.table[index][1]=value

                return

            }
            index=(startIndex+i*i)%this.size

            i++

        }

        this.table[index]=[key,value]

    }
    
    
    get(key){

        let startIndex=this.hash(key)

        let index=startIndex
        
        let i=1
        
        while(this.table[index]){

            if(this.table[index][0]===key){

                return this.table[index][1]

            }
            index=(startIndex+i*i)%this.size

            i++

        }

        return undefined

    }
    
    display(){

        console.log(this.table)
        
    }
}

const table=new hashTable(5)

table.set('name','sid')
table.set('mane','sidhu')
table.set('age',23)
console.log(table.get('name'))
table.display()













