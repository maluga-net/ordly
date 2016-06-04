

var Ordly = function(elements) {
    
    if ((typeof elements) === 'undefined') {
        
        elements = [];
    };
    
    this.elements = elements;
    
};

Ordly.prototype.get = function() {
    
    return this.elements;
}

Ordly.prototype.add = function(item) {
    
    var chooseFrom = [];
    
    if (this.elements.length > 0) {
        
        chooseFrom = [this.elements[0], item];
        
    } else {
    
        this.elements.push(item);
    }
    
    return chooseFrom;
}
    
Ordly.prototype.choose = function(item) {
    
    this.elements.unshift(item);
}
    
    
module.exports = {
    Ordly: Ordly
}