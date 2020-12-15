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
}

g = new Graph();
g.addVertex("Tokyo")
g.addVertex("San Jose")
g.addVertex("Dallas")
g.addEdge("Tokyo", "Dallas")
// g.adjacenyList["Tokyo"].push("Something")
g.removeEdge("Tokyo", "Dallas")
console.log(g)