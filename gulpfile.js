var gulp        = require('gulp'),
    gutil       = require('gulp-util'),
    sass        = require('gulp-sass'),
    jade        = require('gulp-jade'),
    connect     = require('gulp-connect'),
    del         = require('del');


gulp.task('sass', function() {
  return gulp.src('src/assets/styles/app.scss')
    .pipe( sass().on('error', sass.logError) )
    .pipe( gulp.dest('bin/assets/styles/') )
    .pipe( connect.reload() );    
});

gulp.task('js', function() {
  return gulp.src('src/assets/scripts/*.js')
    .pipe( gulp.dest('bin/assets/js/'))
    .pipe( connect.reload() );
});

gulp.task('jade', function() {
  return gulp.src('src/**/*.jade')
    .pipe( jade({ pretty: true }).on('error', function(e) {gutil.log(e.message); gutil.beep();}))
    .pipe( gulp.dest('bin/'))
    .pipe( connect.reload() );
});

gulp.task('clean', function () {
	del(['bin/**/*', '!bin/', '!bin/bower_components', '!bin/bower_components/**/*', '!bin/bower.json', '!bin/assets/js/**/*'], {force: true}).then(paths => {
    if(paths.length != 0){
      gutil.log('Files and folders that were deleted:\n', gutil.colors.orange(paths.join('\n')));
    }
  });
});

gulp.task('watch', function () {
  gulp.watch('src/assets/styles/*.scss',['sass']);
  gulp.watch('src/**/*.jade',['jade']);
});

gulp.task('connect', ['watch'], function() {
	connect.server({
		root: "bin/",
    port: 4000,
		livereload: true
	});
});

gulp.task('default', ['jade','sass','js','connect']);