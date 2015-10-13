var gulp = require('gulp');
var browserify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');
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
        .pipe(gulp.dest('dist'));
});

gulp.task('default', ['build']);
