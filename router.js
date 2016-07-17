var express = require('express');

var router = express.Router();


router.get('/', function(req, res) {
	res.render('index');
});


//routing for downloading files from file directory
router.get('/files/:name', function(req, res, next)	{

	var options = {
		root: __dirname + '/files',
		dotfiles: 'deny',
		headers: {
			'x-timestap': Date.now(),
			'x-sent': true
		}	
	};

	var filename = req.params.name;
	res.sendFile(filename, options, function(err) {
		if (err) {
			console.log(err);
			res.status(err.status).end();
		} 
		else {
			console.log('Sent', filename);
		}
	});
});

module.exports = router;