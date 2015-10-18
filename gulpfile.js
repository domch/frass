var gulp = require('gulp');
var uglify = require('gulp-uglify');
var browserify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var BrowserifyUmdify = require('browserify-umdify');

gulp.task('build', function () {
        browserify({
            entries: 'src/Frass.js',
            extensions: ['.jsx', '.es6', '.js']
        })
        .transform(babelify)
        .bundle()
        .pipe(new BrowserifyUmdify())
        .pipe(source('frass.js'))
        //.pipe(buffer())
        //.pipe(uglify())
        .pipe(gulp.dest('dist'));
});

gulp.task('default', ['build']);
