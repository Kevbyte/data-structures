var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);//[] ----> [[[key, value]]]
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit); //<----this is the hash function
 	if(!this._storage.get(i)){
 		this._storage.set(i, []);
 	}

 	this._storage.get(i).push([k, v]);
};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var result = null;
  _.each(this._storage.get(i), function(pair){
  	if(pair[0]===k){
  		result = pair[1];
  	}
  });

  return result;
};

HashTable.prototype.remove = function(k){
	var i = getIndexBelowMaxForKey(k, this._limit);
	_.each(this._storage.get(i), function(pair){
		if(pair[0]===k){
			pair[1]=null;
		}
	});
};



/*
 * Complexity: What is the time complexity of the above functions?
 */





// var myHashTable1 = new HashTable();
