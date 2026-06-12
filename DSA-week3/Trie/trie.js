class TrieNode {

    constructor() {
        this.children = {}
        this.isEndWord = false
    }
}

class Trie {

    constructor() {
        this.root = new TrieNode()
    }

    // INSERT
    insert(word) {

        let node = this.root

        for (let char of word) {

            if (!node.children[char]) {

                node.children[char] = new TrieNode()
            }

            node = node.children[char]
        }

        node.isEndWord = true
    }

    // SEARCH
    search(word) {

        let node = this.root

        for (let char of word) {

            if (!node.children[char]) {
                return false
            }

            node = node.children[char]
        }

        return node.isEndWord
    }

    // PREFIX SEARCH
    startsWith(prefix) {

        let node = this.root

        for (let char of prefix) {

            if (!node.children[char]) {
                return false
            }

            node = node.children[char]
        }

        return true
    }

    // AUTOCOMPLETE
    autoComplete(prefix) {

        let node = this.root

        for (let char of prefix) {

            if (!node.children[char]) {
                return []
            }

            node = node.children[char]
        }

        let words = []

        this.collectionOfWord(prefix, node, words)

        return words
    }

    // COLLECT WORDS
    collectionOfWord(prefix, node, words) {

        if (node.isEndWord) {
            words.push(prefix)
        }

        for (let char in node.children) {

            this.collectionOfWord(
                prefix + char,
                node.children[char],
                words
            )
        }
    }


     delete(word){
        let node = this.root
        for(let char of word){
            if(!node.children[char]) return -1
            node = node.children[char]
        }

        if(node.isEndOfWord){
            node.isEndOfWord = false
        }else return -1
    }
}

// CREATE TRIE
const trie = new Trie()

trie.insert("cat")
trie.insert("car")
trie.insert("can")
trie.insert("cap")
trie.insert("dog")

// SEARCH
console.log(trie.search("cat"))

console.log(trie.search("cow"))

// PREFIX
console.log(trie.startsWith("ca"))

// AUTOCOMPLETE
console.log(trie.autoComplete("ca"))

// DELETE
trie.delete("car")

console.log(trie.autoComplete("ca"))