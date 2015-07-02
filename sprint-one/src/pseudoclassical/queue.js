var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.length = 0;
  this.storage = {};
};

Queue.prototype.enqueue = function(value) {
	this.length++;
	this.storage[this.length] = value;
};

Queue.prototype.dequeue = function() {
	if(this.length>0) {
		this.length--;
		var stored = this.storage[1];
		delete this.storage[1];
		for(var key in this.storage) {
			this.storage[key-1] = this.storage[key];
		}
		return stored;
	}
};

Queue.prototype.size = function() {
	return this.length;
};