var gulp = require ("gulp");
var sass = require ("gulp-sass");
var browserSync = require ("browser-sync");

var gulp = require('gulp'); // Подключаем Gulp
var  sass = require('gulp-sass'); //Подключаем Sass пакет


    gulp.task('css', function () {
        gulp.src('./src/sass/**/*.scss')
            .pipe(sass())
            .pipe(gulp.dest("./build/css"))
            .pipe(browserSync.reload({
               stream: true
           }));
    });
gulp.task('sass', function(){ // Создаем таск "sass"
    return gulp.src('src/sass/*.sass') // Берем источник
        .pipe(sass()) // Преобразуем Sass в CSS посредством gulp-sass
        .pipe(gulp.dest('build/css')) // Выгружаем результата в папку app/css
});gulp.task('css', function () {
    gulp.src('./src/sass/**/*.scss')
         .pipe(sass.sync().on('error', sass.logError))
        .pipe(gulp.dest("./build/css"))
        .pipe(browserSync.reload({
           stream: true
       }));
});
gulp.task('sass:watch', function () {
  gulp.watch('./sass/**/*.scss', ['sass']);
});



gulp.task('html', function () {
    gulp.src('./src/**/*.html')
        .pipe(gulp.dest('./build/'))
        .pipe(browserSync.reload({
           stream: true
       }));
});

gulp.task('server', function () {
    browserSync.init({
        server: './build'
    });

    gulp.watch('./src/**/*.html', ['html']);
    gulp.watch('./src/**/*.scss', ['css']);
});

gulp.task('default', ['server', 'html', 'css']);
