var gulp = require('gulp'),
	plugins = require('gulp-load-plugins')();

var port = 9090;

gulp.task('open', function() {
	gulp.src('./')
		.pipe(plugins.open({
			uri: 'http://localhost:' + port + '/resources/index.html',
			app: 'chrome'
		}));
});

gulp.task('connect', function(){
	plugins.connect.server({
		root: './',
		port: port,
		livereload: true
	});
});

gulp.task('reload', function(){
	gulp.src('./resources/index.html')
		.pipe(plugins.connect.reload());
});

gulp.task('watch', function(){
	gulp.watch(['./resources/**/*'], ['reload']);
});

gulp.task('default', ['open', 'connect', 'watch']);