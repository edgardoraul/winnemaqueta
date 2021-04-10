var gulp = require('gulp'), sass = require('gulp-sass'), autoprefixer = require('gulp-autoprefixer'),

browserSync = require('browser-sync').create();

var input = 'sass/*.sass';

var output = 'css/';

// BROWSER-SYNC
gulp.task('browser-sync', function()
{
	browserSync.init({
		proxy: 'http://http://127.0.0.1:5500'
	});
});

// SASS
gulp.task('sass', function ()
{
	gulp.src(input)
	.pipe(sass({
	outputStyle: 'compressed'
	}).on('error', sass.logError)).pipe(autoprefixer({
		browsers: ['last 2 versions', 'android 4'],
		cascade: false
	})).pipe(gulp.dest(output)).pipe(browserSync.stream());
});

// WATCH
gulp.task('default', ['browser-sync', 'sass'], function ()
{
	gulp.watch(input, ['sass']);
});