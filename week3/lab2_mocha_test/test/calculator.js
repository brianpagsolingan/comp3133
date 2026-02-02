const {expect} = require('chai');
const {add, sub, mul, div} = require('../app/calculator');

describe('Calculator Module', function() {

    // Test for addition
    describe('add()', function() {
        it('add(2,3) should return the sum of two numbers - PASS', function() {
            expect(add(2, 3)).to.equal(5);
        });
        it('add(2,3) should NOT return 6', function() {
            expect(add(2, 3)).to.not.equal(6);
        });
    });

    // Test for subtraction
    describe('sub()', function() {
        it('sub(5,3) should return the difference of two numbers - PASS', function() {
            expect(sub(5, 3)).to.equal(2);
        });
        it('sub(5,3) should NOT return 3', function() {
            expect(sub(5, 3)).to.not.equal(3);
        });
        
    });
    // Test for multiplication
    describe('mul()', function() {
        it('mul(2,3) should return the product of two numbers - PASS', function() {
            expect(mul(2, 3)).to.equal(6);
        });
        it('mul(2,3) should NOT return 5', function() {
            expect(mul(2, 3)).to.not.equal(5);
        });
    });

    // Test for division
    describe('div()', function() {
        it('should return the quotient of two numbers - PASS', function() {
            expect(div(6, 3)).to.equal(2);
        });
        it('div(6,3) should NOT return 3', function() {
            expect(div(6, 3)).to.not.equal(3);
        });
    });
}); 