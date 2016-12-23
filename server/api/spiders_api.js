var spiders = require('../spiders/spiders_main');

module.exports = function(app){
	app.get('/mainPageData', function(req, res) {
		spiders.getMainPageData(function(data) {
			res.send(data);
		});
	});

	app.get('/songlist', function(req, res) {
		spiders.getSongList(function(data) {
			res.send(data);
		}, req.query.limit);
	});

	app.get('/typemusic', function(req, res) {
		spiders.getTypeMusic(function(data) {
			res.send(data);
		}, req.query.limit, 0, []);
	});

	app.get('/remvlist', function(req, res) {
		spiders.getReMvList(function(data) {
			res.send(data);
		});
	});

	app.get('/songmusiclist', function(req, res) {
		spiders.getSongMusicList(req.query.id, function(data) {
			res.send(data);
		});
	});

	app.get('/songlink', function(req, res) {
		spiders.getSongLink(req.query.ids, function(data) {
			res.send(data);
		});
	});

	app.get('/songinfo', function(req, res) {
		spiders.getSongInfo(req.query.ids, function(data) {
			res.send(data);
		});
	});
}