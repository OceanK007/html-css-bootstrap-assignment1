const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('Browser-sync');
var http = require('http');

var server = http.createServer(function(request,response)
{

});
server.listen(8080);

// To add all .scss file: src/scss/*.scss
gulp.task('sass', () => {
    return gulp 
            .src(['node_modules/bootstrap/scss/bootstrap', 'src/scss/style.scss'])
            .pipe(sass())
            .pipe(gulp.dest('src/css'))
            .pipe(browserSync.stream());
});

gulp.task('js', () => {
    return gulp
    .src(['node_modules/bootstrap/dist/js/bootstrap.js','node_modules/jquery/dist/jquery.js','node_modules/popper.js/dist/popper.js'])
    .pipe(gulp.dest('src/js/'))
    .pipe(browserSync.stream())
});

gulp.task('serve', ['sass'], () => {
    browserSync.init
    ({
        server:'src/*',
        port: 8080
    });
    gulp.watch(['src/scss/*.scss'], ['sass']);
    gulp.watch('src/*.html', 
    browserSync.reload()
    );
});

gulp.task('default', ['serve', 'js']);