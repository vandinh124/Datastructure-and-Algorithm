class Graph{
    constructor(){
        this.adjacenyList = {};
    }

    addVertex(vertex){
        if(!this.adjacenyList[vertex]){
            this.adjacenyList[vertex] = []
        }
        
    }
}

g = new Graph();
g.addVertex("Tokyo")
g.addVertex("San Jose")
// g.adjacenyList["Tokyo"].push("Something")
console.log(g)