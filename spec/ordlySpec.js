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
    
    it('should have two items in correct order if one item added to existing one and should be before first item', function() {
        
        var item = 'one';
        var source = ['two'];
        var destination = ['one', 'two'];
        var chosen = [1];

        var o = new ordly.Ordly(source);
        
        var chooseFrom = o.add(item);

        for (var i in chosen) {
            
            chooseFrom = o.choose(chooseFrom[chosen[i]]);
        }

        expect(chooseFrom).to.be.empty;
        
        expect(o.get()).to.deep.equal(destination);
    });
    
    it('should have two items in correct order if one item added to existing one and should be after first item', function() {
        
        var item = 'two';
        var source = ['one'];
        var destination = ['one', 'two'];
        var chosen = [0];

        var o = new ordly.Ordly(source);
       
        var chooseFrom = o.add(item);

        for (var i in chosen) {
            
            chooseFrom = o.choose(chooseFrom[chosen[i]]);
        }

        expect(chooseFrom).to.be.empty;
        
        expect(o.get()).to.deep.equal(destination);
    });
    
    
    it('should have three items in correct order if one item added to existing two and should be before first item', function() {
        
        var item = 'one';
        var source = ['two','three'];
        var destination = ['one', 'two', 'three'];
        var chosen = [1];

        var o = new ordly.Ordly(source);
        
        var chooseFrom = o.add(item);

        for (var i in chosen) {
            
            chooseFrom = o.choose(chooseFrom[chosen[i]]);
        }

        expect(chooseFrom).to.be.empty;
        
        expect(o.get()).to.deep.equal(destination);
    });
    
    it('should have three items in correct order if one item added to existing two and should be after first item', function() {
        
        var item = 'two';
        var source = ['one','three'];
        var destination = ['one', 'two', 'three'];
        var chosen = [0, 1];

        var o = new ordly.Ordly(source);
        var chooseFrom = o.add(item);

        for (var i in chosen) {
            
            chooseFrom = o.choose(chooseFrom[chosen[i]]);
        }

        expect(chooseFrom).to.be.empty;
        
        expect(o.get()).to.deep.equal(destination);
    });
    
    it('should have three items in correct order if one item added to existing two and should be after second item', function() {
        
        var item = 'three';
        var source = ['one','two'];
        var destination = ['one', 'two', 'three'];
        var chosen = [0, 0];

        var o = new ordly.Ordly(source);
        var chooseFrom = o.add(item);

        for (var i in chosen) {
            
            chooseFrom = o.choose(chooseFrom[chosen[i]]);
        }

        expect(chooseFrom).to.be.empty;
        
        expect(o.get()).to.deep.equal(destination);
    });
    
    it('should have four items in correct order if one item added to existing three and should be before first item', function() {
        
        var item = 'one';
        var source = ['two', 'three', 'four'];
        var destination = ['one', 'two', 'three', 'four'];
        var chosen = [1, 1];

        var o = new ordly.Ordly(source);
        var chooseFrom = o.add(item);

        for (var i in chosen) {
            
            chooseFrom = o.choose(chooseFrom[chosen[i]]);
        }

        expect(chooseFrom).to.be.empty;
        
        expect(o.get()).to.deep.equal(destination);
    });
    
    it('should have four items in correct order if one item added to existing three and should be after first item', function() {
        
        var item = 'two';
        var source = ['one', 'three', 'four'];
        var destination = ['one', 'two', 'three', 'four'];
        var chosen = [1, 0];

        var o = new ordly.Ordly(source);
        var chooseFrom = o.add(item);

        for (var i in chosen) {
            
            chooseFrom = o.choose(chooseFrom[chosen[i]]);
        }

        expect(chooseFrom).to.be.empty;
        
        expect(o.get()).to.deep.equal(destination);
    });
    
    it('should have four items in correct order if one item added to existing three and should be after second item', function() {
        
        var item = 'three';
        var source = ['one', 'two', 'four'];
        var destination = ['one', 'two', 'three', 'four'];
        var chosen = [0, 1];

        var o = new ordly.Ordly(source);
        var chooseFrom = o.add(item);

        for (var i in chosen) {
            
            chooseFrom = o.choose(chooseFrom[chosen[i]]);
        }

        expect(chooseFrom).to.be.empty;
        
        expect(o.get()).to.deep.equal(destination);
    });
    
    it('should have four items in correct order if one item added to existing three and should be after third item', function() {
        
        var item = 'four';
        var source = ['one', 'two', 'three'];
        var destination = ['one', 'two', 'three', 'four'];
        var chosen = [0, 0];

        var o = new ordly.Ordly(source);
        var chooseFrom = o.add(item);

        for (var i in chosen) {
            
            chooseFrom = o.choose(chooseFrom[chosen[i]]);
        }

        expect(chooseFrom).to.be.empty;
        
        expect(o.get()).to.deep.equal(destination);
    });
    
    // @TODO: check for source with 4 and 5 items
});