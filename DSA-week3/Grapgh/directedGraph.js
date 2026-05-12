class DirectedGraph {

    constructor() {
        this.adjacencyList = {}
    }

    // ADD VERTEX
    addVertex(vertex) {

        if (!this.adjacencyList[vertex]) {

            this.adjacencyList[vertex] = new Set()
        }
    }

    // ADD DIRECTED EDGE
    addEdge(vertex1, vertex2) {

        if (!this.adjacencyList[vertex1]) {
            this.addVertex(vertex1)
        }

        if (!this.adjacencyList[vertex2]) {
            this.addVertex(vertex2)
        }

        // ONLY ONE DIRECTION
        this.adjacencyList[vertex1].add(vertex2)
    }

    // CHECK EDGE
    hasEdge(vertex1, vertex2) {

        return this.adjacencyList[vertex1]?.has(vertex2)
    }

    // REMOVE EDGE
    removeEdge(vertex1, vertex2) {

        if (this.adjacencyList[vertex1]) {

            this.adjacencyList[vertex1].delete(vertex2)
        }
    }

    // REMOVE VERTEX
    removeVertex(vertex) {

        if (!this.adjacencyList[vertex]) {
            return
        }

        // REMOVE INCOMING EDGES
        for (let v in this.adjacencyList) {

            this.adjacencyList[v].delete(vertex)
        }

        // REMOVE VERTEX
        delete this.adjacencyList[vertex]
    }

    // BFS
    bfs(start) {

        let queue = [start]

        let visited = new Set()

        visited.add(start)

        while (queue.length > 0) {

            let vertex = queue.shift()

            console.log(vertex)

            for (let neighbor of this.adjacencyList[vertex]) {

                if (!visited.has(neighbor)) {

                    visited.add(neighbor)

                    queue.push(neighbor)
                }
            }
        }
    }

    // DFS
    dfs(start, visited = new Set()) {

        if (!visited.has(start)) {

            console.log(start)

            visited.add(start)

            for (let neighbor of this.adjacencyList[start]) {

                if (!visited.has(neighbor)) {

                    this.dfs(neighbor, visited)
                }
            }
        }
    }

    // DISPLAY
    display() {

        for (let vertex in this.adjacencyList) {

            console.log(
                `${vertex} -> ${[...this.adjacencyList[vertex]].join(" ")}`
            )
        }
    }
}


// CREATE GRAPH
const graph = new DirectedGraph()


// ADD VERTICES
graph.addVertex("A")
graph.addVertex("B")
graph.addVertex("C")
graph.addVertex("D")


// ADD DIRECTED EDGES
graph.addEdge("A", "B")
graph.addEdge("A", "C")
graph.addEdge("B", "D")


// DISPLAY
console.log("DIRECTED GRAPH")
graph.display()


// CHECK EDGE
console.log("HAS EDGE A-B :", graph.hasEdge("A", "B"))

console.log("HAS EDGE B-A :", graph.hasEdge("B", "A"))


// BFS
console.log("BFS")
graph.bfs("A")


// DFS
console.log("DFS")
graph.dfs("A")


// REMOVE EDGE
graph.removeEdge("A", "B")

console.log("AFTER REMOVING EDGE A-B")
graph.display()


// REMOVE VERTEX
graph.removeVertex("D")

console.log("AFTER REMOVING VERTEX D")
graph.display()