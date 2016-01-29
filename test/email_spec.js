var coMocha = require('co-mocha')
var assert = require("assert");
var Auth = require("../auth/Auth.js")();
var User = require("../model/user.js")();
var Mailer = require('nodemailer').createTransport('smtps://andrewf02%40yopmail.com:pass@smtp.yopmail.com')


describe("mailer",function(){
  
  it("should send an email",function(){
    var mailOptions = {
      from:'Home App <homeapp@yopmail.com>',
      to:'testHomeAppUser@yopmail.com',
      subject:"test email",
      text:"this is just a test",
      html:'<b>Hello World</b>'
    }
    
    Mailer.sendMail(mailOptions,function(err,data){
      if(err){
        return console.log(err)
      }
      console.log(data.response)
    })
  })
})

