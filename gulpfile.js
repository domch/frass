var gulp = require('gulp');
var concat = require('gulp-concat');
var watch = require('gulp-watch');
var uglify = require('gulp-uglify');
var babelify = require('babelify');
var browserify = require('browserify');
var source = require('vinyl-source-stream');

gulp.task('build', function() {
        browserify({
            entries: './src/ApplicationFactory.js',
            debug: false
        })
        //.transform(babelify)
        .bundle()
        .pipe(source('frass.js'))
        .pipe(gulp.dest('./dist'));
});



