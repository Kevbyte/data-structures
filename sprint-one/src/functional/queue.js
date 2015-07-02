var Queue = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var length = 0;
  

  // Implement the methods below

  someInstance.enqueue = function(value){
    length++;
    storage[length] = value;
  };

  someInstance.dequeue = function(){
    if(length>0){
      length--;
      var stored = storage[1];
      delete storage[1];
      for(var key in storage){
        storage[key-1] = storage[key];
      }
      return stored; //a

    }
  };

  someInstance.size = function(){
    return length;
  };

  return someInstance;
};
