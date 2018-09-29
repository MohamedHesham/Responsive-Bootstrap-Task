'use strict';

var gulp = require('gulp'),
sass = require('gulp-sass'),
browserSync = require('browser-sync');

gulp.task('sass', function() {
    return gulp.src('./css/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dist('./css'));
});

gulp.task('sass:watch', function() {
    gulp.watch('./css/*.scss', [sass]);
});

gulp.task('browser-sync', function() {
    var files = [
        './*.html',
        './css/*.css',
        './js/*.js',
        './img/*.{png,jpg,gif}'
    ];

    browserSync.init(files, {
        server: {
            baseDir: './'
        }
    });
});

gulp.task('default', ['browser-sync'], function() {
    gulp.start('sass:watch');
});