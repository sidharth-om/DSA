class HashTable {
    constructor(size) {
        this.table = new Array(size)
        this.size = size
    }

    hash1(key) {

        let total = 0

        for (let char of key) {
            total += char.charCodeAt(0)
        }

        return total % this.size
    }

    hash2(key) {

        let total = 0

        for (let char of key) {
            total += char.charCodeAt(0)
        }

        return 7 - (total % 7)
    }

    set(key, value) {

        let index = this.hash1(key)

        let stepSize = this.hash2(key)

        let i = 0

        while (this.table[index]) {

            index = (this.hash1(key) + i * stepSize) % this.size

            i++
        }

        this.table[index] = [key, value]
    }

    get(key) {

        let index = this.hash1(key)

        let stepSize = this.hash2(key)

        let i = 0

        while (this.table[index]) {

            if (this.table[index][0] === key) {
                return this.table[index][1]
            }

            index = (this.hash1(key) + i * stepSize) % this.size

            i++
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