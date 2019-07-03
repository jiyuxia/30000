var gulp = require("gulp");
var concat = require('gulp-concat');
var uglify = require('uglify');


//压缩js
gulp.task('uglifyJS',function(){
    gulp.src('./js/*.js')//读取到要压缩的js文件
    .pipe(uglify())//压缩文件
    .pipe(gulp.dest('./dist/js/'))
})