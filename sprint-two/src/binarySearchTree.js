var BinarySearchTree = function(value){
  var newBST = {};
  
  newBST.value = value;
  newBST.left = undefined;
  newBST.right = undefined;
  
  newBST.insert = function(value){
    var node = BinarySearchTree(value);
    if(value > newBST.value){
      if(newBST.right === undefined) {
        newBST.right = node;
      }else{
        newBST.right.insert(value);
      }
    } else{
      if(newBST.left === undefined) {
        newBST.left = node;
      }else{
        newBST.left.insert(value);
      }
    }
  }

  newBST.contains = function(value){
    if(value === newBST.value) {
      return true;
    } 
    if(value > newBST.value) {
      if(newBST.right === undefined) {
        return false;
      }
      return newBST.right.contains(value);
    } else {
      if(newBST.left === undefined) {
        return false;
      }
      return newBST.left.contains(value);
    }
  };

  newBST.depthFirstLog = function(cb){
    cb(newBST.value);
    
    if(newBST.left !== undefined) {
      newBST.left.depthFirstLog(cb);
    }
    if(newBST.right !== undefined) {
      newBST.right.depthFirstLog(cb);
    }
  }


return newBST;
};
/*
 * Complexity: What is the time complexity of the above functions?
 */

 //{value:5, left: undefined, right: undefined}
