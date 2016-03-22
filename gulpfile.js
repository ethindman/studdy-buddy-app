'use strict';

var $          = require('gulp-load-plugins')();
var urlHistory = require('connect-history-api-fallback');
var gulp       = require('gulp');
var nib        = require('nib');
var browser    = require('browser-sync').create();
var rimraf     = require('rimraf');
var sequence   = require('run-sequence');
var PORT       = 3000;

// Worker functions ----------------------------------------------------------------------------------------

// Destroy public folder before build task
gulp.task('clean', function(done) {
  rimraf('public', done);
});

// javascript -- concat and uglify JS -> app.min.js
gulp.task('javascript', function() {
    gulp.src([
        'src/*.js',
        'src/js/services/*.js',
        'src/js/controllers/*.js'
    ])
        .pipe($.concat('app.min.js'))
        .pipe($.ngAnnotate())
        // .pipe($.uglify())
        .pipe(gulp.dest('./public/js'))
        .on('finish', browser.reload);
});

// jade -- compiles Jade to HTML
gulp.task('jade', function() {
    // Compile views
    gulp.src('src/index.jade')
        .pipe($.jade())
        .pipe($.rename('index.html'))
        .pipe(gulp.dest('./public'));

    gulp.src('src/views/**/*.jade')
        .pipe($.jade())
        .pipe(gulp.dest('./public/html'))
        .on('finish', browser.reload);
});

// stylus -- compile, concat & compress stylus files -> app.min.css
gulp.task('stylus', function () {
    gulp.src('src/styles/*.styl')
        .pipe($.concat('app.styl'))
        .pipe($.stylus({
            compress: true,
            'include css': true,
            use: nib()
        }))
        .pipe($.rename('app.min.css'))
        .pipe(gulp.dest('./public/css'))
        .pipe(browser.reload({ stream: true }));
});

// images - compress images
gulp.task('images', function() {
  gulp.src('src/img/**/*')
    .pipe($.imagemin({
        progressive: true
        }))
    .pipe(gulp.dest('./public/img'))
    .on('finish', browser.reload);
});

// server -- start the server
gulp.task('server', function() {
    browser.init({
        server: 'public/', 
        port: PORT,
        baseDir: 'public',
        middleware: [ urlHistory() ]
    });
});

// compile -- compile JS, Jade, Stylus & Images
gulp.task('compile', function(done) {
    sequence('clean', ['javascript', 'jade', 'stylus', 'images'], done);
});

// default -- run copile tasks, start server and set watch tasks
gulp.task('default', ['compile', 'server'], function() {
    // Watch JavaScript files
    gulp.watch(['src/*.js', 'src/js/**/*.js'], ['javascript']);

    // Watch Jade files
    gulp.watch(['src/*.jade', 'src/views/**/*.jade', 'src/includes/**/*.jade'], ['jade']);

    // Watch Stylus files
    gulp.watch(['src/styles/*.styl', 'src/styles/**/*.styl'], ['stylus']);
});