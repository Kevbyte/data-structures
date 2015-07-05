

var Graph = function(){
  this.storage = {};  //{node: {key:[]}}
};

Graph.prototype.addNode = function(node){
  //takes a new node and adds it to graph puppies = {edges: []}
  this.storage[node] = {edges:[]};
};

Graph.prototype.contains = function(node){
  //takes any node and returns a boolean if it exists in graph
  var result = false;
  if(this.storage[node]) {
    result = true;
  }
  return result;
};

Graph.prototype.removeNode = function(node){
  //takes a node and removes it
  delete this.storage[node];
};

Graph.prototype.hasEdge = function(fromNode, toNode){
  //returns a boolean based on whether or not two nodes are connected
  //if puppies's edges has kittens in the array and if kittens's edges has puppies in the array
  var result = false;
  for(var i = 0; i < this.storage[fromNode].edges.length; i++) {
 
    if(this.storage[fromNode].edges[i] === toNode) {
      result = true;
   
   
    }
  }
  return result;

};

Graph.prototype.addEdge = function(fromNode, toNode){ //puppies, kittens
  //creates a connection between two nodes in graph
  
  this.storage[fromNode].edges.push(toNode);
  this.storage[toNode].edges.push(fromNode);

  
  
};

Graph.prototype.removeEdge = function(fromNode, toNode){
  //removes a connection between two nodes
  for(var i = 0; i < this.storage[fromNode].edges.length; i++) {
    if(this.storage[fromNode].edges[i] === toNode) {
      this.storage[fromNode].edges.splice(i, 1);
    }
  }
  for(var i = 0; i < this.storage[toNode].edges.length; i++) {
    if(this.storage[toNode].edges[i] === fromNode) {
      this.storage[toNode].edges.splice(i, 1);
    }
  }
};

Graph.prototype.forEachNode = function(cb){
  //traverses through graph, calling the passed in function once on each node
  for(var key in this.storage){
    cb(key);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


// myGraph = new Graph
