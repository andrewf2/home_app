var assert = require("assert");
var home = require("../model/home.js")();
var coMocha = require('co-mocha')




describe('all()',function(){
  it('should return an array of all the houses', function(){
    home.all().then(function(homes){
      homes.should.have.length(3);
    });
    
  })
})
