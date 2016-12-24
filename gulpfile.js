var gulp = require('gulp');
var $    = require('gulp-load-plugins')();

var sassPaths = [
  'skin/assets/bower_components/foundation-sites/scss',
  'skin/assets/bower_components/motion-ui/src'
];

gulp.task('sass', function() {
  return gulp.src('skin/assets/scss/app.scss')
    .pipe($.sass({
      includePaths: sassPaths
    })
    .on('error', $.sass.logError))
    .pipe($.autoprefixer({
      browsers: ['last 2 versions', 'ie >= 9']
    }))
    .pipe(gulp.dest('skin/assets/css'));
});

gulp.task('default', ['sass'], function() {
  gulp.watch(['scss/**/*.scss'], ['sass']);
});
