var glue = require('./index');
var gulp = require('gulp');

/**
 * デフォルトタスク
 */
gulp.task('default', function () {
    gulp.src('./test/images')
        .pipe(glue('./test',{quiet:true}));
});

gulp.task('separate', function () {
    gulp.src('./test/images')
        .pipe(glue({
            css: './test/css',
            img: './test/sprite'
        }));
});