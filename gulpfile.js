// gulpfile.js
var gulp = require("gulp")
var browserSync = require("browser-sync");
var coffee = require("gulp-coffee");
 

// compile coffeescript
gulp.task('coffee', function() {
  gulp.src('./Project/*.coffee')
    .pipe(coffee({bare: true}))
    .pipe(gulp.dest('./Project'));
});



// Static Server + watching scss/html files
gulp.task('default', ['coffee'], function() {

    browserSync.init({
        server: "./Project"
    });

    gulp.watch("./Project/*.coffee").on('change', browserSync.reload);
});

