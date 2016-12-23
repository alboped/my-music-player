var http = require('http');
var cheerio = require('cheerio');

var MusicMainPageData = {
	time: Date.now(),
	carousel: [],
	newMusic: []
}

/**
 * 请求页面
 * _url: 请求链接
 * callback: 操作页面的回调函数
 */
var startRequrest = function(_url, callback, type) {
	http.get(_url, function(res){
		var html = '';
		var titles = [];
		res.setEncoding('utf-8');

		res.on('data', function(chunk) {
			html += chunk;
		});

		res.on('end', function() {
			callback(type === undefined ? cheerio.load(html) : html);
		});
	})
}

/**
 * 获取百度音乐首页轮播图列表
 */
exports.getMainPageData = function(callback) {
	startRequrest('http://music.baidu.com/', function($) {
		var carousel = $('#js-random-focus li').map(function() {
			return {
				title: $(this).attr('data-title'),
				path: $('img', this).attr('data-wide')
			};
		}).get();

		var newMusic = $('.mod-release .mui-slider-scroll-container li').map(function() {
			return {
				img: $('.pic>a img', this).data('src') || $('.pic>a img', this).attr('src'),
				info: $('.pic span', this).data('args'),
				mname: $('.music a', this).text(),
				musicLink: $('.music a', this).attr('src'),
				sname: $('.artist a', this).text().trim(),
				singerLink: $('.artist a', this).attr('src')
			}
		}).get().slice(0, 10);

		callback({
			carousel: carousel,
			newMusic: newMusic
		}); 
	});
}

/**
 * 获取百度音乐歌单列表
 * 默认为最热歌单
 */
exports.getSongList = function(callback, limit) {
	startRequrest('http://music.baidu.com/songlist', function($) {
		callback($('.songlist-list li').map(function(){
			return {
				id: $('.songlist-play-hook', this).data('listid'),
				img: $('.img-wrap img', this).attr('src'),
				title: $('.text-title a', this).attr('title'),
				num: $('.num span', this).text().trim()
			};
		}).get().slice(0, limit));
	});
}

/**
 * 获取歌单详细歌曲列表
 */
exports.getSongMusicList = function(listId, callback){
	startRequrest('http://music.baidu.com/songlist/' + listId, function($){
		callback($('.songlist-list li').map(function(){
			return $(this).data('songitem').songItem.sid;
		}).get());
	});
}

/**
 * 获取百度音乐音乐分类列表
 */
var getTypeMusic = function(callback, limit, start, list) {
	startRequrest('http://music.baidu.com/tag/%E6%96%B0%E6%AD%8C?start=' + start + '&size=25&third_type=0', function($) {
		var songList = list.concat($('.song-list-hook li').map(function(){
			return $(this).data('songitem');
		}).get());

		if(songList.length < 10) {
			getNewMusic(callback, limit, start + 25, songList);
		} else {
			callback(songList.slice(0, limit));
		}
	});
}
exports.getTypeMusic = getTypeMusic;

/**
 * 获取mv列表
 */
exports.getReMvList = function(callback){
	startRequrest('http://music.baidu.com/mv', function($){
		callback($('.mv-list li').map(function() {
			return {
				img: $('img', this).attr('src'),
				mvLink: $('.mv-icon', this).attr('href'),
				mvname: $('.song-title a', this).attr('title'),
				sname: $('.siger-name .author_list', this).attr('title')
			}
		}).get().slice(0, 3));
	});
}

/**
 * 根据歌曲ID获取歌曲文件信息
 */
exports.getSongLink = function(ids, callback){
	startRequrest('http://play.baidu.com/data/music/songlink?songIds=' + 
		ids + 
		'&hq=0&type=m4a,mp3&rate=""&pt=0&flag=-1&s2p=-1&' + 
		'preate=-1&bwt=-1&dur=-1&bat=-1&bp=-1&pos=-1&auto=-1', 
	callback, 'json');
}

/**
 * 根据歌曲ID获取歌曲其他信息
 */
exports.getSongInfo = function(ids, callback){
	startRequrest('http://play.baidu.com/data/music/songinfo?songIds=' + ids, callback, 'json');
}