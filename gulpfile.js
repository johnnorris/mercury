const gulp = require('gulp')
const sass = require('gulp-sass')
const autoprefixer = require('gulp-autoprefixer')
const nunjucks = require('gulp-nunjucks-render')
const htmlmin = require('gulp-htmlmin')
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

gulp.task('nunjucks', function() {
    return gulp.src('./src/templates/pages/**/*.njk')
        // Renders template with nunjucks
        .pipe(nunjucks({
            path: ['./src/templates']
        }))
        .pipe(htmlmin({ collapseWhitespace: true }))
        // output files in app folder
        .pipe(gulp.dest('./build'))
})

gulp.task('watch', function() {
    gulp.watch('./src/sass/**/*.scss', ['sass'])
    gulp.watch('./src/templates/**/*.njk', ['nunjucks'])
})

gulp.task('default', ['sass', 'nunjucks'])
gulp.task('dev', ['default', 'watch'])