'use strict';

var gulp = require('gulp');
var handlebars = require('gulp-handlebars');
var defineModule = require('gulp-define-module');
var declare = require('gulp-declare');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');

// Converting handlebars templates *.hbs into js
gulp.task('hbs', function() {
    gulp.src(['dev/templates/*.hbs'])
        .pipe(handlebars())
        .pipe(defineModule('plain'))
        .pipe(declare({
            namespace: 'SizeChart.templates'
        }))
        .pipe(concat('templates.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dest/js/'));
});


// Watch the hbs templates and compile
// when the file has changed...
gulp.task('watch-hbs', function() {
    gulp.watch('dev/templates/*.hbs', ['hbs']);
});