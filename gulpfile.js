const gulp = require('gulp');
const browserify = require('browserify');
const source = require('vinyl-source-stream');

gulp.task('build', function() {
    browserify({
        'entries': ['./main.js']
    })
        .bundle()
        .pipe(source('bundle.js'))
        .pipe(gulp.dest('./'))
});

gulp.task('default', ['build']);
