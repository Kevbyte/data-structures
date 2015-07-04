var Set = function(){
  var set = Object.create(setPrototype);
  set._storage = undefined;
  return set;
};

var setPrototype = {};

setPrototype.add = function(item){
  //adding values to a set(an array)
  var result = false;
  if(!this._storage){
    this._storage = [];
  }
  _.each(this._storage, function(value){ //look at each index in array
    if(value === item){                   // if current value is item update result
      result = true;
    }
  });
  if(result===false){
    this._storage.push(item);
  }

  
};

setPrototype.contains = function(item){
  //need to look at all items in the set
  var result = false;
  _.each(this._storage, function(value){
    if(value===item){ //if the item in the set is equal to the item we are looking for
      result = true;    //set result equal to true
    }
  });
  return result;      //return result
};

setPrototype.remove = function(item){
  //loop through array and if we ever find item in array splice it
  for(var i=0; i<this._storage.length; i++){
    if(this._storage[i]===item){
      this._storage.splice(i, 1);
    }
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */

 ["Mel Gibson", "adam"]
