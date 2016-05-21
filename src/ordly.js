

var Ordly = function(elements) {
    
    this.elements = elements;
    
};

Ordly.prototype.get = function() {
    
    return this.elements;
}
    
module.exports = {
    Ordly: Ordly
}