const gulp = require('gulp');
const plumber = require('gulp-plumber');
const errorHandler = require('gulp-plumber-error-handler');
const imagemin = require('gulp-imagemin');
const changed = require('gulp-changed');
const pngquant = require('imagemin-pngquant');

module.exports = () => (
  gulp.src('app/static/images/**/*')
  .pipe(plumber({
    errorHandler: errorHandler('Error in icons task'),
  }))
  .pipe(changed('dist/assets/images'))
  .pipe(imagemin([
    pngquant(),
  ], {
    verbose: true,
  }))
  .pipe(gulp.dest('dist/assets/images'))
);
