// let chai = require('chai');
// var assert = chai.assert;
// let chaiHttp = require('chai-http');
// let server = require('../server');
// let should = chai.should();

// describe('Array', function() {
//   describe('#indexOf()', function() {
//     it('should return -1 when the value is not present', function() {
//       assert.equal([1, 2, 3].indexOf(4), -1);
//     });
//   });
// });

var assert = require('chai').assert
  , foo = 'bar'
  , beverages = { tea: [ 'chai', 'matcha', 'oolong' ] };

// let foo = "bar"

assert(foo === "bar", 'foo is a string'); // without optional message