var gulp = require("gulp");
var concat = require("gulp-concat");
var uglify = require("gulp-uglify");
var minifyCss = require('gulp-minify-css');
//var minifyHtml = require('gulp-minify-html');
//var imagemin = require('gulp-imagemin');
//var rename = require("gulp-rename");
//var babel = require("gulp-babel");
//var server = require("browser-sync").create();
//var sass = require("gulp-sass");
// var load = require("gulp-load-plugins")()
//压缩JS文件
// gulp.task("default",function(){
//     gulp.src("./js/*.js")//读取要压缩的JS文件
//         .pipe(uglify())//压缩文件
//         .pipe(gulp.dest("./dist/js/"))//压缩后写入
// }) 

//压缩css文件
gulp.task('default', function () {
    gulp.src('./css/*.css') // 要压缩的css文件
    .pipe(minifyCss()) //压缩css
    .pipe(gulp.dest('./dist/css/'));//写入dist文件夹
});

//html压缩
/* gulp.task('minifyHtml', function () {
    gulp.src('./test.html') //要压缩的html文件
    .pipe(minifyHtml()) //压缩html
    .pipe(gulp.dest('./dist/'));//写入dist文件夹
}); */

//图片压缩
/* gulp.task('imagemin', function () {
    gulp.src('./img/*') // 要压缩的图片
    .pipe(imagemin()) // 压缩图片
    .pipe(gulp.dest('./dist/image/'));//写入dist文件夹
}); */

//重名名
/* gulp.task("rename",function(){
    gulp.src("./js/jquery-1.8.3.js")//读取要压缩的JS文件
        .pipe(uglify())//压缩文件
        .pipe(rename("jquery-1.8.3.min.js"))//重命名
        .pipe(gulp.dest("./dist/js/"))//压缩后写入
}) */

//es6转es5
/* gulp.task("es6toes5",function(){
    gulp.src("./js/es6.js")
        .pipe(babel({presets:["@babel/preset-env"]}))
        .pipe(gulp.dest("./dist/js/"))
}) */

//浏览器自动刷新
/* gulp.task("server",function(){
    server.init({
        server:"./",
        port:3002
    });
    // gulp.watch(["./*.html","./*.css"])  //数组写法
    gulp.watch("./*.html").on("change",server.reload)//监听变化,执行刷新
}); */

//sass文件转css
/* gulp.task("sass",function(){
    gulp.src("./sass/*.scss")
        .pipe(sass())
        .pipe(gulp.dest("./css/"))
})
 */
// gulp.task("default",function(){
//     gulp.watch("./sass/*.scss",["sass"])
// })
