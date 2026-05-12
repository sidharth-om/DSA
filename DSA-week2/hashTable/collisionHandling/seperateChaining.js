class HashTable {
    constructor(size) {
        this.table = new Array(size)
        this.size = size
    }

    hash(key) {
        let total = 0

        for (let i = 0; i < key.length; i++) {
            total += key.charCodeAt(i)
        }

        return total % this.size
    }

    set(key, value) {

        const index = this.hash(key)

        if (!this.table[index]) {
            this.table[index] = []
        }

        const bucket = this.table[index]

        const sameKey = bucket.find(item => item[0] === key)

        if (sameKey) {
            sameKey[1] = value
        } else {
            bucket.push([key, value])
        }
    }

    get(key) {

        const index = this.hash(key)

        const bucket = this.table[index]

        if (bucket) {

            const item = bucket.find(item => item[0] === key)

            if (item) {
                return item[1]
            }
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