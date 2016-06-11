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
     
    it('should have two items to choose from after one item added to existing one item', function() {
        
        var o = new ordly.Ordly(['one']);

        expect(o.add('two')).to.deep.equal(['one', 'two']);
        
    });
    
    it('should have two items to choose from after one item added to existing two items', function() {
        
        var o = new ordly.Ordly(['two', 'three']);

        expect(o.add('one')).to.deep.equal(['two', 'one']);
        
    });
    
    it('should have two items to choose from after one item added to existing three items', function() {
        
        var o = new ordly.Ordly(['two', 'three', 'four']);

        expect(o.add('one')).to.deep.equal(['three', 'one']);
        
    });
    
    it('should have two items to choose from after one item added to existing four items', function() {
        
        var o = new ordly.Ordly(['two', 'three', 'four', 'five']);

        expect(o.add('one')).to.deep.equal(['three', 'one']);
        
    });
    
    it('should have two items to choose from after one item added to existing five items', function() {
        
        var o = new ordly.Ordly(['two', 'three', 'four', 'five', 'six']);

        expect(o.add('one')).to.deep.equal(['four', 'one']);
        
    });
    
    it('should have two items to choose from after one item added and item choosed two times when existing seven items', function() {
        
        var o = new ordly.Ordly(['a', 'b', 'c', 'd', 'e', 'f', 'g']);

        expect(o.add('x')).to.deep.equal(['d', 'x']);
        expect(o.choose('d')).to.deep.equal(['f', 'x']);
        expect(o.choose('x')).to.deep.equal(['e', 'x']);
        
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
    
    // it('should have two items if one item added to existing two and choosing which is more important not finished', function() {
        
    //     var o = new ordly.Ordly(['foo', 'bar']);

    //     var chooseFrom = o.add('baz');
    //     expect(chooseFrom).to.have.length(2);
        
    //     o.choose(chooseFrom[1]);
        
    //     expect(o.get()).to.have.length(2);
    //     expect(o.get()).to.deep.equal(['foo', 'bar']);
    // });

    it('should have three items in correct order if one item added to existing two and choosing which is more important is finished', function() {
        
        var o = new ordly.Ordly(['foo','bar']);

        var chooseFrom = o.add('baz');
        expect(chooseFrom).to.have.length(2);
        
        o.choose(chooseFrom[1]);
        
        expect(o.get()).to.have.length(3);
        expect(o.get()).to.deep.equal(['baz', 'foo', 'bar']);
    });
    
    // it('should have five items in correct order if one item added to existing four and should be after first item', function() {
        
    //     var source = ['one','three','four', 'five'];
    //     var destination = ['one','two', 'three','four', 'five'];

    //     var o = new ordly.Ordly(source);

    //     var chooseFrom = o.add('two');
    //     expect(chooseFrom).to.have.length(2);
        
    //     var chooseFrom = o.choose(chooseFrom[1]);
    //     expect(chooseFrom).to.be.empty;
        
    //     expect(o.get()).to.have.length(5);
    //     expect(o.get()).to.deep.equal(destination);
    // });
    
    // it('should have five items in correct order if one item added to existing four and should be before first item', function() {
        
    //     var item = 'one';
    //     var source = ['two','three','four', 'five'];
    //     var destination = ['one','two', 'three','four', 'five'];
    //     var chosen = [1, 1];

    //     var o = new ordly.Ordly(source);
    //     var chooseFrom = o.add(item);

    //     for (var i in chosen) {
            
    //         chooseFrom = o.choose(chooseFrom[chosen[i]]);
    //     }

    //     expect(chooseFrom).to.be.empty;
        
    //     expect(o.get()).to.have.length(5);
    //     expect(o.get()).to.deep.equal(destination);
    // });
});