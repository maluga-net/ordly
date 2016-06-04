var expect = require('chai').expect;
var ordly = require('../src/ordly');

describe('ordly', function() {
    
    it('should be empty by default', function() {
        
        var o = new ordly.Ordly();
        expect(o.get()).to.be.empty;
    });
    
    it('should be empty if initilized with empty array', function() {
        
        var o = new ordly.Ordly([]);
        expect(o.get()).to.be.empty;
        
    });
    
    it('should not be empty if initilized with non empty array', function() {
        
        var o = new ordly.Ordly(['foo']);
        expect(o.get()).to.have.length(1);
        
        o = new ordly.Ordly(['foo', 'bar', 'baz']);
        expect(o.get()).to.have.length(3);
    });

    it('should have one item if one item added', function() {
        
        var o = new ordly.Ordly();
        expect(o.add('bar')).to.be.empty;
        expect(o.get()).to.have.length(1);
    });

    it('should have one item if two items added, but not choosed which is more important', function() {
        
        var o = new ordly.Ordly();
        o.add('bar');
        o.add('foo');
        
        expect(o.get()).to.have.length(1);
        
    });

    it('should have two items in correct order if two items added and choosed which is more important', function() {
        
        var o = new ordly.Ordly();
        var item1 ='bar';
        var item2 = 'foo';
        
        var chooseFrom = o.add(item1);
        
        expect(chooseFrom).to.be.empty;
        
        chooseFrom = o.add(item2);
        
        expect(chooseFrom).to.have.length(2);
        
        o.choose(chooseFrom[1]);
        
        expect(o.get()).to.have.length(2);
        expect(o.get()).to.deep.equal([item2, item1]);
    });
    
    it('should have two items if one item added to existing two and choosing which is more important not finished', function() {
        
        var o = new ordly.Ordly(['foo', 'bar']);

        var chooseFrom = o.add('baz');
        expect(chooseFrom).to.have.length(2);
        
        o.choose(chooseFrom[1]);
        
        expect(o.get()).to.have.length(2);
        expect(o.get()).to.deep.equal(['foo', 'bar']);
    });

    it('should have three items in correct order if one item added to existing two and choosing which is more important is finished', function() {
        
        var o = new ordly.Ordly(['foo','bar']);

        var chooseFrom = o.add('baz');
        expect(chooseFrom).to.have.length(2);
        
        o.choose(chooseFrom[1]);
        
        expect(o.get()).to.have.length(3);
        expect(o.get()).to.deep.equal(['baz', 'foo', 'bar']);
    });    
});