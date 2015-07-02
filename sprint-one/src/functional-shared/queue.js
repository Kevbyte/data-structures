var Queue = function(){
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newQueue = {};
  newQueue.storage = {};
  newQueue.length = 0;
  extend(newQueue, queueMethods);
  return newQueue;

};

var queueMethods = {};

queueMethods.enqueue = function(value){
	this.length++;
	this.storage[this.length] = value;
};

queueMethods.dequeue = function(){
	if(this.length>0){
		this.length--;
		var stored = this.storage[1];
		delete this.storage[1];
		for(var key in this.storage){
			this.storage[key-1] = this.storage[key];
		}
		return stored;
	}
};

queueMethods.size = function(){
	return this.length;
};



