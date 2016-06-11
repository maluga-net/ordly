

var Ordly = function(elements) {
    
    if ((typeof elements) === 'undefined') {
        
        elements = [];
    };
    
    this.elements = elements;
    
    this.startIndex = 0;
    
    this.endIndex = this.elements.length - 1;
    
    this.middleIndex = 0;
    
    this.lastChooseFrom = [];
    
    this.itemToAdd;
    
    this.findMiddleIndex = function() {
        
        this.middleIndex = Math.floor((this.endIndex - this.startIndex) / 2) + this.startIndex;
        
        return this.middleIndex;
    }
};

Ordly.prototype.get = function() {
    
    return this.elements;
}

Ordly.prototype.add = function(item) {
    
    this.startIndex = 0;
    this.endIndex = this.elements.length - 1;
    this.lastChooseFrom = [];
    this.itemToAdd = item;
    
    if (this.elements.length > 0) {
        
        this.lastChooseFrom = [this.elements[this.findMiddleIndex()], this.itemToAdd];
        
    } else {
    
        this.elements.push(this.itemToAdd);
    }
    
    return this.lastChooseFrom;
}
    
Ordly.prototype.choose = function(item) {
    
    if(item == this.lastChooseFrom[0]) {
        
        this.startIndex = this.middleIndex + 1;
    } else {
        
        this.endIndex = this.middleIndex - 1;
    }

    this.findMiddleIndex();

    console.log(this.startIndex + '/' + this.middleIndex + '/' + this.endIndex);

    this.lastChooseFrom = [this.elements[this.middleIndex], this.itemToAdd];
    
    return this.lastChooseFrom;
}
    
    
module.exports = {
    Ordly: Ordly
}