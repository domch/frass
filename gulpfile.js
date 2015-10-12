var gulp = require('gulp'),
    rjs = require('gulp-requirejs'),
    minify = require('gulp-minify');


gulp.task('build', function() {
    rjs({
        name: 'ApplicationFactory',
        baseUrl: './src',
        out: 'frass.js',
        paths:
        {
            modernizr: '_libs/modernizr/modernizr',
            jquery: '_libs/jquery/dist/jquery.min',
            text: '_libs/requirejs-text/text',
            signals: '_libs/signals/dist/signals.min',
            crossroads: '_libs/crossroads.js/dist/crossroads.min',
            numeral: '_libs/numeraljs/min/numeral.min',
            moment: '_libs/moment/min/moment.min',
            radio:'_libs/Radio/radio.min',
            ractive: '_libs/ractive/ractive.min'
        },

        shim: {}
    })
        .pipe(minify({
            exclude: ['tasks'],
            ignoreFiles: ['.combo.js', '-min.js']
        }))
        .pipe(gulp.dest('./dist/'));
});


gulp.task('default', ['build']);