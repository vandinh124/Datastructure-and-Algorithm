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
}

g = new Graph();
g.addVertex("Tokyo")
g.addVertex("San Jose")
g.addVertex("Dallas")
g.addEdge("Tokyo", "Dallas")
// g.adjacenyList["Tokyo"].push("Something")
console.log(g)