var LinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
    var newNode = Node(value);
    if(list.head === null){
      list.head = newNode;
    }
    if(list.tail !== null){
      list.tail.next = newNode; 
    }

    list.tail = newNode;
  };

  list.removeHead = function(){
    var formerHead = list.head;
    list.head = list.head.next;
    return formerHead.value;
  };

  list.contains = function(target){
    var currentNode = list.head;
    while(currentNode !== null) {
      if(currentNode.value === target) {
        return true;
      }
      currentNode = currentNode.next;
    }
    return false;
  };

  return list;
};

var Node = function(value){
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */

// head (4) 5 6 7 8 9 tail