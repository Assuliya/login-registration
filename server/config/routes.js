var users = require('../controllers/users.js');

module.exports = function(app){
  app.get('/', function(req, res) {
    users.show(req, res)
  })

}
