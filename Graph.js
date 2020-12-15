class Graph{
    constructor(){
        this.adjacenyList = {};
    }

    addVertex(vertex){
        if(!this.adjacenyList[vertex]){
            this.adjacenyList[vertex] = []
        }
        
    }

    addEdge(vertex1, vertex2){
        this.adjacenyList[vertex1].push(vertex2);
        this.adjacenyList[vertex2].push(vertex1);
    }

    removeEdge(vertex1, vertex2){
        this.adjacenyList[vertex1] = this.adjacenyList[vertex1].filter(
            v => v !== vertex2
        );
        this.adjacenyList[vertex2] = this.adjacenyList[vertex2].filter(
            v => v !== vertex1
        );
    }

    removeVertex(vertex){
        while(this.adjacenyList[vertex].length){
            const adjacentVertex = this.adjacenyList[vertex].pop()
            this.removeEdge(vertex, adjacentVertex)
        }
        delete this.adjacenyList[vertex]
    }
}

g = new Graph();
g.addVertex("Dallas")
g.addVertex("Tokyo")
g.addVertex("Aspen")
g.addVertex("Los Angeles")
g.addVertex("Hong Kong")
g.addEdge("Tokyo", "Dallas")
g.addEdge("Aspen", "Dallas")
g.addEdge("Hong Kong", "Tokyo")
g.addEdge("Hong Kong", "Dallas")
g.addEdge("Los Angeles", "Hong Kong")
g.addEdge("Los Angeles", "Aspen")
// g.adjacenyList["Tokyo"].push("Something")
g.removeVertex("Hong Kong")

console.log(g)