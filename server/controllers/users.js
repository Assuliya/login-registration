var mongoose = require('mongoose');
var User = mongoose.model('User')

module.exports = {
  show: function(req, res){
      res.render('index');
    }
  

}
