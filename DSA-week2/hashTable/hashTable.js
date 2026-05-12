// hashTable Implementation



class HashTable {
    constructor(size) {
        this.table = new Array(size)
        this.size = size
    }

    hash(key) {
        let total = 0

        for(let i = 0; i < key.length; i++) {
            total += key.charCodeAt(i)
        }

        return total % this.size
    }

    set(key, value) {

        const index = this.hash(key)

        this.table[index] = value
    }

    get(key) {

        const index = this.hash(key)

        return this.table[index]
    }

    remove(key) {

        const index = this.hash(key)

        this.table[index] = undefined
    }

    display() {

        for(let i = 0; i < this.table.length; i++) {

            if(this.table[i]) {
                console.log(i, this.table[i])
            }
        }
    }
}

const ht = new HashTable(50)

ht.set("name", "Sidharth")
ht.set("age", 23)

console.log(ht.get("name"))

ht.display()







// HashTable with collision



class HashTable{
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
        const index=this.hash(key)
        const bucket=this.table[index]
        if(!bucket){
            this.table[index]=[[key,value]]
        }else{
            let samekeyitem=bucket.find(item=>item[0]===key)
            if(samekeyitem){
                samekeyitem[1]=value
            }else{
                bucket.push([key,value])
            }
        }
    }
    get(key){
        const index=this.hash(key)
        const bucket=this.table[index]
        if(bucket){
            const samekeyitem=bucket.find(item=>item[0]===key)
            if(samekeyitem){
                return samekeyitem[1]
            }
        }
        return undefined
    }
    remove(key){
        const index=this.hash(key)
        const bucket=this.table[index]
        if(bucket){
            const samekeyitem=bucket.find(item=>item[0]===key)
            if(samekeyitem){
                bucket.splice(bucket.indexOf(samekeyitem),1)
            }
        }
        
    }
    display(){
        for(let i=0;i<this.table.length;i++){
            if(this.table[i]){
                console.log(i,this.table[i])
            }
        }
    }
    
}

const hash=new HashTable(50)
hash.set("name","Rahul")
hash.set("mane","Arun")
hash.remove("name")
hash.display()
