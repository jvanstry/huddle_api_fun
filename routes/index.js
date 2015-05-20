
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Express' });
};

exports.receiveAuthCode = function(req, res) {
  console.log('hi')
};
