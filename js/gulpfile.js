const gulp = require("gulp");

const htmlmin = require("gulp-htmlmin");

gulp.task("copy-html", function(){
    return gulp.src("*.html")
    // .pipe(
    //     htmlmin({
    //       removeEmptyAttibutes: true, // 移出所有空属性
    //       collapseWhitespace: true, // 压缩 html
    //     })
    //   )
    .pipe(gulp.dest("work/"))   
    .pipe(connect.reload());
})

gulp.task("images", function(){
    return gulp.src("img/*.{jpg,png}")
    .pipe(gulp.dest("work/images"))
    .pipe(connect.reload());
})

gulp.task("data", function(){
    return gulp.src("*.json")
    .pipe(gulp.dest("work/data"))
    .pipe(connect.reload())
})

const sass = require("gulp-sass");
const minifyCSS = require("gulp-minify-css");
const rename = require("gulp-rename")

gulp.task("sass", function(){
    return gulp.src("*.scss")
    .pipe(sass())
    .pipe(gulp.dest("work/css"))
    // .pipe(minifyCSS())
    // .pipe(rename("index.min.css"))
    // .pipe(gulp.dest("work/css"))
    .pipe(connect.reload())
})

const concat = require("gulp-concat");
const uglify = require("gulp-uglify")

gulp.task("scripts", function(){
    return gulp.src("*.js")
    .pipe(gulp.dest("work/js"))
    // .pipe(uglify())
    // .pipe(rename("index.min.js"))
    // .pipe(gulp.dest("work/js"))
    .pipe(connect.reload())
})

gulp.task("build", ["copy-html", "images", "data", "sass", "scripts"], function(){
    console.log("运行结束");
  });

gulp.task("watch", function(){
    gulp.watch("*.html",["copy-html"]);
    gulp.watch("img/*.{jpg,png}", ["images"]);
    gulp.watch("*.json", ["data"]);
    gulp.watch("*.scss", ["sass"]);
    gulp.watch("*.js", ["scripts"])
})

const connect = require("gulp-connect");

gulp.task("server", function(){
    connect.server({
        root:"work",
        port:524,
        livereload:true
    })
})

gulp.task("default", ["watch", "server"])