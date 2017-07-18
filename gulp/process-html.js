var vars = require('./vars'),
	gulp = require('gulp'),
	localServer = require('gulp-connect'),
	handlebars = require('gulp-compile-handlebars'),
	rename = require('gulp-rename'),
	// nanofyHtml = require('gulp-htmlmin'),
	fs = require('fs'),
	plumber = require('gulp-plumber');
// stripHtmlComments = require('gulp-strip-comments');


gulp.task('process-html', [], function() {
	return gulp.src(vars.paths.html.src)
		.pipe(plumber())
		// .pipe(stripHtmlComments())
		// .pipe(nanofyHtml({collapseWhitespace: true}))
		.pipe(gulp.dest(vars.paths.html.dest))
		.pipe(localServer.reload());
});

gulp.task('process-handlebars', [], function() {
	var jsonObject = JSON.parse(fs.readFileSync(vars.paths.data.json.src + 'handlebars.json', 'utf8'));
	options = {
		ignorePartials: true,
		batch: [vars.paths.handlebars.partials]
	};

	return gulp.src(vars.paths.handlebars.src)
		.pipe(plumber())
		.pipe(handlebars(jsonObject , options))
		.pipe(rename({extname: '.html'}))
		.pipe(gulp.dest(vars.paths.handlebars.dest))
		.pipe(localServer.reload());
});