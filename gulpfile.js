// Include gulp
var gulp = require('gulp'); 

// Include Our Plugins
var stylus = require('gulp-stylus');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');


// Compile Our stylus
gulp.task('stylus', function() {
    return gulp.src('css/*.styl')
        .pipe(stylus())
        .pipe(gulp.dest('css'));
});

// Concatenate & Minify JS
gulp.task('scripts', function() {
    return gulp.src('js/*.js')
        .pipe(concat('all.js'))
        .pipe(gulp.dest('dist'))
        .pipe(rename('all.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist'));
});

// Watch Files For Changes
gulp.task('watch', function() {
    gulp.watch('js/*.js', ['lint', 'scripts']);
    gulp.watch('css/*.styl', ['stylus']);
});

// Default Task
gulp.task('default', ['stylus', 'scripts', 'watch']);