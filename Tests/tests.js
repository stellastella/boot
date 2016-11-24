
  'use strict';
var chai = require('chai');
var expect = chai.expect;

var myApp = require('../app/library.js');

  describe('Min-Max Numbers in a List: ', function () {

    describe('Return the min and max number in the list in a new list follows `[min, max]`', function () {

      it('should return [1,4] for [1, 2, 3 , 4]', function () {
        expect(myApp.findMinMax([1, 2, 3, 4])).to.eql([1, 4]);
      });

      it('should return [4, 6] for [6, 4]', function () {
        expect(myApp.findMinMax([6, 4])).to.eql([4, 6]);
      });

      it('should return [2, 78] for [4, 66, 6, 44, 7, 78, 8, 68, 2]', function () {
        expect(myApp.findMinMax([4, 66, 6, 44, 7, 78, 8, 68, 2])).to.eql([2, 78]);
      });

    });

    describe('Return the number in the list in a new list follows `[min]` when the number is the min and max number in that list', function () {

      it('should return [4] for [4, 4, 4, 4]', function () {
        expect(myApp.findMinMax([4, 4, 4, 4])).to.eql([4]);
      });

    });

  });

describe("Fizz Buzz tests ", function() {

  it("should return `Fizz` for number divisible by 3", function() {
    expect(myApp.fizzBuzz(3)).to.equal('Fizz');
  });

  it("should return `Buzz` for number divisible by 5", function() {
    expect(myApp.fizzBuzz(5)).to.equal('Buzz');
  });

  it("should return `FizzBuzz` for 15", function() {
    expect(myApp.fizzBuzz(15)).to.equal('FizzBuzz');
  });

  it("should return `FizzBuzz` for 45", function() {
    expect(myApp.fizzBuzz(45)).to.equal('FizzBuzz');
  });

  it("should return `FizzBuzz` for 90", function() {
    expect(myApp.fizzBuzz(90)).to.equal('FizzBuzz');
  });

  it("should return `Fizz` for 63", function() {
    expect(myApp.fizzBuzz(63)).to.equal('Fizz');
  });
})



describe("Determine the sequence of an array of numbers: ", function() {

    describe("Case for an empty array", function() {

      it("should return 0 for an empty array", function() {
        expect(myApp.aritGeo([])).to.equal(0);
      });

    });


    describe("Case for an arithmetic sequence", function() {

      it("should return `Arithmetic` for [2, 4, 6, 8, 10]", function() {
        expect(myApp.aritGeo([2, 4, 6, 8, 10])).to.equal('Arithmetic');
      });

      it("should return `Arithmetic` for [5, 11, 17, 23, 29, 35, 41]", function() {
        expect(myApp.aritGeo([5, 11, 17, 23, 29, 35, 41])).to.equal('Arithmetic');
      });

      it("should return `Arithmetic` for [15, 10, 5, 0, -5, -10]", function() {
        expect(myApp.aritGeo([15, 10, 5, 0, -5, -10])).to.equal('Arithmetic');
      });

    });

    describe("Case for a geometric sequence", function() {

      it("should return `Geometric` for [2, 6, 18, 54, 162]", function() {
        expect(myApp.aritGeo([2, 6, 18, 54, 162])).to.equal('Geometric');
      });

      it("should return `Geometric` for [0.5, 3.5, 24.5, 171.5]", function() {
        expect(myApp.aritGeo([0.5, 3.5, 24.5, 171.5])).to.equal('Geometric');
      });

      it("should return `Geometric` for [−128, 64, −32, 16, −8]", function() {
        expect(myApp.aritGeo([-128, 64, -32, 16, -8])).to.equal('Geometric');
      });

    });

    describe("Case for neither arithmetic nor geometric sequence", function() {

      it("should return -1 for [1, 2, 3, 5, 8]", function() {
        expect(myApp.aritGeo([1, 2, 3, 5, 8])).to.equal(-1);
      });

      it("should return -1 for [1, 3, 6, 10, 15]", function() {
        expect(myApp.aritGeo([1, 3, 6, 10, 15])).to.equal(-1);
      });

      it("should return -1 for [1, 8, 27, 64, 125]", function() {
        expect(myApp.aritGeo([1, 8, 27, 64, 125])).to.equal(-1);
      });
      
    });
  });

