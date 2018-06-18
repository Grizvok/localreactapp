const gulp = require('gulp');
const babel = require('gulp-babel');
//gulp dependencies go here

gulp.task('default', function() {
	gulp.src('server/src/**/*.js')
		.pipe(babel())
		.pipe(gulp.dest('server/dist'));
});