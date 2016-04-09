var gulp                = require('gulp'),
    gutil               = require('gulp-util'),
    sass                = require('gulp-sass'),
    jade                = require('gulp-jade'),
    connect             = require('gulp-connect'),
    del                 = require('del'),
    historyApiFallback  = require('connect-history-api-fallback');


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
  gulp.watch('src/**/*.js',['js']);
});

gulp.task('connect', ['watch'], function() {
	connect.server({
		root: "bin/",
    port: 4000,
		livereload: true,
    middleware: function(connect, opt) {
      return [historyApiFallback({
                index: '/index.html'
              })];
    }
	});
});
/*

gulp.task('connect', function() {
  connect.server({
    root: __dirname,
    livereload: true,

    middleware: function(connect, opt) {
      return [ historyApiFallback ];
    }

  });
});

*/
gulp.task('default', ['jade','sass','js','connect']);