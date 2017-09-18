const gulp = require('gulp')
const sass = require('gulp-sass')
const autoprefixer = require('gulp-autoprefixer')
const cleanCSS = require('gulp-clean-css')

gulp.task('sass', function() {
    return gulp.src('./src/sass/style.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer({
          browsers: ['last 4 versions', 'last 6 iOS versions']
        }))
        .pipe(cleanCSS())
        .pipe(gulp.dest('./build/css/'))
})

gulp.task('watch', function() {
  gulp.watch('./src/sass/**/*.scss', ['sass'])
})

gulp.task('default', ['sass'])
gulp.task('dev', ['default', 'watch'])