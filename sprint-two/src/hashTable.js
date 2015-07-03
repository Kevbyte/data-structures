var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);//[] ----> [[[key, value]]]
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit); //<----this is the hash function
  // var bucket = this._storage.get(i)
   if(this._storage.get(i)===undefined){
			this._storage.get(i) = [];   
   }
   console.log("hi")
   this._storage.set(i, [k, v]);
   console.log(this._storage)

  
};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  // this._storage.get(i).each(function(pair){
  // 	if(pair[0]===k){
  // 		return pair[1];
  // 	}
  // });
};

HashTable.prototype.remove = function(k){

};



/*
 * Complexity: What is the time complexity of the above functions?
 */





// var myHashTable1 = new HashTable();
