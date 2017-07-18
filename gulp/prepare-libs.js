var vars = require('./vars'),
	gulp = require('gulp'),
	gzip = require('gulp-gzip'),
	concat = require('gulp-concat');

/* SASS UTILS */
var prepareLibsTasks = [];
for (var item in vars.paths.sassUtils) {
	if (!vars.paths.sassUtils.hasOwnProperty(item)) continue;
	(function (item) {
		gulp.task('prepare-sass-'+ item, function() {
			return gulp.src([
				vars.paths.sassUtils[item].src
			])
			.pipe(gulp.dest(vars.paths.sassUtils[item].dest));
		});
	})(item);
	prepareLibsTasks.push('prepare-sass-' + item);
}


gulp.task('prepare-libs', prepareLibsTasks);
