class HashTable {
    constructor(size) {
        this.table = new Array(size)
        this.size = size
    }

    hash(key) {
        let total = 0

        for (let char of key) {
            total += char.charCodeAt(0)
        }

        return total % this.size
    }

    set(key, value) {

        let index = this.hash(key)

        while (this.table[index]) {
            index = (index + 1) % this.size
        }

        this.table[index] = [key, value]
    }

    get(key) {

        let index = this.hash(key)

        while (this.table[index]) {

            if (this.table[index][0] === key) {
                return this.table[index][1]
            }

            index = (index + 1) % this.size
        }

        return undefined
    }

    display() {
        console.log(this.table)
    }
}

const ht = new HashTable(10)

ht.set("name", "Rahul")
ht.set("mane", "Arun")

ht.display()