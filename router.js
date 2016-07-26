var express = require('express');
var fs = require('fs');

var router = express.Router();


router.get('/', function(req, res) {
	

	fs.readFile('./files/about.txt', function(err, contents) {
		
		if (err) {
			console.log(err);
		} else {
			var about = contents;
			res.render('index', {bio: about});
		}
	
	});

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